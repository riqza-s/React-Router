import React from 'react'
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from "react-router-dom";

function Dashboard() {
    let match = useRouteMatch();

  return (
    <div>
      <h2>Contact Options</h2>

      <ul>
        <li>
          <Link to={`${match.url}/through mail`}>Contact through Mail</Link>
        </li>
        <li>
          <Link to={`${match.url}/through phone`}>
            Contact through Phone
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:opt`}>
          <Contact />
        </Route>
        <Route path={match.path}>
          <h3>Choose an option.</h3>
        </Route>
      </Switch>
    </div>
  );
}
function Contact() {
    let { opt } = useParams();
    return <h3> {opt}</h3>;
  }
  export default Dashboard;