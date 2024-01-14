import { Key } from "../../interfacesAndTypes"
import { Note } from "../components/Note"

export function selectItem(key: Key, individualKey:Key) {
	let visible: boolean
	key === individualKey ? (visible = true) : (visible = false)

	if (key.isBlackKey) {
		return (
			<div className="w-full relative" key={key.number}>
				{visible && <Note isBlackKey={true} />}
			</div>
		)
	} else if (key.espacio) {
		return (
			<div className="w-full h-7 relative" key={key.number}>
				{visible && <Note isBlackKey={false} />}
			</div>
		)
	} else {
		return (
			<div
				className={`${
					key.number < 9 || key.number > 25 ? "w-10" : "w-full"
				} h-1 bg-black relative`}
				key={key.number}
			>
				{visible && <Note isBlackKey={false} />}
			</div>
		)
	}
}
