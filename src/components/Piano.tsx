import { pianoKeys } from "../utils/pianoKeys"
import { selectItemPiano } from "../utils/selectItemPiano"

export const Piano = () => {
	return (
		<article className="flex w-full justify-center min-w-80">
			{pianoKeys.map((pianoKey) => selectItemPiano(pianoKey))}
		</article>
	)
}
