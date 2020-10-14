import React, {ReactNode} from "react";
import {Switch, Route} from "react-router-dom";

import LoginForm from "./pages/loginForm";
import About from "./pages/about";
import Contact from "./pages/contact";
import Kotori from "./pages/kotori";
import Topbar from "./pages/components/topbar";
import Album from "./pages/components/album";
import Footer from "./pages/components/footer";

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {

    public constructor(props: AppProps) {
        super(props);
        this.state = {};
    }

    public render(): ReactNode {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={"/login"}>
                        <Topbar pageTitle={"Login"} />
                        <LoginForm />
                    </Route>
                    <Route path={"/about"}>
                        <Topbar pageTitle={"About"} />
                        <About />
                    </Route>
                    <Route path={"/contact"}>
                        <Topbar pageTitle={"Contact"} />
                        <Contact />
                    </Route>
                    <Route path={"/kotori"}>
                        <Topbar pageTitle={"kotori~"} />
                        <Kotori />
                    </Route>
                    <Route exact path={"/"}>
                        <Topbar pageTitle={"Home"} />
                        <Album />
                    </Route>
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;