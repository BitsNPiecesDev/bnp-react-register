import { TextFieldProps } from "@mui/material";
import { FieldConfig } from "./field-config";
import { Validator } from "./validators";

export interface RegisterProps {
  headerLabel?: string | React.JSX.Element;

  fieldsToShow: (FieldConfig & TextFieldProps)[];

  registerButtonLabel?: string;
  inputFieldSize?: "small" | "normal" | "large";
  registerButtonSize?: "small" | "normal" | "large";
  registerButtonColor?: string;

  customRegisterButton?: React.JSX.Element;
  validators?: Validator;
  onChange?: (event: any) => void;
  onRegister?: (event: any) => void;
}
