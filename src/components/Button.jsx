import { forwardRef } from "react";

const Button = forwardRef(
  ({ value = "", className = "", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`mainPageButton ${className}`}
        {...props}
      >
        {value}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
