import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { Component } from 'react'

class RadioButtonsTwo extends Component {

    state = {
        value: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({value: e.target.value})
    }

    render() {

        const skipsLeft = this.props.skips_left

        const renderSkipButton = () => {
            if(skipsLeft > 0){
                return <button type="submit" 
                               onClick={() => this.props.skipQuestion()} 
                               className="button p-1 m-1"
                               >Skip Question</button>
            }
        }
        

        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Answers:</FormLabel>
                    <RadioGroup aria-label="answers" name="answers1" value={this.state.value} onChange={this.handleChange}>
                        <FormControlLabel value={ this.props.correct_answer } control={<Radio />} label={ this.props.correct_answer }/>
                        <FormControlLabel value={ this.props.rand1 } control={<Radio />} label={ this.props.rand1 } />
                        <FormControlLabel value={ this.props.rand2 } control={<Radio />} label={ this.props.rand2 } />
                        <FormControlLabel value={ this.props.rand3 } control={<Radio />} label={ this.props.rand3 } />
                    </RadioGroup>
                </FormControl>

                <button 
                    type="submit"
                    onClick={() => {
                        if(this.state.value == this.props.correct_answer){
                            return this.props.correctAnswer(this.state.value)
                        } else {
                            return this.props.incorrectAnswer([this.state.value, this.props.correct_answer])
                        }
                    }}
                    className="button p-1 m-1"
                    >Final Answer</button>
                
                { renderSkipButton() }
                
            </div>
        )
    }
}

export default RadioButtonsTwo