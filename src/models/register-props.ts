import { TextFieldProps } from "@mui/material";
import { FieldConfig } from "./field-config";

export interface RegisterProps {
  headerLabel?: string | React.JSX.Element;
  fieldsToShow: (FieldConfig & TextFieldProps)[];
  registerButtonLabel?: string;
  registerButtonSize?: "small" | "normal" | "large";
  registerButtonColor?: string;
  customRegisterButton?: React.JSX.Element;
  onRegister?: (event: any) => void;
}
