import Image from "next/image";
import {
  FC,
  InputHTMLAttributes,
  RefObject,
  KeyboardEventHandler,
  ChangeEventHandler,
  FocusEventHandler,
  FormEventHandler,
  ClipboardEventHandler,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  className?: string;
  containerStyles?: string;
  defaultValue?: string | number;
  disabled?: boolean;
  focusStyles?: string;
  keys?: string;
  label?: string;
  max?: number;
  min?: number;
  minLength?: number;
  maxLength?: number;
  mt?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onInvalid?: FormEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onPaste?: ClipboardEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  pattern?: string;
  placeholder?: string;
  prefixIcon?: string;
  reference?: RefObject<HTMLInputElement>;
  required?: boolean;
  type?: string;
  value: string | number;
}

export const Input: FC<InputProps> = ({
  checked,
  className,
  containerStyles,
  defaultValue,
  disabled,
  focusStyles,
  keys,
  label,
  max,
  min,
  minLength,
  maxLength,
  mt = "mt-2",
  onBlur,
  onChange,
  onInvalid,
  onKeyDown,
  onPaste,
  onFocus,
  pattern,
  placeholder,
  prefixIcon,
  reference,
  required,
  type = "text",
  value,
}) => {
  return (
    <div className={containerStyles}>
      <div className="flex items-center gap-1">
        <label className="text-base flex gap-2 items-center" htmlFor={label}>
          {prefixIcon && (
            <Image src={prefixIcon} alt={label || ""} width={20} height={20} />
          )}
          {label}
        </label>
      </div>
      <div className={`flex items-center ${mt} gap-1`}>
        <input
          key={keys}
          onInvalid={onInvalid}
          ref={reference}
          className={`${className} ${disabled ? "cursor-not-allowed" : ""} ${
            focusStyles ? focusStyles : "focus:outline-none"
          } w-full border border-black border-opacity-10 py-3 px-4 rounded-lg`}
          type={type}
          name={label}
          id={label}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          defaultValue={defaultValue}
          spellCheck={false}
          pattern={pattern}
          onPaste={onPaste}
          autoComplete="off"
          checked={checked}
        />
      </div>
    </div>
  );
};
