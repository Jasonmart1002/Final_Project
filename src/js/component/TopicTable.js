import React, { useState, useEffect, useContext } from "react";
import "../../styles/TopicTable.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function TopicTable() {
	const [games, setGames] = useState([null]);
	const { store, actions } = useContext(Context);

	return (
		<div className="container tableContainer">
			<h2 className="text-center">Games Of The Day</h2>
			<div className="row row-cols-1 row-cols-md-4">
				{!store.games
					? "Loading..."
					: store.games.map((t, index) => (
							<div className="col mb-4" key={index}>
								<div className="card">
									<img src={t.background_image} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{t.name}</h5>
										<p className="card-text">
											This is a longer card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</p>
									</div>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
}
