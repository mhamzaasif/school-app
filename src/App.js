import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Login, Dashboard, UserProfile, Teachers, Students } from "./pages";
import Layout from "./components/common/layout/layout";
import { userContext } from "./context/user-context";
import './App.css';

function App() {
  const { state: user } = useContext(userContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Sidebar /> */}
          <Route exact path="/">
            {user.id ? <Layout component={Dashboard} /> : <Redirect to="/login" />}
          </Route>
          <Route path="/teachers"><Layout component={Teachers} /></Route>
          <Route path="/students"><Layout component={Students} /></Route>
          <Route path="/users/:id"><Layout component={UserProfile} /></Route>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
