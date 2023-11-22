import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  TextFieldProps,
} from "@mui/material";
import { RegisterProps } from "../models/register-props";
import BnpTextInput from "../InputFields/BnpTextInput";
import { FieldType } from "../models/input-type.enum";
import { FieldConfig } from "../models/field-config";

const Register = (props: RegisterProps) => {
  const [fieldsValues, saveFieldValues] = React.useState({});
  const handleRegister = () => {
    if (props.onRegister) props.onRegister(fieldsValues);
  };

  const onChange = (
    id: string,
    data: any,
    fieldsOnChange?: (arg: any) => any
  ) => {
    saveFieldValues((currentValue) => ({
      ...currentValue,
      [id]: data.value,
    }));
    if (fieldsOnChange) fieldsOnChange(data);
  };

  const getFieldBasedOnType = (fieldConfig: FieldConfig & TextFieldProps) => {
    const additionalProps: Record<string, any> = {
      multiline: false,
    };

    switch (fieldConfig.field) {
      case FieldType.EMAIL:
      case FieldType.NAME:
        additionalProps.type = "text";
        break;

      case FieldType.PASSWORD:
        additionalProps.type = "password";
        break;

      case FieldType.PHONE_NUMBER:
        additionalProps.type = "number";
        break;

      case FieldType.ADDRESS:
        additionalProps.type = "text";
        additionalProps.multiline = true;
        additionalProps.rows = 4;
        break;

      default:
        break;
    }

    return (
      <BnpTextInput
        id={fieldConfig.id}
        field={fieldConfig.field}
        label={fieldConfig.label ?? fieldConfig?.field}
        validation={
          fieldConfig.validation ?? {
            validator: (_: string) => true,
            errorText: "",
          }
        }
        onChange={(data: any) => {
          onChange(fieldConfig.id, data, fieldConfig?.onChange);
        }}
        {...additionalProps}
        size={fieldConfig.size}
      />
    );
  };

  return (
    <Card style={{ maxWidth: "400px" }}>
      <CardContent>
        <div style={{}}>
          <Typography component="h1" variant="h5">
            {props.headerLabel ?? "Register"}
          </Typography>
          <form style={{ width: "100%", marginTop: "8px" }}>
            {props.fieldsToShow.map(
              (fieldConfig: FieldConfig & TextFieldProps, index: number) => (
                <div key={index}>{getFieldBasedOnType(fieldConfig)}</div>
              )
            )}

            {props.customRegisterButton ?? (
              <Button
                fullWidth
                variant="contained"
                color={props.registerButtonColor ?? ("primary" as any)}
                style={{ margin: "24px 0 16px" }}
                onClick={handleRegister}
                size={(props.registerButtonSize ?? "normal") as any}
              >
                {props.registerButtonLabel ?? "Register"}
              </Button>
            )}
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Register;
