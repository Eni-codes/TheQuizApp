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

    return <div className= "content">
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
         <option value = "n/a">N/A</option>
         <option value = "1">1</option>
         <option value = "2">2</option>
         <option value = "3">3</option>
         <option value = "4">4</option>
         <option value = "5">5</option>
         <option value = "6">6</option>
         <option value = "7">7</option>
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
       <img src = "undraw_online_test_gba7.svg " classsname="banner" alt="quiz img"/>
        </div>
};

export default Home;