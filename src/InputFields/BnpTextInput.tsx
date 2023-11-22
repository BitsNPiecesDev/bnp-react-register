import React from "react";
import { FieldConfig } from "../models/field-config";
import { TextField, TextFieldProps } from "@mui/material";

// export interface FieldConfig {
//   field: FieldType;
//   label?: string | React.JSX.Element;
//   helperText?: string | React.JSX.Element;
//   validation: Validator;
// }

function getErrorText(props: FieldConfig & TextFieldProps) {
  return props.validation?.errorText ?? `Invalid ${props.field.toLowerCase()}`;
}

export default function BnpTextInput(props: FieldConfig & TextFieldProps) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleValidation(value: string) {
    if (props.validation?.validator) {
      setError(!props.validation.validator(value));
    } else {
      setError(false);
    }
  }

  console.log(error);

  return (
    <TextField
      id={props.id}
      variant={props.variant ?? "outlined"}
      margin={props.margin ?? "normal"}
      fullWidth={props.fullWidth ?? true}
      label={props.label}
      value={value}
      onChange={(e) => {
        const data = { field: props.id, value: e.target.value };
        if (props.onChange) {
          props.onChange(data);
        }
        setValue(data.value);
        handleValidation(data.value);
      }}
      size={(props.size ?? "normal") as any}
      helperText={error ? getErrorText(props) : props.helperText}
      error={error}
      type={props?.type ?? "text"}
      rows={props.rows ?? 1}
      multiline={!!props.multiline}
    />
  );
}
