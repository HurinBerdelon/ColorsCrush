import { ScoreBoard } from "./components/ScoreBoard"
import { GameBoard } from "./components/GameBoard"
import { GameProvider } from "./hooks/useGame";



function App(): JSX.Element {

	return (
		<GameProvider>
			<GameBoard />
			{/* <ScoreBoard /> */}
		</GameProvider>
	)
}

export default App;
