import React from "react";

interface InputFieldProps {
  text: string;
  setText: (text: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ text, setText }) => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default InputField;