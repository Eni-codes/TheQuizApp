import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import React from 'react'

const RadioButtons = (p) => {

    const [value, setValue] = React.useState('incorrect')

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }


    return (
      <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Answers:</FormLabel>
                <RadioGroup aria-label="answers" name="answers1" value={value} onChange={handleChange}>
                    <FormControlLabel value={ p.correct_answer } control={<Radio />} label={ p.correct_answer }/>
                    <FormControlLabel value={ p.rand1 } control={<Radio />} label={ p.rand1 } />
                    <FormControlLabel value={ p.rand2 } control={<Radio />} label={ p.rand2 } />
                    <FormControlLabel value={ p.rand3 } control={<Radio />} label={ p.rand3 } />
                </RadioGroup>
            </FormControl>

            <button 
                type="submit"
                onClick={() => {
                    if(value == p.correct_answer){
                        return p.correctAnswer(value)
                    } else {
                        return p.incorrectAnswer([value, p.correct_answer])
                    }
                }}
                className="button p-1 m-1"
                >Final Answer</button>
            

            
            {/* <button 
                type="submit"
                onClick={() => q.skipQuestion}
                className="button p-1 m-1"
                >Skip Question</button> */}
        </div>
    )
}
  
  export default RadioButtons