import { useField } from "@unform/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { COLORS } from "../../styles/COLORS";
import { Container, ErrorTooltip } from "./styles";

const Input = ({ name, icon: Icon, showEye, ...otherProps }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(!showEye);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleEyeIcon = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const getEyeIcon = () => {
    if (showPassword) {
      return <FiEye size={20} onClick={handleEyeIcon} />;
    }
    return <FiEyeOff size={20} onClick={handleEyeIcon} />;
  };

  return (
    <Container hasError={!!error}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        type={showPassword ? "text" : "password"}
        {...otherProps}
      />
      {showEye && getEyeIcon()}
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle color={COLORS.ERROR_DEFAULT} size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;
