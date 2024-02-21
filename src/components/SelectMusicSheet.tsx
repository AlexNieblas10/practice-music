import { useContext } from "react"
import { KeySheetMusic } from "../../interfacesAndTypes"
import { MusicContext } from "../context/PianoAndSheetMusicContext"
import { setKey } from "../utils/setKey"

export const SelectMusicSheet = () => {
	const { setMusicSheet } = useContext(MusicContext)

	return (
		<article className="w-full min-h-screen flex flex-col justify-center items-center gap-16">
			<h1 className="text-6xl">Select the key</h1>
			<aside className="w-full flex gap-8 justify-center px-4">
				<button
					onClick={() => setKey(KeySheetMusic.F, setMusicSheet)}
					className="w-2/6 text-xl  bg-zinc-300 hover:bg-zinc-500 hover:text-white transition-colors duration-500 rounded-md p-2"
				>
					Key of F
				</button>

				<button
					onClick={() => setKey(KeySheetMusic.G, setMusicSheet)}
					className="w-2/6 text-xl  bg-zinc-300 hover:bg-zinc-500 hover:text-white transition-colors duration-500 rounded-md p-2"
				>
					Key of G
				</button>
			</aside>
		</article>
	)
}
