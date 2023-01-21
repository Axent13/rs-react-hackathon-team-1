import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import User from "./components/layouts/user";

function App() {
    return (
        <Switch>
            <Route path="/user/:userId" component={User} />
            <Route path="/" exact component={Main} />
            <Redirect to="/" />
        </Switch>
    );
}

export default App;
