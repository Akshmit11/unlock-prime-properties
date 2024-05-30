"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import User from "../database/models/user.model";
import { revalidatePath } from "next/cache";
import Property from "../database/models/property.model";
import Agent from "../database/models/agent.model";
import Transaction from "../database/models/transaction.model";

// create user - C
export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

// get user by id - R
export const getUserById = async (userId: string) => {
  try {
    await connectToDatabase();

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

// update user - U
export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

// delete user - D
export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase();
    const userToDelete = await User.findOne({ clerkId });
    if (!userToDelete) {
      throw new Error("User not found");
    }

    // unlink all relationship or delete user information from other models if any
    await Promise.all([
      // Delete properties uploaded by the user
      Property.deleteMany({ user: userToDelete._id }),

      // Delete related agent entry if exists
      Agent.deleteMany({ user: userToDelete._id }),

      // Delete any transactions related to the user
      Transaction.deleteMany({ user: userToDelete._id }),
    ]);

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
};
