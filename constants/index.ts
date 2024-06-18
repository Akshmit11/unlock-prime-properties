import { z } from "zod";

export const headerLinks = [
  {
    label: "For Sale",
    route: "/for-sale",
  },
  {
    label: "Agent Finder",
    route: "/agent-finder",
  },
  {
    label: "Prime Properties",
    route: "/prime-properties",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
  },
  
];

export const primePropertyFilters = [
  "View All",
  "Plot/Land",
  "Flat",
  "House",
  "Office",
  "Storage",
  "Industry",
  "Hospital",
  "Other",
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
  title: "",
  category: categoryEnum.Enum.residential, // Must match one of the enum values
  builtupArea: "",
  carpetArea: "",
  size: "",
  imageUrls: [],
  price: "",
  location: "",
  zipCode: "",
  country: "",
  state: "",
  city: "",
  propertyType: propertyTypeEnum.Enum["plot/land"], // Must match one of the enum values
  description: "",
  features: [],
  sellerPhone: "",
  active: true,
};

export const features = {
  Agent: {
    price: "1000",
    plan_name: "For Agents",
  },
  Builder: {
    price: "10000",
    plan_name: "For Builders",
  },
};

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};
