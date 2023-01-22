import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./components/layouts/main";
import User from "./components/layouts/user";
import NavBar from "./components/common/NavBar";
import Favorites from "./components/pages/favorites";
import Wrapper from "./components/common/wrapper";

function App() {
    return (
        <div className="bg-main bg-no-repeat bg-cover bg-black text-sky-300 font-main text-2xl">
            <Wrapper>
                <NavBar />
                <Switch>
                    <Route path="/user/:userId" component={User} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </Wrapper>
        </div>
    );
}

export default App;
