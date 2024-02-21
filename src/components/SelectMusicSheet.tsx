import { useContext } from "react"
import { KeySheetMusic } from "../../interfacesAndTypes"
import { MusicContext } from "../context/PianoAndSheetMusicContext"
import { setKey } from "../utils/setKey"

export const SelectMusicSheet = () => {
	const { setMusicSheet, sustainNote, setSustainNotes } =
		useContext(MusicContext)

	function changeSustainNotes(isActivate: boolean) {
		setSustainNotes(isActivate)
	}

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
			<aside className="flex flex-col gap-4 ">
				<h2 className="text-3xl">Do you want add sustain notes?</h2>
				<div className="flex gap-4 justify-center">
					<button
						onClick={() => changeSustainNotes(true)}
						className={`${
							sustainNote
								? "bg-green-500"
								: "bg-green-200 hover:bg-green-500 hover:text-white"
						} w-3/6 text-xl   transition-colors duration-500 rounded-md p-2`}
					>
						Yes
					</button>
					<button
						onClick={() => changeSustainNotes(false)}
						className={`${
							sustainNote
								? "bg-red-200 hover:bg-red-500 hover:text-white"
								: "bg-red-500"
						} w-3/6 text-xl   transition-colors duration-500 rounded-md p-2`}
					>
						No
					</button>
				</div>
			</aside>
		</article>
	)
}
