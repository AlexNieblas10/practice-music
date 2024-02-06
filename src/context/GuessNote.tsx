import { createContext, useState } from "react"

interface ValueContext {
	correct: number
	incorrect: number
	setCorrect: React.Dispatch<React.SetStateAction<number>>
	setIncorrect: React.Dispatch<React.SetStateAction<number>>
}
export const AnswerContext = createContext({} as ValueContext)

export const GuessNoteContext = ({
	children,
}: {
	children: React.ReactElement
}) => {
	const [correct, setCorrect] = useState(0)
	const [incorrect, setIncorrect] = useState(0)

	return (
		<AnswerContext.Provider
			value={{ correct, incorrect, setCorrect, setIncorrect }}
		>
			{children}
		</AnswerContext.Provider>
	)
}
