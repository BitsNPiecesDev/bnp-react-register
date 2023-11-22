import React from 'react';

import "./App.css";
import Register from "./Register/Register";
import { FieldType } from "./models/input-type.enum";

function App() {
  return (
    <Register
      fieldsToShow={[
        {
          id: "email",
          field: FieldType.EMAIL,
        },

        {
          id: "passwordd",
          field: FieldType.PASSWORD,
        },
        {
          id: "phno",
          field: FieldType.PHONE_NUMBER,
        },
        {
          id: "addr",
          field: FieldType.ADDRESS,
        },
      ]}
    />
  );
}

export default App;