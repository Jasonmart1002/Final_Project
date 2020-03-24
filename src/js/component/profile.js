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
					<div className="card gameCard hover">
						<img
							src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends.jpg"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay" />
					</div>
					<div className="card gameCard hover">
						<img
							src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Tf2_standalonebox.jpg/220px-Tf2_standalonebox.jpg"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay" />
					</div>
					<div className="card gameCard hover">
						<img
							src="https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/ac1_nakedbox_mobile_164648.jpg"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay" />
					</div>
					<div className="card gameCard hover">
						<img
							src="https://store-images.s-microsoft.com/image/apps.13587.70644597693904836.cde9dd08-509f-4054-8190-24728e59ad5e.b122adbd-e812-41be-bc09-4dd7b0078036?mode=scale&q=90&h=300&w=200"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay" />
					</div>
					<div className="card gameCard hover">
						<img
							src="https://www.residentevil.com/_asset/images/re2-panel.jpg"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay" />
					</div>
				</div>
			</div>
		</>
	);
}
