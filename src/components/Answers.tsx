import { useContext } from "react"
import { AnswerContext } from "../context/GuessNote"

export const Answers = () => {
  const {correct, incorrect} = useContext(AnswerContext)
  return (
    <article className="flex justify-center items-center w-full md:w-1/4 md:flex-col text-center">
      <p className="text-green-600 text-xl md:text-2xl w-full">Correct: {correct}/20</p>
      <p className="text-red-600 text-xl md:text-2xl w-full">Incorrect: {incorrect}/3</p>
    </article>
  )
}
