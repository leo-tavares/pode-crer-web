import { useField } from "@unform/core";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { COLORS } from "../../styles/COLORS";
import { Container, ErrorTooltip } from "./styles";

const Input = ({ name, icon: Icon, ...otherProps }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
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

  return (
    <Container hasError={!!error}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        {...otherProps}
      />
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle color={COLORS.ERROR_DEFAULT} size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;
