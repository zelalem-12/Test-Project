import React from "react";
import { Switch, Route } from "react-router-dom";


import Header from './components/Header';
import posts from "./pages/posts";
import Albums from "./pages/albums";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={posts} />
        <Route exact path ="/albums" component ={Albums} />

      </Switch>
    </div>
  );
};

export default App;
