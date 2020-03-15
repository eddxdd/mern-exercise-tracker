import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component"
import Homepage from "./components/homepage.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container border p-0">
      <Navbar />
      <br/>
      <Route path="/" exact component={Homepage} />
      <Route path="/user" component={CreateUser} />
      <Route path="/exercises-list" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      </div>
    </Router>
  );
}

export default App;
