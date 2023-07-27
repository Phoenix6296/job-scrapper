"use client";

import Image from "next/image";
import { Oval } from "react-loader-spinner";
import { MouseEventHandler, FC } from "react";

interface ButtonProps {
  title: string;
  suffixIcon?: string;
  prefixIcon?: string;
  prefixIconStyles?: string;
  suffixIconStyles?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  py?: string;
  px?: string;
  loading?: boolean;
  fontSize?: string;
  containerStyles?: string;
}

export const Button: FC<ButtonProps> = ({
  title,
  suffixIcon,
  prefixIcon,
  prefixIconStyles,
  suffixIconStyles,
  color = "transparent text-black",
  onClick,
  disabled,
  type,
  className,
  py = "py-3",
  px,
  loading,
  fontSize = "text-base",
  containerStyles = "w-full",
}) => {
  return (
    <div className={`${containerStyles}`}>
      <button
        onClick={onClick}
        disabled={loading ? true : disabled}
        type={type}
        className={`${className} border rounded-lg w-full ${py} ${px} flex gap-4 justify-center items-center hover:shadow-lg ${color} ${
          loading ? "bg-gray-400 cursor-not-allowed hover:shadow-none" : ""
        } ${
          disabled || loading
            ? "cursor-not-allowed bg-primary bg-opacity-70"
            : ""
        }`}
      >
        {loading ? (
          <Oval
            height={16}
            width={16}
            color="#fff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#fff"
            strokeWidth={6}
            strokeWidthSecondary={6}
          />
        ) : (
          <div className="flex gap-2 items-center">
            {prefixIcon && (
              <Image
                className={prefixIconStyles}
                width={16}
                height={16}
                src={prefixIcon}
                alt="button-icon"
              />
            )}
            <p className={`${fontSize} leading-6 font-semibold tracking-wide`}>
              {title}
            </p>
            {suffixIcon && (
              <Image
                className={suffixIconStyles}
                width={16}
                height={16}
                src={suffixIcon}
                alt="button-icon"
              />
            )}
          </div>
        )}
      </button>
    </div>
  );
};
