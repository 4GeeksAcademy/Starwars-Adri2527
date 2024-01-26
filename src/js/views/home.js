import React from "react";
import { Cards } from "../component/cards";

import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="mt-5">

			<h1 className="py-5">Characters</h1>
			<div className="d-flex flex-wrap justify-content-around mx-4">
				<Cards
					name="Willy"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL60nDFTtZoNrif00LhpIPN3YDRCEiuQ6wQ56NSht60mbz3ylRUMr7PO3pwg&s"
					gender="Male"
					hairColor="Brown"
					eyesColor="Blue"
				/>
				
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
