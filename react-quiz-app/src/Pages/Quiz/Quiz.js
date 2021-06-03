import { Component } from 'react';
import QuestionCard from "./QuestionCard"
import Scoreboard from "./Scoreboard"


const Quiz = (p) => {


    return (

        <div>
            <div className="splash">
                <Scoreboard 
                    points={p.points}
                    lives={p.lives}
                    skips={p.skipsLeft}
                    streak={p.streak}
                />
            </div>

            { p.questions.map(q => 
                <QuestionCard 
                    key={q.id}
                    id={q.id}
                    question={q.question_content}
                    correct_answer={q.correct_answer}
                    answer_category={q.answer_category}
                    points={q.points}
                    skips_left={p.skipsLeft}
                    skipQuestion={p.skipQuestion}
                    correctAnswer={p.correctAnswer}
                    incorrectAnswer={p.incorrectAnswer}
                /> )
            }
        </div>
    )
}

export default Quiz