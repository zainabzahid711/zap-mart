"use client";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import TextField from "@mui/material/TextField";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  disabled,
  register,
  type,
  errors,
  required,
}) => {
  const error = errors[id] ? true : false;
  return (
    <>
      <div className="w-full relative">
        <TextField
          id={id}
          type={type}
          label={label}
          disabled={disabled}
          required={required}
          variant="outlined"
          fullWidth
          error={error}
          helperText={error ? "This field is required" : ""}
          {...register(id, {
            required: required ? `${label} is required` : false,
            pattern:
              id === "email"
                ? {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  }
                : id === "password"
                  ? {
                      value: /(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one special character",
                    }
                  : undefined,
            minLength:
              id === "password"
                ? {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  }
                : undefined,
          })}
          InputProps={{
            style: {
              padding: "6px 14px",
              backgroundColor: "#424242",
              color: "white",
              borderColor: error ? "#f87171" : "#d1d5db",
            },
          }}
          InputLabelProps={{
            style: {
              color: error ? "#f87171" : "#9ca3af",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#424242",
              "& fieldset": {
                borderColor: error ? "#f87171" : "#d1d5db",
              },
              "&:hover fieldset": {
                borderColor: error ? "#f87171" : "#d1d5db",
              },
              "&.Mui-focused fieldset": {
                borderColor: error ? "#f87171" : "#d1d5db",
              },
            },
            "& .MuiInputLabel-root": {
              top: "2px",
              left: "1px",
            },
            "& .MuiInputBase-input": {
              backgroundColor: "#424242",
            },
          }}
        />
      </div>
    </>
  );
};

export default Input;
