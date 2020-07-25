import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import Header from './components/Header';
import Posts from "./pages/posts";
import Albums from "./pages/albums";
import Todos from './pages/todos';
import PostDetail from "./pages/post_detail";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Switch>
          <Redirect from="/" to="/posts" exact />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/todos" component={Todos} />
          <Route path="/posts/:id" component={PostDetail} />
        </Switch>
      </main>
      <Switch>

      </Switch>
    </div>
  );
};

export default App;
