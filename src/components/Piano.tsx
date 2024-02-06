import { useContext } from "react"
import { selectItemPiano } from "../utils/selectItemPiano"
import { MusicContext } from "../context/PianoAndSheetMusicContext"

export const Piano = () => {
	const { piano } = useContext(MusicContext)
	return (
		<article className="flex w-full justify-center min-w-80">
			{piano.map((pianoKey) => selectItemPiano(pianoKey))}
		</article>
	)
}
