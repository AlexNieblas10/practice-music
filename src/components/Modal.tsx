import { useContext } from "react"
import { Link } from "react-router-dom"
import { AnswerContext } from "../context/GuessNote"

export const Modal = ({ isWinner }: { isWinner: boolean }) => {
	const { setCorrect, setIncorrect } = useContext(AnswerContext)

	function doAgain(){
		setCorrect(0)
		setIncorrect(0)
	}
	return (
		<main className="fixed w-full h-full bg-[rgba(0,0,0,0.85)] z-20">
			<article
				className={`${
					isWinner ? "bg-green-100" : "bg-red-100"
				} absolute z-20 rounded-lg w-1/2 h-1/3 min-w-[335px] flex justify-center flex-col top-0 bottom-0 right-0 left-0 m-auto gap-6`}
			>
				{isWinner ? (
					<h1 className="text-4xl text-center text-green-900">
						Congratulation, you won
					</h1>
				) : (
					<h1 className="text-4xl text-center text-red-950">Sorry, you lost</h1>
				)}
				<h2 className="text-center text-xl">Do you want to play again?</h2>
				<aside className="flex justify-center gap-4">
					<button onClick={doAgain} className="bg-black hover:scale-110  transition-transform text-white w-1/4 h-9 rounded-md">
						Play again
					</button>
					<Link
						className="bg-black hover:scale-110  transition-transform  text-white w-1/4 h-9 rounded-md flex justify-center items-center"
						to={"/"}
					>
						Home page
					</Link>
				</aside>
			</article>
		</main>
	)
}
