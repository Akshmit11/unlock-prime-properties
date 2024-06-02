import { z } from "zod";

export const headerLinks = [
    {
      label: 'For Sale',
      route: '/',
    },
    {
      label: 'Agent Finder',
      route: '/agent-finder',
    },
  ]

const categoryEnum = z.enum(["residential", "commercial"]); 
export type categoryEnum = z.infer<typeof categoryEnum>;
const propertyTypeEnum = z.enum([
  "plot/land",
  "flat",
  "house",
  "office",
  "storage",
  "industry",
  "hospital",
  "other",
]);
type propertyTypeEnum = z.infer<typeof propertyTypeEnum>;

export const PropertyFormDefaultValues = {
  title: '',
  category: categoryEnum.Enum.residential,  // Must match one of the enum values
  builtupArea: '',
  carpetArea: '',
  size: '',
  imageUrls: [],
  price: '',
  location: '',
  zipCode: '',
  country: '',
  state: '',
  city: '',
  propertyType: propertyTypeEnum.Enum["plot/land"],  // Must match one of the enum values
  description: '',
  features: [],
  sellerPhone: '',
  active: true,
}