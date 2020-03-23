import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Profile } from "../component/profile";

import "../../styles/demo.scss";

export const Demo = () => {
	return <Profile />;
};
