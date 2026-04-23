import { type Path } from "react-hook-form";
import { type FormValues } from "@/src/app/create-card/create-card/types";
import { designVariants } from "./DesignVariants";

type FileInputs = {
  id: Path<FormValues>;
  title: string;
  text: string;
}[];

type DesignVariant = (typeof designVariants)[number]["id"];

export { type FileInputs, type DesignVariant };
