import { useContext } from "react"
import { PianoKey } from "../../interfacesAndTypes"
import { useProccesNote } from "../hooks/useProccesNote"
import { MusicContext } from "../context/PianoAndSheetMusicContext"

export const BlackKey = ({ pianoInfo }: { pianoInfo: PianoKey }) => {
	const { viewPianoInfo, quitAnimation } = useProccesNote(pianoInfo)
	const { sustainNote } = useContext(MusicContext)
	return sustainNote ? (
		<div
			onClick={viewPianoInfo}
			onAnimationEnd={quitAnimation}
			className={`${
				pianoInfo.selected
					? "goodAnimation"
					: pianoInfo.selected === false
					? "badAnimation"
					: ""
			} h-32 w-10 bg-black -mx-5 z-10 cursor-pointer`}
		></div>
	) : (
		<div className={`h-32 w-10 bg-black -mx-5 z-10`}></div>
	)
}
