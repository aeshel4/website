import './App.css';
import Puzzle from './Puzzle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Amos' Puzzles
        </p>
      </header>
      <h2>Microsoft Puzzle Hunt Modules</h2>
      <h3>Catch-22 (PH16)</h3>
      The overall theme of the event was 'books'.
      <br/>
      <i>The puzzles in this module needs to be solved simultaneously.</i>
      <ul>
        <li><Puzzle
          display_name='Clevinger'
          puzzle_link_id='1Cbu9cebKATlJTxiIxA5XPUatBvtAgzPF'
          solution_link_id='1QOsNI5M8jUWVdBJX2eD80qjWNMFRcdPX'
          answer='UNIT'
        /></li>
        <li><Puzzle
          display_name='Giuseppe'
          puzzle_link_id='1c_-528KgbmtK6R-t2XqqKOY4qsRFfvyB'
          solution_link_id='1gFlDGCGT-PRCsMcjX9pKqoMNqwcBoe4y'
          answer='BOATS'
        /></li>
        <li><Puzzle
          display_name='Major ― de Coverley'
          puzzle_link_id='1R_9KfS2SmHskhGusQHXL4koK8j7Cqvgk'
          solution_link_id='13aox158vQTYrtsx_HDN1sPILhuw1e8gY'
          answer='PUBLIC'
        /></li>
        <li><Puzzle
          display_name='Major Major Major'
          puzzle_link_id='1OuSgz_btetC8uRmBej2nheOTx3oGz7J2'
          solution_link_id='1g68noAiyCT5rO3edJXThuSdURbu1XimX'
          answer='PITCH'
        /></li>
        <li><Puzzle
          display_name='(Milo) Minderbinder'
          puzzle_link_id='1vl9ARcvw1UcLvU0cpE6ebZjDoPDuQqjD'
          solution_link_id='1jVYZGvmjQycPBLZ2HUoG5RK35Vlk7ov0'
          answer='INKS'
        /></li>
        <li><Puzzle
          display_name='The Soldier in White'
          puzzle_link_id='1ouAqsW-7AO1l3AJrzu3LYyPYMV7dCuSV'
          solution_link_id='1bpeRsmwKdAP0JdCrcOMpzrVeI4rh7y8O'
          answer='LACK'
        /></li>
        <li><Puzzle
          display_name='Washington Irving'
          puzzle_link_id='13d50Cz5bTPMCnTIQhjwOzSuof-xdKe1y'
          solution_link_id='1taAL7s3M4JH0TladmkqAtbzq_g8KB8az'
          answer='COINS'
        /></li>
        <li><Puzzle
          display_name='[Meta] Closing Time'
          puzzle_link_id='1XA1FOA6OB-n1Aai-9zQ6jzeiwMq4djR4'
          solution_link_id='1bUCvKQSN0rTDMvZgIsNJWixg56KRlw0e'
          answer='LUNATIC'
        /></li>
      </ul>
      <h3>Aerosmith (PH17)</h3>
      The overall theme of the event was 'music'.
      <br/>
      <i>The non-theme I used for this was hex grids.</i>
    </div>
  );
}

export default App;
