import { BlackOrWhite, PianoKey } from "../../interfacesAndTypes"
import { BlackKey } from "../components/BlackKey"
import { WhiteKey } from "../components/WhiteKey"

export function selectItemPiano(pianoKey:PianoKey){
  if (pianoKey.blackOrWhite === BlackOrWhite.WHITE) {
    return <WhiteKey key={pianoKey.name} />
  } else {
    return <BlackKey key={pianoKey.name} />
  }
}