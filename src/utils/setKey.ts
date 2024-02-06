import { KeySheetMusic } from "../../interfacesAndTypes"


export function setKey(key: KeySheetMusic, setKey: React.Dispatch<React.SetStateAction<KeySheetMusic>>) {
	if (key === KeySheetMusic.F) {
		return setKey(key)
	}
	else if (key === KeySheetMusic.G) {
		return setKey(key)
	}
  else{
    return setKey('' as KeySheetMusic)
  }
}
