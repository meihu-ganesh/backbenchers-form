import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[19.8px] md:text-[21.8px] text-[23.8px]",
  h2: "font-normal text-[18px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
