import React from "react";
import { Cards } from "../component/cards";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="mt-5">
			
			<h1  className="py-5">Characters</h1>
			
			<div className="d-flex flex-wrap justify-content-around mx-4">
				<Cards />
			</div>

		</div>
		<div className="mt-5">

			<h1 className="py-5">Planets</h1>

			<div className="d-flex flex-wrap justify-content-around ">
				<Cards />
			
			
			</div>

		</div>

	</div>
);
