import React from "react";

interface SavedTextListProps {
  savedTexts: string[];
}

const SavedTextList: React.FC<SavedTextListProps> = ({ savedTexts }) => {
  return (
    <ul>
      {savedTexts.map((savedText, index) => (
        <li key={index}>{savedText}</li>
      ))}
    </ul>
  );
};

export default SavedTextList;