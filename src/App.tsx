import React from 'react';
import initialDataSet from "./data/initialDetails";
import SearchPeople from "./components/SearchPeople";
import NavBar from "./components/NavBar";


function App() {
  return (
      <>
         <NavBar />
         <SearchPeople people={initialDataSet}/>
      </>
  );
}

export default App;

