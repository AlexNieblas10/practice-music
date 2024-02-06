import { useContext } from "react"
import { Answers } from "../components/Answers"
import { HeaderGame } from "../components/HeaderGame"
import { NavegationGame } from "../components/NavegationGame"
import { Partitura } from "../components/Partitura"
import { Piano } from "../components/Piano"
import { MusicContext } from "../context/PianoAndSheetMusicContext"
import { SelectMusicSheet } from "../components/SelectMusicSheet"
import { GuessNoteContext } from "../context/GuessNote"

export function GuessTheNote() {
	const { musicSheet } = useContext(MusicContext)
	return musicSheet ? (
		<GuessNoteContext>
			<main className=" w-full flex flex-col items-center justify-center min-h-screen p-2 md:gap-24 gap-7">
				<HeaderGame>
					<Answers />
					<Partitura />
					<NavegationGame />
				</HeaderGame>

				<Piano />
			</main>
		</GuessNoteContext>
	) : (
		<SelectMusicSheet />
	)
}
