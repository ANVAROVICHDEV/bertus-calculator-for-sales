import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminPanel, HomePage } from "./components/index";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sardor" element={<AdminPanel />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
