'use client';

import { useState } from "react";
import AddButton from "./AddButton";
import InputField from "./InputField";
import SavedTextList from "./SavedTextList";

export default function TextLine() {
  interface InputText {
    text: string;
  }

  const [text, setText] = useState<InputText["text"]>("");
  const [savedTexts, setSavedTexts] = useState<InputText["text"][]>([]);

  const handleAddClick = (inputText: InputText["text"]) => {
    setSavedTexts([...savedTexts, inputText]);
    setText("");
  };

  return (
    <>
      <InputField text={text} setText={setText} />
      <AddButton onAddClick={() => handleAddClick(text)} />
      <SavedTextList savedTexts={savedTexts} />
    </>
  );
}