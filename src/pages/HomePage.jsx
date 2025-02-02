import { useState } from "react";
import { Header, MainTable } from "../components";

const HomePage = () => {
  const [renderPage, setRenderPage] = useState(false)
	return <div className="container mx-auto h-screen py-5 px-8 ">
    <Header setRenderPage={setRenderPage} renderPage={renderPage}/>
    <MainTable />
    <footer>
				<h1 className="flex absolute bottom-0 left-0 sm:text-center">
					© 2025 Sardor. All Rights Reserved.
				</h1>
			</footer>
  </div>;
};

export default HomePage;
