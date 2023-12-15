import React, { useState } from "react";

const EmojiConverter = () => {
  // State to manage the entered emoji and its meaning
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  // Emoji dataset
  const emojiData = {
    "😊": "Smiling Face with Smiling Eyes",
    "❤️": "Red Heart",
    "🐱": "Cat Face",
    "😃": "Smileys",
    "🧑": "People",
    "⚽": "Football",
    "🍔": "Food",
    "😀": "Smile",
    "😁": "Beeming face with similing eyes",
    "😂": "Face with tears of joy",
  };

  // Event handler for the emoji input
  const handleEmojiChange = (event) => {
    const enteredEmoji = event.target.value;
    setEmoji(enteredEmoji); //Update the state with entered emoji
    setMeaning(emojiData[enteredEmoji] || "Emoji not found");
  };

  return (
    <div>
      <label>
        Enter Emoji:
        <input
          type="text"
          value={emoji}
          onChange={handleEmojiChange}
          placeholder="Enter an emoji"
        />
      </label>
      <br></br>
      <label>
        Emoji Meaning:
        <input type="text" value={meaning} readOnly />
      </label>
    </div>
  );
};

export default EmojiConverter;
