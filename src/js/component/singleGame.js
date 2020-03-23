import React from "react";
import "../../styles/SingleGame.scss";

import Article from "./disqus";

export function SingleGame() {
	return (
		<>
			<div className="container text-center">
				<div className="card singleGameCard">
					<img src="https://via.placeholder.com/300x500" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">League of legends</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">Last updated 3 mins ago</p>
					</div>
				</div>
				<p>
					Be quiet! And the hat. Shes a witch! Shut up! Well, we did do the nose. You cant expect to wield
					supreme power just cause some watery tart threw a sword at you! Oh, ow! Shut up! I dont want to talk
					to you no more, you empty-headed animal food trough water! I fart in your general direction! Your
					mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt
					you a second time! I dont want to talk to you no more, you empty-headed animal food trough water! I
					fart in your general direction! Your mother was a hamster and your father smelt of elderberries! Now
					leave before I am forced to taunt you a second time! You dont vote for kings. Why do you think that
					she is a witch? Shut up! The Knights Who Say Ni demand a sacrifice! I have to push the pram a lot.
					Ni! Ni! Ni! Ni! Ah, now we see the violence inherent in the system! Camelot! Ni! Ni! Ni! Ni! Look,
					my liege! Shut up! Look, my liege!
				</p>
				<Article />
			</div>
		</>
	);
}
