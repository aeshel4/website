import './App.css';
import Puzzle from './Puzzle';
import Link from './Link';
import Catch22 from './puzzle_lists/catch_22_list'
import Aerosmith from './puzzle_lists/aerosmith_list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Amos' Puzzles
        </p>
      </header>
      <h2>Microsoft Puzzle Hunt</h2>
      I helped restart this Hunt with the "module era", and often helped on the coordination side.
      <h3>PH16: Catch-22 (Module)</h3>
      The overall theme of the event was 'books'.
      <br/>
      <i>The puzzles in this module needs to be solved simultaneously.</i>
      <ul><Catch22/></ul>
      <h3>PH17: Aerosmith (Module)</h3>
      The overall theme of the event was 'music'.
      <br/>
      <i>The puzzles in this module are all on hex grids.</i>
      <ul><Aerosmith/></ul>
      <h3>PH19: The Blacklist (Module)</h3>
      The overall theme of the event was 'TV'.
      <br/>
      <h3>PH20: Guys and Dolls (Module)</h3>
      The overall theme of the event was 'theater'.
      <br/>
      <i>The puzzles in this module are paired.</i>
      <h3>PH21: Meta Knight (Puzzle)</h3>
      The overall theme of the event was 'video games'.
      <br/>
      <i>I only wrote a single standalone puzzle within the Super Smash Bros. module.</i>
      <Puzzle
        display_name='Meta Knight'
        puzzle_link_id='12iKy_cnWMVp4fhe2YmwD6GnDdYm2IUO9'
        solution_link_id='14Zi4PhiyIseYqoLELP5looLRnfi34SAC'
        answer='BLIMPS'
      />
      <h3>PH23:&nbsp;
        <Link
          link='https://puzzle.university/'
          display_text='Puzzle University'
        />
        &nbsp;(Event)
      </h3>
      I was heavily involved in this entire (non-module) event; I'm particularly proud of:
      <ul>
        <li>The&nbsp;
        <Link
          link='https://puzzle.university/round/computer-science.html'
          display_text='Computer Science round'
        />
        , a spiritual successor to Catch-22
        </li>
        <li>The&nbsp;
        <Link
          link='https://puzzle.university/round/metameta.html'
          display_text='final meta'
        />
        &nbsp;which is fed by every answer and meta answer in the event.
        </li>
        <li>
        <Link
          link='https://puzzle.university/puzzle/writing-complementary-characters.html'
          display_text='Writing Complementary Characters'
        />
        : a standalone puzzle.
        </li>
        <li>
          I also have the meta & structure for a Physics round that we had to cut,
          and that I one day hope to write the puzzles for.
        </li>
      </ul>
      <h2><Link
        link='https://puzzles.mit.edu/2013/'
        display_text='Mystery Hunt 2013'
      /></h2>
      I was heavily involved with this event, writing a number of puzzles, and editing many more. Some highlights:
      <ul>
        <li>
          I was the primary lead/editor for the&nbsp;
          <Link
            link='https://puzzles.mit.edu/2013/coinheist.com/rubik/index.html'
            display_text='Rubik round'
          />
          &nbsp;structure/metas, which I'm particularly proud of.
          I specifically wrote <b>Cardinal Red</b> and <b>Yellow Flag</b>, plus Cryptocube (the round meta).
        </li>
        <li><Link
          link='https://puzzles.mit.edu/2013/enigmavalley.com/the_silver_screen/'
          display_text='The Silver Screen'
        /></li>
        <li>
        <Link
          link='https://puzzles.mit.edu/2013/coinheist.com/rubik/the_maze/index.html'
          display_text='The Maze'
        />
        : I had the idea for this, and wish we'd run it with the full maze visible at the start, as well as the letter grid in the maze itself.
        </li>
      </ul>
      <h2>DASH</h2>
      I wrote a single puzzle in&nbsp;
      <Link
        link='https://playdash.org/DASH12/'
        display_text='DASH 12'
      />
      <footer>
        You can find me on Discord: amosisfamous
        <br/>
        Or email my name at puzzlehunt.org
      </footer>
    </div>
  );
}

export default App;
