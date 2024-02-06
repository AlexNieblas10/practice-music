import { PianoKey } from "../../interfacesAndTypes"
import { useProccesNote } from "../hooks/useProccesNote"

export const BlackKey = ({ pianoInfo }: { pianoInfo: PianoKey }) => {
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
			} h-32 w-10 bg-black -mx-5 z-10`}
		></div>
	)
}
