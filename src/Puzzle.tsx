import React, { useState } from 'react';
import Link from './Link';

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
    <div><li>
      <b>{display_name}</b>:&nbsp;
      <Link
        link={'https://drive.google.com/file/d/' + puzzle_link_id + '/view?usp=drive_link'}
        display_text='puzzle'
      />
      &nbsp;/&nbsp;
      <Link
        link={'https://drive.google.com/file/d/' + solution_link_id + '/view?usp=drive_link'}
        display_text='solution'
      />
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
    </li></div>
  );
};

export default Puzzle;
