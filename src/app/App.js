import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import User from "./components/layouts/user";
import NavBar from "./components/NavBar";
import Favorites from "./components/pages/favorites";
import Wrapper from "./components/wrapper";

function App() {
    return (
        <Wrapper>
            <NavBar>
                <Switch>
                    <Route path="/user/:userId" component={User} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </NavBar>
        </Wrapper>
    );
}

export default App;
