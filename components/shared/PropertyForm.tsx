"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { propertyFormSchema } from "@/lib/validator";
import * as z from "zod";
import { PropertyFormDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import DropdownPropertyType from "./DropdownPropertyType";
import FileUploader from "./FileUploader";
import { useState } from "react";

type PropertyFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const PropertyForm = ({ userId, type }: PropertyFormProps) => {

  const [files, setFiles] = useState<File[]>([])

  // 1. Define your form.
  const initialValues = PropertyFormDefaultValues;

  const form = useForm<z.infer<typeof propertyFormSchema>>({
    resolver: zodResolver(propertyFormSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof propertyFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Property Title" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea placeholder="Property Desciption" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Full Address" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Zip Code" type="number" {...field} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Country" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="State" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="City" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <DropdownPropertyType onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Property Price" type="number" {...field} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <FormField
            control={form.control}
            name="builtupArea"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Built Up Area (Optional)" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="carpetArea"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Carpet Area (Optional)" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Size (Optional)" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="sellerPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Your Contact Number" type="number" {...field} className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrls"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PropertyForm;
