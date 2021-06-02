import { Component } from 'react';
import {useEffect} from "react";
import QuestionCard from "./QuestionCard"
import Scoreboard from "./Scoreboard"

const API = "http://localhost:9292/quiz/"

class Quiz extends Component {

    state = {
        questions: [],
        position: 0,
        points: 0,
        streak: 1,
        skips_left: 3,
        lives: 5,
        last_answer: null,
        answer: ""
    }

    componentDidMount() {
        fetch(API)
          .then(r => r.json())
          .then(questions => this.setState({
              questions: questions
          }))
    }

    skipQuestion = () => {this.setState({position: this.state.position + 1, 
                                         skips_left: this.state.skips_left - 1 })}

    correctAnswer = (e) => {this.setState({points: this.state.points + 10 * this.state.streak, 
                                          streak: this.state.streak + 1, 
                                          position: this.state.position + 1,
                                          last_answer: true,
                                          answer: e })}

    incorrectAnswer = (e) => {this.setState({streak: 1, points: this.state.points -20, 
                                            position: this.state.position + 1,
                                            lives: this.state.lives - 1,
                                            last_answer: false,
                                            answer: e })}

    gameOver = () => {
        if(this.state.lives == 0){
            console.log("the game is over")
        }
    }
    
    render() {

        const questionsCopy = [...this.state.questions]
        const questionMap = questionsCopy.slice(this.state.position, this.state.position + 1)

        return (

          
            <div>
                <div className="splash">
                    <Scoreboard 
                        points={this.state.points}
                        lives={this.state.lives}
                        skips={this.state.skips_left}
                        streak={this.state.streak}
                    />
                </div>

                { questionMap.map(q => 
                    <QuestionCard 
                        key={q.id}
                        id={q.id}
                        question={q.question_content}
                        correct_answer={q.correct_answer}
                        answer_category={q.answer_category}
                        points={q.points}
                        skips_left={this.state.skips_left}
                        skipQuestion={this.skipQuestion}
                        correctAnswer={this.correctAnswer}
                        incorrectAnswer={this.incorrectAnswer}
                    /> )
                }
            </div>
        )
    }
}

export default Quiz