import React, {useState} from 'react';
import initialDataSet from "./data/initialDetails";
import SearchPeople from "./components/SearchPeople";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/NavBar";


function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const menuOn = () => {
      setMenuVisible(!menuVisible);
  }

  return (
      <>
        <Navbar menuClicked={menuOn}/>
        <Sidebar isVisible={menuVisible}>
            <h1>Cool Scfi movies</h1>
            <ul>
                <li>
                    <a href="https://www.imdb.com/title/tt0816692/">Interstellar</a>
                </li>
                <li>
                    <a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a>
                </li>
                <li>
                    <a href="https://www.imdb.com/title/tt0062622/">
                        2001: a space odyssey
                    </a>
                </li>
            </ul>
        </Sidebar>
        <SearchPeople people={initialDataSet}/>

      </>
  );
}

export default App;

