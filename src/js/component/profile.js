import React from "react";
import "../../styles/Profile.scss";

export function Profile() {
	return (
		<>
			<div className="container">
				<div className="card mb-3 profileBox" styles="max-width: 540px;">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src="https://via.placeholder.com/300" className="card-img profilePic" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">UserName</h5>
								<p className="card-text">
									User about me Be quiet! And the hat. Shes a witch! Shut up! Well, we did do the
									nose. You cant expect to wield supreme power just cause some watery tart threw a
									sword at you! Oh, ow! Shut up!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<h2 className="text-center">Favorite Games</h2>
				<div className="card-deck profileCardDeck">
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">League Of Legends</h5>
						</div>
					</div>
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">Team Fortress 2</h5>
						</div>
					</div>
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">Sonic</h5>
						</div>
					</div>
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">Grand Theft Auto</h5>
						</div>
					</div>
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">Resident Evil</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
