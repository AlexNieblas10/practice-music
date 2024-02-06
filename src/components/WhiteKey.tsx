import { PianoKey } from "../../interfacesAndTypes"
import "../animations.css"
import { useProccesNote } from "../hooks/useProccesNote"

export const WhiteKey = ({ pianoInfo }: { pianoInfo: PianoKey }) => {
	const { viewPianoInfo, quitAnimation } = useProccesNote(pianoInfo)

	return (
		<div
			onClick={viewPianoInfo}
			onAnimationEnd={quitAnimation}
			className={`${
				pianoInfo.selected
					? "goodAnimation"
					: pianoInfo.selected === false
					? "badAnimation"
					: ""
			} w-16 h-48 border-y-2 border-r-2 first:border-l-2 border-black`}
		></div>
	)
}
