import React from "react";
import { Switch, Route } from "react-router-dom";


import Header from './components/Header';
import Posts from "./pages/posts";
import Albums from "./pages/albums";
import Todos from './pages/todos';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path ="/albums" component ={Albums} />
        <Route exact path="/todos" component={Todos} />
      </Switch>
    </div>
  );
};

export default App;
