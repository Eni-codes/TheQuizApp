import RadioButtonsTwo from './RadioButtonsTwo'
import "./Quiz.css"

const Card = (p) => {

  const arr = p.answer_category.incorrect_answers.map(i_a => i_a.incorrect_answer)

  const rand1 = arr[Math.floor(Math.random()*arr.length)]
  const rand2 = arr[Math.floor(Math.random()*arr.length)]
  const rand3 = arr[Math.floor(Math.random()*arr.length)]

  // const randomIndex = (r) => {
  //     return Math.floor(Math.random() * r.lengtth)
  // }

  // for (var i = 0; i < 3; i++) {
  //     const removedItem = arr.splice(randomIndex(arr), 1);
  //     document.writeIn(removedItem)
  // }


  return (
    <div className="card-container">
      <div className="card-body">
      <p className="card-cat">Category: { p.answer_category.answer_category }</p>
          <h2 className="card-title">Question { p.id }: { p.question }?</h2>
          
        <div className="card-title">
           <RadioButtonsTwo
              correct_answer={p.correct_answer}
              answer_category={p.answer_category}
              correctAnswer={p.correctAnswer}
              incorrectAnswer={p.incorrectAnswer}
              skips_left={p.skips_left}
              skipQuestion={p.skipQuestion}
              rand1={rand1}
              rand2={rand2}
              rand3={rand3}
          />
      </div>
      <div>
          <p className="card-text">Points: { p.points }</p>
          </div>
    </div>
    </div>
  )
}

export default Card