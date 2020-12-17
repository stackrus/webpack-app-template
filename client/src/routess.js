import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DatingPage from "./pages/DatingPage";
import DialogPage from "./pages/DialogPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import NaviBar from "./components/NaviBar";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <>
                <NaviBar />
                <Switch>
                    <Route exact path={"/home"} component={HomePage} />
                    <Route path={"/dating"} component={DatingPage} />
                    <Route path={"/dialogs"} component={DialogPage} />
                    <Route path={"/profile"} component={ProfilePage} />
                    <Redirect to={"/home"} />
                </Switch>
                </>
        )
    }

    return (
            <Switch>
                <Route exact path={"/"} component={AuthPage} />
                <Redirect to={"/"}/>
            </Switch>
    )
}
