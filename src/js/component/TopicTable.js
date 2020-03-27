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
			<div className="card-deck homeCardDeck justify-content-center">
				{!store.games
					? "Loading..."
					: store.games.map((t, index) => (
							<div className="card gameCard" key={index}>
								<img src="/" className="card-img gameCard" alt="..." />
								<div className="card-img-overlay">
									<h5 className="card-title">{t.name}</h5>
									<p className="card-text text-right">
										<button type="button" className="btn btn-success favbtn ripple constantHover">
											<i className="fas fa-plus" />
										</button>
									</p>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
}
