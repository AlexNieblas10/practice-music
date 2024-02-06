import { useContext } from "react"
import { KeySheetMusic } from "../../interfacesAndTypes"
import { setKey } from "../utils/setKey"
import { MusicContext } from "../context/PianoAndSheetMusicContext"

export const NavegationGame = () => {
	const { setMusicSheet } = useContext(MusicContext)
	return (
		<article className="flex justify-center items-center w-full text-center md:w-1/4 md:flex-col gap-4">
			<button
				onClick={() => setKey("" as KeySheetMusic, setMusicSheet)}
				className="w-2/6 md:w-1/2 min-w-44 bg-zinc-300 hover:bg-zinc-500 transition-colors duration-500 rounded-md p-2"
			>
				Change key
			</button>
			<button className="w-2/6 md:w-1/2 min-w-44 bg-slate-300 hover:bg-slate-500 transition-colors duration-500 rounded-md p-2">
				Go to menu
			</button>
		</article>
	)
}
