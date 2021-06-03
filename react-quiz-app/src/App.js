import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useState } from "react";
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import Submit from './Pages/Submit/Submit'

const API = "http://localhost:9292/quiz/"

const App = () => {
  
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore]= useState(0)

  const fetchQuestions = () => {
    fetch(API)
      .then(r => r.json())
      .then(r=> setQuestions(r.results))
  }
 
  return (
    <BrowserRouter>
    <div className="App">  

    <Header/>

    <Switch>

      <Route path='/' exact> 
        <Home 
          name={name} 
          setName={setName} 
          fetchQuestions={fetchQuestions}
        />
      </Route>
      <div className="Quiz">
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

      <Route path='/submit' exact> 
        <Submit/>
      </Route>

    </div>
    </Switch>
    </div>

    <Footer/>

    </BrowserRouter>
  )
}

export default App;
