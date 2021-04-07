import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { } from "react-bootstrap";
import { Login } from "./pages";
import Dashboard from "./pages/dashboard/dashboard";
import { userContext } from "./context/user-context";
import './App.css';

function App() {
  const { user } = useContext(userContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user.id ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
