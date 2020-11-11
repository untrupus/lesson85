import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            {/*<Route path="/" exact component={Posts}/>*/}
            {/*<Route path="/news/add" exact component={AddNews}/>*/}
            {/*<Route path="/news/:id" component={NewsPage}/>*/}
            <Route render={() => <h1>404</h1>}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
