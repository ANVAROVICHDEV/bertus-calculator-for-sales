import React, { useEffect, useState } from "react";
// import MoneyOperations from "../services/moneyOpeations";
import { LOGOS } from "../constants/images";
import MoneyOPerations from "../service/MoneyOPerations";

function Currencies({ setShowCurrencies, setRenderPage, renderPage }) {
	const [value, setValue] = useState("");

	// Formatlash funksiyasi
	const formatCurrency = (inputValue) => {
		const numericValue = inputValue.replace(/\D/g, ""); // Faqat raqamlarni olish
		return new Intl.NumberFormat("en-US").format(numericValue); // Formatlash
	};

	const handleChange = (e) => {
		const formattedValue = formatCurrency(e.target.value);
		setValue(formattedValue);
	};

	const CreateCurrencies = async () => {
		const numericValue = value.replace(/,/g, ""); // Formatni olib tashlash
		const response = await MoneyOPerations.currensiesPost(numericValue);
		setRenderPage(!renderPage);
		setShowCurrencies(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		CreateCurrencies();
	};

	return (
		<div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
			<div className="bg-white rounded-2xl p-6 w-[350px]">
				<div className="flex justify-between items-center">
					<h3 className="text-lg font-semibold mb-6">
						Валюта курсини белгилаш
					</h3>
					<button
						onClick={() => setShowCurrencies(false)}
						className="ml-auto flex items-center justify-center p-2 bg-gray-300 rounded-md mb-4"
					>
						<img src={LOGOS.ExitModal} alt="Exit" className="w-4" />
					</button>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<label className="flex flex-col gap-2">
						<input
							value={value}
							onChange={handleChange}
							placeholder="1 доллар сомда қанча бўлишини киритинг:"
							type="text"
							className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</label>
					<button
						type="submit"
						className="w-full bg-[#122830] text-white py-2 rounded-md"
					>
						Ўрнатиш
					</button>
				</form>
			</div>
		</div>
	);
}

export default Currencies;
