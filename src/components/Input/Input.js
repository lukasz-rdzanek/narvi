import "./Input.css";

import { TextField } from "@mui/material";

export const Input = ({ label, register }) => {
  return (
    <TextField
      id="input"
      autoComplete="off"
      className="input"
      data-testid="input"
      fullWidth
      label={label}
      margin="normal"
      size="normal"
      variant="filled"
      {...register}
    />
  );
};
