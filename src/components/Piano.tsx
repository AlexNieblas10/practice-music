import { useContext } from "react"
import { selectItemPiano } from "../utils/selectItemPiano"
import { MusicContext } from "../context/PianoAndSheetMusicContext"

export const Piano = () => {
	const { piano } = useContext(MusicContext)
	return (
		<article className="flex w-screen justify-center">
			{piano.map((pianoKey) => selectItemPiano(pianoKey))}
		</article>
	)
}
