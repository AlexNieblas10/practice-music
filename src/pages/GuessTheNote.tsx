import { useContext } from "react"
import { Answers } from "../components/Answers"
import { HeaderGame } from "../components/HeaderGame"
import { NavegationGame } from "../components/NavegationGame"
import { Partitura } from "../components/Partitura"
import { Piano } from "../components/Piano"
import { MusicContext } from "../context/PianoAndSheetMusicContext"
import { SelectMusicSheet } from "../components/SelectMusicSheet"
import { AnswerContext } from "../context/GuessNote"
import { Modal } from "../components/Modal"

export function GuessTheNote() {
	const { musicSheet } = useContext(MusicContext)
	const { correct, incorrect } = useContext(AnswerContext)

	return musicSheet ? (
		<main className=" w-full flex flex-col items-center justify-center min-h-screen p-2 md:gap-24 gap-7 relative">
			{correct === 20 && <Modal isWinner={true} />}
			{incorrect === 3 && <Modal isWinner={false} />}
			<aside className="flex flex-col gap-4">
				<HeaderGame>
					<Answers />
					<Partitura />
					<NavegationGame />
				</HeaderGame>
				<Piano />
			</aside>
		</main>
	) : (
		<SelectMusicSheet />
	)
}
