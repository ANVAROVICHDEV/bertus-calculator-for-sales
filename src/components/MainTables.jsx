import { Dropdown } from "flowbite-react";
import React from "react";

const MainTables = () => {
	return (
		<div className="sm:flex-col flex  w-[100%] md:w-[70%] border border-red-500 mx-auto my-5">
			<div className="w-full md:w-1/5 flex md:flex-col justify-between">
				<div className="w-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300 text-center text-sm font-medium bg-gray-100 text-gray-700">
					ТУРИ
				</div>
				<div className="w-[50%] md:w-auto flex justify-center items-center px-6 py-3 border border-gray-300">
					<Dropdown
						style={{ background: "#122830" }}
						// label={type.toUpperCase()}
						label={"DEVOR"}
						dismissOnClick={true}
					>
						<Dropdown.Item>DEVOR</Dropdown.Item>
						<Dropdown.Item>TOM</Dropdown.Item>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default MainTables;
