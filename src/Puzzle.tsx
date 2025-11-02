import React, { useState } from 'react';

interface PuzzleProps {
  display_name: string;
  puzzle_link_id: string;
  solution_link_id: string;
  answer: string;
}

const Puzzle = ({ display_name, puzzle_link_id, solution_link_id, answer }: PuzzleProps) => {
  const [submittedText, setSubmittedText] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('white');

  const checkAnswer = () => {
    if (submittedText.toUpperCase().replace(' ', '') === answer) {
      setBgColor('limegreen');
    } else {
      setBgColor('tomato');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  };

  return (
    <div>
      <b>{display_name}</b>:&nbsp;
      <a
        href={'https://drive.google.com/file/d/' + puzzle_link_id + '/view?usp=drive_link'}
        target="_blank"  // Open the link in a new tab
        rel="noopener noreferrer"
      >
        puzzle
      </a>
      &nbsp;/&nbsp;
      <a
        href={'https://drive.google.com/file/d/' + solution_link_id + '/view?usp=drive_link'}
        target="_blank"  // Open the link in a new tab
        rel="noopener noreferrer"
      >
        solution
      </a>
      &emsp;
      <input
        type="text"
        value={submittedText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubmittedText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter answer"
        style={{ backgroundColor: bgColor }}
      />
      &nbsp;
      <button onClick={checkAnswer}>Check</button>
    </div>
  );
};

export default Puzzle;
