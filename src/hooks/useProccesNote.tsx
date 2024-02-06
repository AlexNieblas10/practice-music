import { useContext } from "react"
import { MusicContext } from "../context/PianoAndSheetMusicContext"
import { AnswerContext } from "../context/GuessNote"
import { PianoKey } from "../../interfacesAndTypes"
import { getNote } from "../utils/getNote"

export const useProccesNote = (pianoInfo: PianoKey) => {
	const { note, musicSheetKeys, piano, setPiano, setNote } = useContext(MusicContext)
	const { setCorrect, correct, incorrect, setIncorrect } =
		useContext(AnswerContext)

	function viewPianoInfo() {
		const correctAnswer = musicSheetKeys[note].name

		if (pianoInfo.name === correctAnswer) {
			const index = piano.findIndex(
				(tecla) => tecla.number === pianoInfo.number
			)
			piano[index].selected = true
			setPiano([...piano])
			setCorrect(correct + 1)
			setNote(getNote())
		} else {
			const index = piano.findIndex(
				(tecla) => tecla.number === pianoInfo.number
			)
			piano[index].selected = false
			setPiano([...piano])
			setIncorrect(incorrect + 1)
		}
	}

	function quitAnimation() {
		const index = piano.findIndex((tecla) => tecla.number === pianoInfo.number)
		piano[index].selected = null
		setPiano([...piano])
	}

	return { viewPianoInfo, quitAnimation }
}
