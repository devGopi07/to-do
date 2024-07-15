import { Button } from "@mui/material";
import React from "react";

const AppButton = ({
  text,
  variant = "contained",
  size="medium",
  color="primary",
  disabled = false,
  icon,
  onClick,
  className,
  isLoading,
}) => {
  return (
    <Button 
      variant={variant} 
      disabled={disabled} 
      className={className}
      size={size}
      color={color}
    >
      <div className=" flex gap-1 items-center ">
        {icon}
        {text}
      </div>
    </Button>
  );
};

export default AppButton;
