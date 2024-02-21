import { createBrowserRouter } from "react-router-dom"
import { GuessTheNote } from "./src/pages/GuessTheNote"
import { GuessNoteContext } from "./src/context/GuessNote"

export const routes = createBrowserRouter([
	{
		path: "/guessnote",
		element: (
			<GuessNoteContext>
				<GuessTheNote />
			</GuessNoteContext>
		),
	},
])
