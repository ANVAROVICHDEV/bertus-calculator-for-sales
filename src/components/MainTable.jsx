"use client";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import MoneyOPerations from "../service/MoneyOPerations";
import MainTables from "./MainTables";

const MainTable = () => {
	const [type, setType] = useState("wall");
	const [thickness, setThickness] = useState(5);
	const [blockColumn, setBlockColumn] = useState("p10");
	const [underListColumn, setUnderListColumn] = useState("mm35");
	const [upperListColumn, setUpperListColumn] = useState("mm35");

	const typeMap1 = {
		wall: "Devor",
		roof: "Tom",
	};
	const typeMap2 = {
		p10: "10PL",
		p14: "14PL",
		p16: "16PL",
		p18: "18PL",
		p20: "20PL",
		p100: "BAZALT",
	};

	// const typeMap3 = {
	// 	mm35: "0.35 sm",
	// };

	const [finallySum, setFinallySum] = useState(null);
	const allData = async () => {
		try {
			const response = await MoneyOPerations.mainOperations(
				type,
				thickness,
				blockColumn,
				underListColumn,
				upperListColumn,
			);
			setFinallySum(response);
		} catch (error) {
			console.error("API Error:", error);
		}
	};
	useEffect(() => {
		allData();
	}, [type, thickness, blockColumn, underListColumn, upperListColumn]);

	return (
		<div className="mt-10 ">
			<h1 className="bg-gradient-to-r bg-[#122830] text-white w-[100%] mx-auto text-center p-5 text-base sm:text-2xl md:text-3xl rounded-xl shadow-lg">
				<span>
					{Number(finallySum?.sum.toFixed(2))
						.toLocaleString("en-US", { useGrouping: true })
						.replace(/,/g, " ")}
				</span>{" "}
				СУМ <br />{" "}
				<span>
					{Number(finallySum?.dollar.toFixed(2))
						.toLocaleString("en-US", { useGrouping: true })
						.replace(/,/g, " ")}
				</span>{" "}
				USD
			</h1>

			<div className="md:flex  w-[100%] md:w-[100%]   mx-auto my-5">
				<div className="w-full md:w-1/5 flex md:flex-col justify-between">
					<div className="w-[50%] md:w-auto md:text-xs md:h-[50%] flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
						ТУРИ
					</div>
					<div className="w-[50%]  md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
						<Dropdown
							style={{ background: "#122830", width: "130px" }}
							// label={type.toUpperCase()}
							label={typeMap1[type].toUpperCase()}
							dismissOnClick={true}
						>
							<Dropdown.Item onClick={() => setType("wall")}>
								DEVOR
							</Dropdown.Item>
							<Dropdown.Item onClick={() => setType("roof")}>TOM</Dropdown.Item>
						</Dropdown>
					</div>
				</div>
				<div className="w-full md:w-1/5 flex md:flex-col justify-between">
					<div className="w-[50%] md:text-xs md:h-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
						ҚАЛИНЛИК
					</div>
					<div className="w-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
						<Dropdown
							style={{ background: "#122830", width: "130px" }}
							label={`${thickness}sm`}
							dismissOnClick={true}
						>
							{[5, 7.5, 8.5, 10, 12, 15, 20].map((value) => (
								<Dropdown.Item key={value} onClick={() => setThickness(value)}>
									{value}sm
								</Dropdown.Item>
							))}
						</Dropdown>
					</div>
				</div>
				<div className="w-full md:w-1/5 flex md:flex-col justify-between">
					<div className="w-[50%] md:w-auto md:text-xs md:h-[50%] flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
						ЗИЧЛИК
					</div>
					<div className="w-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
						<Dropdown
							style={{ background: "#122830", width: "130px" }}
							label={typeMap2[blockColumn]}
							dismissOnClick={true}
						>
							{["p10", "p14", "p16", "p18", "p20", "p100"].map((value) => (
								<Dropdown.Item
									key={value}
									onClick={() => setBlockColumn(value)}
								>
									{typeMap2[value]}
								</Dropdown.Item>
							))}
						</Dropdown>
					</div>
				</div>
				<div className="w-full md:w-1/5 flex md:flex-col justify-between">
					<div className="w-[50%] md:h-[50%] md:w-auto md:text-xs flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
						ТУНИКА УСТКИ
					</div>
					<div className="w-[50%]  md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
						<Dropdown
							style={{ background: "#122830", width: "130px" }}
							label={underListColumn}
							dismissOnClick={true}
						>
							{["mm35", "mm37", "mm40", "mm45", "mm48", "mm50"].map((value) => (
								<Dropdown.Item
									key={value}
									onClick={() => setUnderListColumn(value)}
								>
									{value}
								</Dropdown.Item>
							))}
						</Dropdown>
					</div>
				</div>
				<div className=" w-full md:w-1/5 flex md:flex-col justify-between">
					<div className="w-[50%] md:h-[50%] md:w-auto md:text-xs flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
						ТУНИКА ОСТКИ
					</div>
					<div className="w-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
						<Dropdown
							style={{ background: "#122830", width: "130px" }}
							label={upperListColumn}
							dismissOnClick={true}
						>
							{["mm35", "mm37", "mm40", "mm45", "mm48", "mm50"].map((value) => (
								<Dropdown.Item
									key={value}
									onClick={() => setUpperListColumn(value)}
								>
									{value}
								</Dropdown.Item>
							))}
						</Dropdown>
					</div>
				</div>
			</div>
			<h1 className="absolute left-0 bottom-0 w-full text-center bg-[#122830] text-white p-2">
				© 2025 Zero. All Rights Reserved.
			</h1>
		</div>
	);
};

export default MainTable;
