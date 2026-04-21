import { type Path } from "react-hook-form";
import { type FormValues } from "@/src/app/create-card/create-card/types";
import { fileInputs, designVariants } from "./DesignVariants";

type FileInputs = {
  id: Path<FormValues>;
  title: string;
  text: string;
}[];

type FileFieldKeys = (typeof fileInputs)[number]["id"];

type DesignVariant = (typeof designVariants)[number]["id"];

export { type FileInputs, type FileFieldKeys, type DesignVariant };
