import { Key } from "../../interfacesAndTypes"
import { Note } from "../components/Note"
import { getNote } from "./getNote"

export function selectItem(key: Key, individualKey: Key, sustainNote:boolean, setNote: React.Dispatch<React.SetStateAction<number>>) {
	let visible: boolean
	key === individualKey ? (visible = true) : (visible = false)

	let father: number
	individualKey?.father !== undefined
		? (father = individualKey.father)
		: (father = 0)

	if(!sustainNote && father !== 0){
		setNote(getNote())
	}
	if (key.espacio) {
		return (
			<div
				id={key.number.toString()}
				className="w-full h-7 relative"
				key={key.number}
			>
				{visible && <Note isBlackKey={false} />}
				{father === key.number && <Note isBlackKey={true} />}
			</div>
		)
	}
	if (key.espacio === false && key.isBlackKey === false) {
		return (
			<div
				id={key.number.toString()}
				className={`${
					key.number < 9 || key.number > 25 ? "w-10" : "w-full"
				} h-1 bg-black relative`}
				key={key.number}
			>
				{visible && <Note isBlackKey={false} />}
				{father === key.number && <Note isBlackKey={true} />}
			</div>
		)
	}
}
