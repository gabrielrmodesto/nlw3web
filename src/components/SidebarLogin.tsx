import React from "react";
import logo from "../images/Logotipo.svg";
import "../styles/components/sidebar-login.css"

function SidebarLogin() {
	return (
		<aside>
			<header>
				<img src={logo} alt="Happy simbolo" className="logotipo" />
			</header>
			<footer>
				<strong>Cruzeiro</strong>
				<span>São Paulo</span>
			</footer>
		</aside>
	);
}

export default SidebarLogin;
