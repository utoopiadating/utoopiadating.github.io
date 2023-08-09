import React from "react";

const sizeClasses = {
  txtManropeExtraBold54: "font-extrabold font-manrope",
  txtManropeRegular18Gray900: "font-manrope font-normal",
  txtManropeRegular18Gray600: "font-manrope font-normal",
  txtManropeExtraBold46: "font-extrabold font-manrope",
  txtManropeBold18Gray900: "font-bold font-manrope",
  txtManropeExtraBold36: "font-extrabold font-manrope",
  txtManropeExtraBold28: "font-extrabold font-manrope",
  txtManropeSemiBold20: "font-manrope font-semibold",
  txtManropeExtraBold20: "font-extrabold font-manrope",
  txtManropeSemiBold16: "font-manrope font-semibold",
  txtManropeSemiBold18: "font-manrope font-semibold",
  txtManropeExtraBold36WhiteA700: "font-extrabold font-manrope",
  txtManropeBold24: "font-bold font-manrope",
  txtManropeBold22: "font-bold font-manrope",
  txtManropeRegular18: "font-manrope font-normal",
  txtManropeSemiBold20Gray900: "font-manrope font-semibold",
  txtMarkoOneRegular20: "font-markoone font-normal",
  txtManropeSemiBold18Gray600: "font-manrope font-semibold",
  txtManropeBold24Gray900: "font-bold font-manrope",
  txtManropeBold18: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
