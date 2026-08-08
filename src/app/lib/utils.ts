import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import slugify from "slugify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateSlug(name: string) {
  return slugify(name, {
    lower: true,
    strict: true,
    trim: true,
  });
}
