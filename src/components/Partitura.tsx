import { FKeys } from "../utils/FKeys"
import { GKeys } from "../utils/GKeys"
import {
	KeySheetMusic,
	Keys,
	Key,
	PartituraProps,
} from "../../interfacesAndTypes"
import { useEffect, useState } from "react"
import { selectItem } from "../utils/selectItemSheetMusic"
import { selectImageSheetMusic } from "../utils/selectImageSheetMusic"

export const Partitura = ({ musicSheet, currentKey }: PartituraProps) => {
	const [currentSheetMusic, setCurrentSheetMusic] = useState({} as Keys)
	const [individualKey, setIndividualKey] = useState({} as Key)

	useEffect(() => {
		if (musicSheet === KeySheetMusic.G) {
			setCurrentSheetMusic(GKeys)
		} else {
			setCurrentSheetMusic(FKeys)
		}
		setIndividualKey(currentSheetMusic[currentKey])
	}, [musicSheet, currentKey, currentSheetMusic])

	return (
		<article className="max-w-[600px] min-w-96  relative">
			{currentSheetMusic.length > 0 && (
				<>
					<aside className="flex flex-col w-full items-center">
						{currentSheetMusic.map((key) => selectItem(key, individualKey))}
					</aside>
					{selectImageSheetMusic(musicSheet)}
				</>
			)}
		</article>
	)
}
