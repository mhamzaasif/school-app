import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
	Login,
	Dashboard,
	Teachers,
	Students,
	Payments,
	Dues,
	AddUser,
} from "./@pages";
import { Layout } from "./@components";
import "./App.css";
import { rootContext } from "./@context";

function App() {
	const { user } = useContext(rootContext);
	const protectedRoute = (component) => {
		if (user?.token) {
			return <Layout component={component} />;
		}
		return <Redirect to="/login" />;
	};

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" render={() => protectedRoute(Dashboard)} />
					<Route path="/teachers" render={() => protectedRoute(Teachers)} />
					<Route path="/students" render={() => protectedRoute(Students)} />
					<Route path="/payments" render={() => protectedRoute(Payments)} />
					<Route path="/dues" render={() => protectedRoute(Dues)} />
					<Route path="/add" render={() => protectedRoute(AddUser)} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
