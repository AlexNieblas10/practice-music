import React, { createContext, useState } from "react"
import { getNote } from "../utils/getNote"
import { KeySheetMusic, Keys, Piano } from "../../interfacesAndTypes"
import { pianoKeys } from "../utils/pianoKeys"

interface Context {
	note: number
	setNote: React.Dispatch<React.SetStateAction<number>>
	musicSheet: KeySheetMusic
	setMusicSheet: React.Dispatch<React.SetStateAction<KeySheetMusic>>
	musicSheetKeys: Keys
	setMusicSheetKeys: React.Dispatch<React.SetStateAction<Keys>>
	piano: Piano
	setPiano: React.Dispatch<React.SetStateAction<Piano>>
	sustainNote: boolean
	setSustainNotes: React.Dispatch<React.SetStateAction<boolean>>
}

export const MusicContext = createContext({} as Context)

export const PianoAndSheetMusicContext = ({
	children,
}: {
	children: React.ReactElement
}) => {
	const [note, setNote] = useState(getNote())
	const [musicSheet, setMusicSheet] = useState("" as KeySheetMusic)
	const [musicSheetKeys, setMusicSheetKeys] = useState({} as Keys)
	const [piano, setPiano] = useState(pianoKeys)
	const [sustainNote, setSustainNotes] = useState(true)

	return (
		<MusicContext.Provider
			value={{
				piano,
				setPiano,
				note,
				setNote,
				musicSheet,
				setMusicSheet,
				musicSheetKeys,
				setMusicSheetKeys,
				sustainNote,
				setSustainNotes 
			}}
		>
			{children}
		</MusicContext.Provider>
	)
}
