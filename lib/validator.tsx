import * as z from "zod";

const propertyTypeEnum = [
  "plot/land",
  "flat",
  "house",
  "office",
  "storage",
  "industry",
  "hospital",
  "other",
] as const;

const categoryEnum = ["residential", "commercial"] as const;

export const propertyFormSchema = z.object({
  title: z.string().min(3, { message: "Title is required" }),
  category: z.enum(categoryEnum, {
    errorMap: () => ({ message: "Invalid category" }),
  }),
  builtupArea: z.string().optional(),
  carpetArea: z.string().optional(),
  size: z.string().optional(),
  imageUrls: z
    .array(z.string().url(), {
      required_error: "At least one image URL is required",
    })
    .min(1),
  price: z.string().min(1, { message: "Price is required" }),
  location: z.string().min(5, { message: "Location is required" }),
  zipCode: z.string().min(2, { message: "Zip code is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  state: z.string().min(2, { message: "State is required" }),
  city: z.string().min(2, { message: "City is required" }),
  propertyType: z.enum(propertyTypeEnum, {
    errorMap: () => ({ message: "Invalid property type" }),
  }),
  description: z.string().min(2, { message: "Description is required" }),
  sellerPhone: z.string().length(10, { message: "Seller phone is required" }),
});
