import { KeySheetMusic } from "../../interfacesAndTypes"
import GKeyImage from "../assets/claveSol.webp"
import FKeyImage from "../assets/claveFa.webp"

export function selectImageSheetMusic(musicSheet: KeySheetMusic) {
	if (musicSheet === KeySheetMusic.G) {
		return <img className="absolute w-[130px] top-12 left-0 " src={GKeyImage} />
	} else {
		return (
			<img className="absolute w-[130px] top-[88px] left-0 " src={FKeyImage} />
		)
	}
}
