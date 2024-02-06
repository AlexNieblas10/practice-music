import { FKeys } from "../utils/FKeys"
import { GKeys } from "../utils/GKeys"
import { KeySheetMusic, Key } from "../../interfacesAndTypes"
import { useContext, useEffect, useState } from "react"
import { selectItem } from "../utils/selectItemSheetMusic"
import { selectImageSheetMusic } from "../utils/selectImageSheetMusic"
import { MusicContext } from "../context/PianoAndSheetMusicContext"

export const Partitura = () => {
	const [individualKey, setIndividualKey] = useState({} as Key)

	const { musicSheet, note, musicSheetKeys, setMusicSheetKeys } =
		useContext(MusicContext)

	useEffect(() => {
		if (musicSheet === KeySheetMusic.G) {
			setMusicSheetKeys(GKeys)
		} else {
			setMusicSheetKeys(FKeys)
		}
		setIndividualKey(musicSheetKeys[note])
	}, [musicSheet, musicSheetKeys, note, setMusicSheetKeys])

	return (
		<article className="max-w-[600px] min-w-96  relative">
			{musicSheetKeys.length > 0 && (
				<>
					<aside className="flex flex-col w-full items-center">
						{musicSheetKeys.map((key) => selectItem(key, individualKey))}
					</aside>
					{selectImageSheetMusic(musicSheet)}
				</>
			)}
		</article>
	)
}
