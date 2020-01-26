import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Mesero from "./pages/Mesero";
import Main from "./pages/main";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div>
				<Nav />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/mesero" component={Mesero} />
					<Route exact path="/books" component={Books} />
					<Route exact path="/books/:id" component={Detail} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
