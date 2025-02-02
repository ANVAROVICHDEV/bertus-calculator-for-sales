import axios from "axios";

const BaseUrl = "https://calculator-api.iteachpython.uz";

const MoneyOPerations = {
	//GET MAIN PAGE
	async mainOperations(
		type,
		thickness,
		block_column,
		under_list_column,
		upper_list_column,
	) {
		const response = await axios.get(`${BaseUrl}/calculate`, {
			params: {
				type_: type,
				thickness,
				block_column,
				under_list_column,
				upper_list_column,
			},
			headers: {
				Accept: "application/json",
			},
		});
		return response.data;
	},
	async currensiesGet() {
		const response = await axios.get(`${BaseUrl}/get_currency`, {
			headers: {
				Accept: "application/json",
			},
		});

		return response.data;
	},
	async currensiesPost(raw) {
		const response = await axios.put(
			`${BaseUrl}/update_currency`,
			{
				price: raw,
			},
			{
				headers: {
					Accept: "application/json",
				},
			},
		);
		return response.data;
	},
	async adminPanelGet() {
		const response = await axios.get(`${BaseUrl}/IWHWIJHECwiuy74hvscdjcn`, {
			headers: {
				Accept: "application/json",
			},
		});

		return response.data;
	},

	async adminPanelPutBlocks(raw) {
		const response = await axios.put(
			`${BaseUrl}/HjnJhjhHnMNHGjhKjuGFrdfg`,
			raw,
			{
				headers: {
					Accept: "application/json",
				},
			},
		);
		return response.data;
	},
	async adminPanelPutLists(list) {
		const response = await axios.put(
			`${BaseUrl}/VHfgcjvkjhuYGftYDHFJknHI`,
			list,
			{
				headers: {
					Accept: "application/json",
				},
			},
		);
		return response.data;
	},

	async adminPanelPutGlue(glue) {
		const response = await axios.put(
			`${BaseUrl}/jBNJBBWHDBJhbnkjb7HBHGvh`,
			glue,
			{
				headers: {
					Accept: "application/json",
				},
			},
		);
		return response.data;
	},
};

export default MoneyOPerations;
