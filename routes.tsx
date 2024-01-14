import { createBrowserRouter } from "react-router-dom"
import { GuessTheNote } from "./src/pages/GuessTheNote"

export const routes = createBrowserRouter([
  { path: "/guessnote", element: <GuessTheNote /> }
])
