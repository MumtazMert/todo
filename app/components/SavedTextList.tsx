import React from "react";
import DeleteButton from "./DeleteButton";

interface SavedTextListProps {
  savedTexts: string[];
  onDeleteClick: (index: number) => void;
}

const SavedTextList: React.FC<SavedTextListProps> = ({ savedTexts, onDeleteClick }) => {
  return (
    <ul>
      {savedTexts.map((text, index) => (
        <li key={index}>
          {text} <DeleteButton onDeleteClick={() => onDeleteClick(index)} />
        </li>
      ))}
    </ul>
  );
};

export default SavedTextList;