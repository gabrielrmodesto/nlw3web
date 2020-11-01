import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanagesMap from "./pages/OrphanagesMap";
import ForgotPassword from "./pages/Users/ForgotPassword";
import Login from "./pages/Users/Login";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/app" component={OrphanagesMap} />
				<Route path="/orphanages/create" component={CreateOrphanage} />
				<Route path="/orphanages/:id" component={Orphanage} />
				<Route path="/login" component={Login} />
				<Route path="/forgotpassword" component={ForgotPassword} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
