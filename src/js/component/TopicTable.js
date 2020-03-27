import React, { useState, useEffect, useContext } from "react";
import "../../styles/TopicTable.scss";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function TopicTable() {
	const [games, setGames] = useState([null]);
	const { store, actions } = useContext(Context);
	const [singleGameName, setSingleGameName] = useState(null);
	const [singleGamePic, setSingleGamePic] = useState();

	return (
		<div className="container tableContainer">
			<h2 className="text-center">Games Of The Day</h2>
			<div className="row row-cols-3 row-cols-md-4 gameCardBox">
				{!store.games
					? "Loading..."
					: store.games.map((t, index) => (
							<Link to="/single" key={index}>
								<div className="col mb-4" key={index}>
									<div
										className="card gameCard text-center"
										onClick={() => {
											setSingleGameName(t.name);
											setSingleGamePic(t.background_image);
											console.log({ singleGameName });
											console.log({ singleGamePic });
										}}>
										<img src={t.background_image} className="card-img-top gameCardImg" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{t.name}</h5>
										</div>
									</div>
								</div>
							</Link>
					  ))}
			</div>
		</div>
	);
}
