import { KeySheetMusic } from "../../interfacesAndTypes"
import { Answers } from "../components/Answers"
import { HeaderGame } from "../components/HeaderGame"
import { NavegationGame } from "../components/NavegationGame"
import { Partitura } from "../components/Partitura"
import { Piano } from "../components/Piano"
import { getNote } from "../utils/getNote"

export function GuessTheNote() {
	return (
		<main className=" w-full flex flex-col items-center justify-center min-h-screen p-2 md:gap-24 gap-7">
			<HeaderGame>
				<Answers />
				<Partitura musicSheet={KeySheetMusic.G} currentKey={getNote()} />
				<NavegationGame />
			</HeaderGame>

			<Piano />
		</main>
	)
}
