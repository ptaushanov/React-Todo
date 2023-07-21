import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./Create"
import Home from "./Home"
import Navbar from "./Navbar"
import TaskDetails from "./TaskDetails"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/details/:id">
              <TaskDetails />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
