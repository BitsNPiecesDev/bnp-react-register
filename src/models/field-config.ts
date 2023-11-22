import { FieldType } from "./input-type.enum";
import { Validator } from "./validators";

export interface FieldConfig {
  id: string;
  field: FieldType;
  label?: string | React.JSX.Element;
  helperText?: string | React.JSX.Element;
  validation?: Validator;
  onChange?: (arg: { field: string; value: string }) => any;
  type?: "text" | "password" | "tel" | "textarea" | "number";
}
