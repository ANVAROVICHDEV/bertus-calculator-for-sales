"use client";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import MoneyOPerations from "../service/MoneyOPerations";
import Loader from "./Loader";

const MainTable = () => {
	const [type, setType] = useState("wall");
	const [thickness, setThickness] = useState(5);
	const [blockColumn, setBlockColumn] = useState("p10");
	const [underListColumn, setUnderListColumn] = useState("mm35");
	const [upperListColumn, setUpperListColumn] = useState("mm35");
	const [loading, setLoading] = useState(false);

	const typeMap1 = {
		wall: "Devor",
		roof: "Tom",
	};
	const typeMap2 = {
		p10: "10P",
		p14: "14P",
		p16: "16P",
		p18: "18P",
		p20: "20P",
		p100: "100 P",
	};

	// const typeMap3 = {
	// 	mm35: "0.35 sm",
	// };

	const [finallySum, setFinallySum] = useState(null);
	const allData = async () => {
		setLoading(true);
		try {
			const response = await MoneyOPerations.mainOperations(
				type,
				thickness,
				blockColumn,
				underListColumn,
				upperListColumn,
			);
			setFinallySum(response);
			setLoading(false);
		} catch (error) {
			console.error("API Error:", error);
			setLoading(false);
		}
	};
	useEffect(() => {
		allData();
	}, [type, thickness, blockColumn, underListColumn, upperListColumn]);

	return (
		loading ? <Loader /> : <div className="mt-10">
		<h1 className="bg-gradient-to-r bg-[#122830] text-white w-[70%] mx-auto text-center p-5 text-base sm:text-2xl md:text-3xl rounded-xl shadow-lg">
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

		<div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
			<table className="table-auto mx-auto border-collapse border border-gray-300 shadow-lg rounded-md mt-5">
				<thead className="bg-gray-100 text-gray-700">
					<tr>
						<th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium">
							ТУРИ
						</th>
						<th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium">
							ҚАЛИНЛИК
						</th>
						<th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium">
							ЗИЧЛИК
						</th>
						<th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium">
							ТУНИКА УСТКИ
						</th>
						<th className="px-6 py-3 border border-gray-300 text-center text-sm font-medium">
							ТУНИКА ОСТКИ
						</th>
					</tr>
				</thead>
				<tbody className="bg-white">
					<tr className="hover:bg-gray-50">
						<td className="px-6 py-4 border border-gray-300 ">
							<Dropdown
								style={{ background: "#122830" }}
								// label={type.toUpperCase()}
								label={typeMap1[type].toUpperCase()}
								dismissOnClick={true}
							>
								<Dropdown.Item onClick={() => setType("wall")}>
									DEVOR
								</Dropdown.Item>
								<Dropdown.Item onClick={() => setType("roof")}>
									TOM
								</Dropdown.Item>
							</Dropdown>
						</td>
						<td className="px-6 py-4 border border-gray-300">
							<Dropdown
								style={{ background: "#122830" }}
								label={`${thickness}sm`}
								dismissOnClick={true}
							>
								{[5, 7.5, 8, 10, 12, 15, 20].map((value) => (
									<Dropdown.Item
										key={value}
										onClick={() => setThickness(value)}
									>
										{value}sm
									</Dropdown.Item>
								))}
							</Dropdown>
						</td>
						<td className="px-6 py-4 border border-gray-300">
							<Dropdown
								style={{ background: "#122830" }}
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
						</td>
						<td className="px-6 py-4 border border-gray-300">
							<Dropdown
								style={{ background: "#122830" }}
								label={underListColumn}
								dismissOnClick={true}
							>
								{["mm35", "mm37", "mm40", "mm45", "mm48", "mm50"].map(
									(value) => (
										<Dropdown.Item
											key={value}
											onClick={() => setUnderListColumn(value)}
										>
											{value}
										</Dropdown.Item>
									),
								)}
							</Dropdown>
						</td>
						<td className="px-6 py-4 border border-gray-300">
							<Dropdown
								style={{ background: "#122830" }}
								label={upperListColumn}
								dismissOnClick={true}
							>
								{["mm35", "mm37", "mm40", "mm45", "mm48", "mm50"].map(
									(value) => (
										<Dropdown.Item
											key={value}
											onClick={() => setUpperListColumn(value)}
										>
											{value}
										</Dropdown.Item>
									),
								)}
							</Dropdown>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	);
};

export default MainTable;
