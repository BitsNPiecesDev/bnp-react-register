# React Register Component

A plug-and-use React component for creating a user registration page with customizable fields.

## Installation

```bash
npm install bnp-react-register
```

## Usage

```jsx
import React from 'react';
import { Register, FieldType, FieldConfig, Validator } from 'bnp-react-register';

// Custom validator function
const isValidCustomField = (value: string) => {
  // Your custom validation logic here
  return value.length >= 8;
};

const YourRegisterPage = () => {
  return (
    <Register
      headerLabel="Create an Account"
      fieldsToShow={[
        {
          id: "email",
          field: FieldType.EMAIL,
          label: "Email",
          validation: {
            validator: (email) => isEmailValid(email),
            errorText: "Invalid email",
          },
        },
        {
          id: "password",
          field: FieldType.PASSWORD,
          label: "Password",
        },
        {
          id: "phno",
          field: FieldType.PHONE_NUMBER,
          label: "Phone Number",
        },
        {
          id: "addr",
          field: FieldType.ADDRESS,
          label: "Address",
          type: "textarea",
        }
      ]}
      registerButtonLabel="Sign Up"
      registerButtonSize="large"
      customRegisterButton={<YourCustomButton />}
      onRegister={(data) => handleRegistration(data)}
    />
  );
};
```

## Props

- `headerLabel`: (Optional) Custom label or JSX element for the header of the registration page.
- `fieldsToShow`: An array of objects specifying the fields to display. Each object should have an `id` (unique identifier), `field` (field type), and optional properties like `label`, `helperText`, `validation`, `onChange`, and `type`.
- `registerButtonLabel`: (Optional) Custom label for the registration button.
- `registerButtonSize`: (Optional) Size of the registration button (`"small"`, `"normal"`, `"large"`).
- `customRegisterButton`: (Optional) Custom JSX element to replace the default registration button.
- `onRegister`: (Optional) Callback function triggered when the registration button is clicked.

## Mixing and Matching Fields

You can mix and match the `fieldsToShow` array to create your own set of fields and validations. Each object in the array corresponds to a registration field, allowing for easy customization.

## Creating a Custom Register Button

You can create your own register button by providing a custom JSX element using the `customRegisterButton` prop. This allows for complete control over the appearance and behavior of the registration button.


## Example

```jsx
<Register
  headerLabel="Create an Account"
  fieldsToShow={[
    {
      id: "email",
      field: FieldType.EMAIL,
      label: "Email",
      validation: {
        validator: (email) => isEmailValid(email),
        errorText: "Invalid email",
      },
    },
    {
      id: "password",
      field: FieldType.PASSWORD,
      label: "Password",
    },
    {
      id: "phno",
      field: FieldType.PHONE_NUMBER,
      label: "Phone Number",
    },
    {
      id: "addr",
      field: FieldType.ADDRESS,
      label: "Address",
      type: "textarea",
    },
  ]}
  customRegisterButton={<YourCustomButton />}
  onRegister={(data) => handleRegistration(data)}
/>
```

## `FieldConfig` Interface

The `FieldConfig` interface defines the structure for configuring a field in the registration component:

```typescript
export interface FieldConfig {
  id: string;
  field: FieldType;
  label?: string | React.JSX.Element;
  helperText?: string | React.JSX.Element;
  validation?: Validator;
  onChange?: (arg: { field: string; value: string }) => any;
  type?: "text" | "password" | "tel" | "textarea" | "number";
}
```

## `Validator` Interface

The `Validator` interface defines the structure for a validation function:

```typescript
export interface Validator {
  validator: (value: string) => boolean;
  errorText?: string;
}
```

## `FieldType` Enum

The `FieldType` enum defines the types of fields available for configuration:

```typescript
export enum FieldType {
  NAME = "Name",
  PASSWORD = "Password",
  PHONE_NUMBER = "Phone Number",
  ADDRESS = "Address",
  EMAIL = "Email",
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```