import { Field } from "./fields";

export interface FormField {
    type: string;
    label: string;
    name: string;
    fields: Field[];
  }
  