import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { routes } from "../routes.tsx"
import "./index.css"
import { PianoAndSheetMusicContext } from "./context/PianoAndSheetMusicContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PianoAndSheetMusicContext>
			<RouterProvider router={routes} />
		</PianoAndSheetMusicContext>
	</React.StrictMode>
)
