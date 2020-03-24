import React from "react";
import "../../styles/Profile.scss";

export function Profile() {
	return (
		<>
			<div className="container profileContainer">
				<div className="card mb-3 profileBox" styles="max-width: 540px;">
					<div className="row no-gutters">
						<div className="col-md-4">
							<img
								src="https://cdn.vox-cdn.com/thumbor/zSmSMeiUygGb3OYcT_SgAvNXfmA=/0x47:836x604/1400x1400/filters:focal(0x47:836x604):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/29978345/1912315_10152052414208719_1792210132_n.0.png"
								className="card-img profilePic"
								alt="..."
							/>
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
			<div className="container profileContainer">
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
