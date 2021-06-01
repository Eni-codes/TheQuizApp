import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useState } from "react";
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'


function App() {
  
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore]= useState(0)

  const fetchQuestions =()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=17")
      .then(res => res.json())
      .then(response=> setQuestions(response.results))
  }
 
  return (
    <BrowserRouter>
    <div className="App">  

    <Header/>

    <Switch>

      <Route path='/' exact> 
        <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
      </Route>

      <Route path='/quiz' exact> 
        <Quiz
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
        />
      </Route>

      <Route path='/result' exact> 
        <Result/>
      </Route>

    </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
