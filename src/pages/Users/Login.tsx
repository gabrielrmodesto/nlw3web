import React from "react";
import { Link } from "react-router-dom";
import SidebarLogin from "../../components/SidebarLogin";

import "../../styles/pages/Users/login.css";

function Login() {
	return (
		<div className="form-dashboard">
			<SidebarLogin />
			<main>
				<form>
					<h3 className="title-form">Fazer login</h3>
					<div className="input-block">
						<label htmlFor="emailUser" className="title-input">
							E-mail
						</label>
						<input
							type="email"
							id="emailUser"
							className="input-form"
						/>
					</div>
					<div className="input-block">
						<label htmlFor="passwordUser" className="title-input">
							Senha
						</label>
						<input
							type="password"
							id="passwordUser"
							className="input-form"
						/>
					</div>
					<div className="span-form">
						<div className="check">
							<label htmlFor="checkRemember" className="container">Lembrar-me
								<input type="checkbox" id="checkRemember" />
								<span className="checkmark"></span>
							</label>
						</div>

						<Link to="/forgetpassword" id="forgetpassword">Esqueci minha senha</Link>
					</div>
					<button type="submit" className="enterButton">
						Entrar
					</button>
				</form>
			</main>
		</div>
	);
}

export default Login;
