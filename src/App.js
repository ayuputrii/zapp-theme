import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Login,
  Dashboard,
  Transaction,
  Profile,
  PersonalInformation,
  ChangePassword,
  ChangePin,
  AddNumber,
  ManageNumber,
  Topup,
  SearchReceiver,
  Amount,
  Confirmation,
  Status
} from "./Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route exact path="/Dashboard" render={(props) => <Dashboard {...props} />} />
        <Route exact path="/Transaction" render={(props) => <Transaction {...props} />} />
        <Route exact path="/Profile" render={(props) => <Profile {...props} />} />
        <Route exact path="/PersonalInformation" render={(props) => <PersonalInformation {...props} />} />
        <Route exact path="/ChangePassword" render={(props) => <ChangePassword {...props} />} />
        <Route exact path="/ChangePin" render={(props) => <ChangePin {...props} />} />
        <Route exact path="/AddNumber" render={(props) => <AddNumber {...props} />} />
        <Route exact path="/Manage" render={(props) => <ManageNumber {...props} />} />
        <Route exact path="/Topup" render={(props) => <Topup {...props} />} />
        <Route exact path="/SearchReceiver" render={(props) => <SearchReceiver {...props} />} />
        <Route exact path="/Amount" render={(props) => <Amount {...props} />} />
        <Route exact path="/Confirmation" render={(props) => <Confirmation {...props} />} />
        <Route exact path="/Status" render={(props) => <Status {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
