import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { WelcomeJumbo } from "../component/WelcomeJumbo";
import { TopicTable } from "../component/TopicTable";

export const Home = () => (
	<>
		<WelcomeJumbo />
		<TopicTable />
	</>
);
