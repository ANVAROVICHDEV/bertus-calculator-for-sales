import { useState } from "react";
import { Header, MainTable } from "../components";

const HomePage = () => {
	const [renderPage, setRenderPage] = useState(false);
	return (
		<div className="container mx-auto h-auto md:h-screen  py-5 px-8 relative">
			<Header setRenderPage={setRenderPage} renderPage={renderPage} />
			<MainTable />
		</div>
	);
};

export default HomePage;
