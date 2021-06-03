import React from 'react';
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react"
import { useHistory } from "react-router";

const Home = ({name, setName, fetchQuestions})=> {
     
  const [number, setNumber] = useState(0);
  const history = useHistory();

  const handleclickSubmit = ()=> {
      fetchQuestions ();
      history.push("/quiz");
  }

    return (
      <div className= "content">
        <div className = "Settings">
          <span style ={{ fontSize: 30}}>Quiz Settings</span>
          <div>
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
          />

          <section>
            <select id = "dropdown" onChange = {(e)=> setNumber(e.target.value)}>
              <option value = "n/a">Difficulty</option>
              <option value = "1">Easy</option>
              <option value = "2">Medium</option>
              <option value = "3">Hard</option>
            </select>
          </section>

          <section>
            <Button variant= "contained" color ="primary" size ="large"
                    onClick={handleclickSubmit}>
                    Start Quiz
            </Button>
          </section>
          </div>
        </div>
        <img src = "https://i.imgur.com/28gPvRj.png" classsname="banner" alt="quiz img"/>
        {/* <img src = "undraw_online_test_gba7.svg" classsname="banner" alt="quiz img"/> */}
      </div>
    )
};

export default Home;