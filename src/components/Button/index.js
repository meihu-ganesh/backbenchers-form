import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder12: "rounded-radius12" };
const variants = { FillWhiteA700: "bg-white_A700 text-black_900" };
const sizes = { sm: "md:p-[17px] p-[18px] sm:px-[15px] sm:py-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder12"]),
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder12",
  variant: "FillWhiteA700",
  size: "sm",
};

export { Button };
