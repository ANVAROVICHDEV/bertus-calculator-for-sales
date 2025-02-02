import { useEffect, useState } from "react";
import { Currencies } from "./index";
import MoneyOPerations from "../service/MoneyOPerations";

const Header = ({setRenderPage, renderPage}) => {
	const [showCurrencies, setShowCurrencies] = useState(false);
	const [currencies, setCurrensies] = useState(0);
	const allCurrensies = async () => {
		const response = await MoneyOPerations.currensiesGet();
		setCurrensies(response?.currencies);
	};

	useEffect(() => {
		allCurrensies();
	}, [renderPage]);
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="font-bold text-lg sm:text-3xl text-[#122830]">Bertus Panels</h1>
				<button
					onClick={() => setShowCurrencies(true)}
					className="bg-[#122830] text-white py-2 px-7 rounded-md "
				>
					Курс: {currencies?.price?.toLocaleString()}
				</button>
			</div>

			{showCurrencies && <Currencies renderPage={renderPage} setRenderPage={setRenderPage} setShowCurrencies={setShowCurrencies} />}
		</>
	);
};

export default Header;
