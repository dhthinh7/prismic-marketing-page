import { RTLabelNode } from "@prismicio/client";
import { RichTextMapSerializerFunction } from "@prismicio/client/richtext";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
