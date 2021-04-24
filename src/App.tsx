import React from 'react';
import initialDataSet from "./data/initialDetails";
import SearchPeople from "./components/SearchPeople";
import Layout from "./components/Layout";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddContact from "./components/AddContact";

function App() {
  return (
      <BrowserRouter>
         <Layout />
         <Switch>
             <Route path='/' component={() => <SearchPeople people={initialDataSet}/>} exact/>
             <Route path='/add' component={AddContact}/>
         </Switch>

      </BrowserRouter>
  );
}

export default App;

