import { FaEdit } from "react-icons/fa";
import MoneyOPerations from "../service/MoneyOPerations";
import { useEffect, useState } from "react";

const AdminPanel = () => {
	const [blocks, setBlocks] = useState("");
	const [lists, setLists] = useState(null);
	const [glues, setGlues] = useState(null);
	const [activeModal, setActiveModal] = useState(false);
	const [activeModalList, setActiveModalList] = useState(false);
	const [activeModalGlue, setActiveModalGlue] = useState(false);

	const [raw, setRaw] = useState({
		p10: "",
		p14: "",
		p16: "",
		p18: "",
		p20: "",
		p100: "",
	});
	const [list, setList] = useState({
		mm35: "",
		mm37: "",
		mm40: "",
		mm45: "",
		mm48: "",
		mm50: "",
	});
	const [glue, setGlue] = useState({
		pena: "",
		basalt: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setRaw((prevRaw) => ({
			...prevRaw,
			[name]: value,
		}));
	};
	const handleInputChangeList = (e) => {
		const { name, value } = e.target;
		setList((prevRaw) => ({
			...prevRaw,
			[name]: value,
		}));
	};
	const handleInputChangeGlue = (e) => {
		const { name, value } = e.target;
		setGlue((prevRaw) => ({
			...prevRaw,
			[name]: value,
		}));
	};
	const putAdminPanelBlock = async (e) => {
		try {
			e.preventDefault(); // To prevent page reload
			const response = await MoneyOPerations.adminPanelPutBlocks(raw);
			setActiveModal(false);
			if (response?.detail) {
				// Ma'lumotlarni qayta olish
				getAdminPanel();
			}
			console.log(response);
		} catch (error) {
			setActiveModal(false);
		}
	};
	const putAdminPanelList = async (e) => {
		try {
			e.preventDefault(); // To prevent page reload
			const response = await MoneyOPerations.adminPanelPutLists(list);
			setActiveModalList(false);
			if (response?.detail) {
				// Ma'lumotlarni qayta olish
				getAdminPanel();
			}
			console.log(response);
		} catch (error) {
			setActiveModalList(false);
		}
	};
	const putAdminPanelGlue = async (e) => {
		try {
			e.preventDefault(); // To prevent page reload
			const response = await MoneyOPerations.adminPanelPutGlue(glue);
			setActiveModalGlue(false);
			if (response?.detail) {
				// Ma'lumotlarni qayta olish
				getAdminPanel();
			}
			console.log(response);
		} catch (error) {
			setActiveModalGlue(false);
		}
	};

	const getAdminPanel = async () => {
		const response = await MoneyOPerations.adminPanelGet();
		// console.log(response);
		setBlocks(response?.blocks);
		setLists(response?.lists);
		setGlues(response?.glues);
		setRaw({
			p10: response?.blocks?.p10 || "", // Avvalgi qiymatni set qilamiz
			p14: response?.blocks?.p14 || "",
			p16: response?.blocks?.p16 || "",
			p18: response?.blocks?.p18 || "",
			p20: response?.blocks?.p20 || "",
			p100: response?.blocks?.p100 || "",
		});
		setList({
			mm35: response?.lists?.mm35 || "", // Avvalgi qiymatni set qilamiz
			mm37: response?.lists?.mm37 || "",
			mm40: response?.lists?.mm40 || "",
			mm45: response?.lists?.mm45 || "",
			mm48: response?.lists?.mm48 || "",
			mm50: response?.lists?.mm50 || "",
		});
		setGlue({
			pena: response?.glues?.pena || "", // Avvalgi qiymatni set qilamiz
			basalt: response?.glues?.basalt || "",
		});
	};

	useEffect(() => {
		getAdminPanel();
	}, []);

	return (
		<div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 md:scrollbar-thumb-gray-600">

			<div className="flex flex-wrap text-xs justify-center  mb-3 sm:justify-between  md:justify-between lg:text-base lg:justify-between">
				<h1 className="pb-4 font-bold text-4xl">Admin Panel</h1>
				<div className="flex items-center gap-3 ">
					<button
						onClick={() => setActiveModal(true)}
						className="px-2 py-3 md:px-5 rounded-lg bg-red-500 hover:bg-red-800 text-white "
					>
						EDIT PLOTNOST
					</button>
					<button
						onClick={() => setActiveModalList(true)}
						className="px-5 py-3 rounded-lg bg-red-500 hover:bg-red-800 text-white "
					>
						EDIT LIST
					</button>
					<button
						onClick={() => setActiveModalGlue(true)}
						className="px-5 py-3 rounded-lg bg-red-500 hover:bg-red-800 text-white "
					>
						EDIT KLEYT
					</button>
				</div>
			</div>

			{activeModal && (
				<div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
						<h2 className="text-xl font-bold uppercase mb-2">
							Editing Plotnost
						</h2>
						<form onSubmit={putAdminPanelBlock}>
							<input
								name="p10"
								value={raw.p10}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="p14"
								value={raw.p14}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="p16"
								value={raw.p16}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="p18"
								value={raw.p18}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="p20"
								value={raw.p20}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="p100"
								value={raw.p100}
								onChange={handleInputChange}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
						</form>
						<div className="flex justify-between">
							<button
								onClick={() => setActiveModal(false)}
								className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
							>
								Close
							</button>
							<button
								type="submit"
								onClick={putAdminPanelBlock}
								className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			)}
			{activeModalList && (
				<div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
						<h2 className="text-xl font-bold uppercase mb-2">Editing Lists</h2>
						<form onSubmit={putAdminPanelList}>
							<input
								name="mm35"
								value={list?.mm35}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="mm37"
								value={list?.mm37}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="mm40"
								value={list?.mm40}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="mm45"
								value={list?.mm45}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="mm48"
								value={list?.mm48}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="mm50"
								value={list?.mm50}
								onChange={handleInputChangeList}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
						</form>
						<div className="flex justify-between">
							<button
								onClick={() => setActiveModalList(false)}
								className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
							>
								Close
							</button>
							<button
								type="submit"
								onClick={putAdminPanelList}
								className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			)}
			{activeModalGlue && (
				<div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
						<h2 className="text-xl font-bold uppercase mb-2">Editing Lists</h2>
						<form onSubmit={putAdminPanelGlue}>
							<input
								name="pena"
								value={glue?.pena}
								onChange={handleInputChangeGlue}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
							<input
								name="basalt"
								value={glue?.basalt}
								onChange={handleInputChangeGlue}
								type="number"
								className="rounded-lg mb-1 w-full"
							/>
						</form>
						<div className="flex justify-between">
							<button
								onClick={() => setActiveModalGlue(false)}
								className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
							>
								Close
							</button>
							<button
								type="submit"
								onClick={putAdminPanelGlue}
								className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			)}
			<table className="w-full border-collapse border border-gray-400 text-left shadow-lg rounded-lg">
				<thead>
					<tr className="bg-gray-200 text-gray-700">
						<th className="px-6 py-3 border border-gray-400 text-sm md:text-base">BLOK NOMI</th>
						<th className="px-6 py-3 border border-gray-400 text-sm md:text-base">BLOK NARXI </th>
					</tr>
				</thead>
				<tbody>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							10 PLOTNOST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks.p10}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							14 PLOTNOST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks?.p14}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							16 PLOTNOST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks?.p16}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							18 PLOTNOST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks?.p18}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							20 PLOTNOST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks?.p20}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							100 PLOTNOST BAZALT
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {blocks?.p100}
						</td>
					</tr>
					<tr className="bg-gray-200 text-gray-700">
						<th className="px-6 py-3 border border-gray-400">LIST QALINLIGI</th>
						<th className="px-6 py-3 border border-gray-400">LIST NARXI </th>
					</tr>

					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.35 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm35}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.37 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm37}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.40 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm40}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.45 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm45}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.48 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm48}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							0.50 sm
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {lists?.mm50}
						</td>
					</tr>
					<tr className="bg-gray-200 text-gray-700">
						<th className="px-6 py-3 border border-gray-400">KLEY NOMI</th>
						<th className="px-6 py-3 border border-gray-400">KLEY NARXI </th>
					</tr>

					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							BAZALT
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {glues?.basalt}
						</td>
					</tr>
					<tr className="hover:bg-gray-100 transition">
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							PENOPLAST
						</td>
						<td className="px-6 py-4 border border-gray-300 text-gray-800 text-sm md:text-base">
							$ {glues?.pena}
						</td>
					</tr>
				</tbody>
			</table>
			<footer>
				<h1 className="p-5 bg-slate-400 sm:text-center">
					© 2025 Sardor. All Rights Reserved.
				</h1>
			</footer>
		</div>
	);
};

export default AdminPanel;
