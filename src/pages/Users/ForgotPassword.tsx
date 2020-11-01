import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import SidebarLogin from "../../components/SidebarLogin";
import "../../styles/pages/Users/forgotPassword.css";

function ForgotPassword() {
	return (
		<div className="form-dashboard">
			<SidebarLogin />
			<main>
				<div className="backButton">
					<Link to="/login">
						<FiArrowLeft size={26} color="#15C3D6" />
					</Link>
				</div>
				<form>
					<h3>Esqueci a senha</h3>
					<span>
						Sua redefinição de senha será enviada para o e-mail
						cadastrado.
					</span>
					<div className="input-block">
						<label htmlFor="emailRecupera">E-mail</label>
						<input
							type="email"
							id="emailRecupera"
							required
							className="input-form"
						/>
					</div>
					<button type="submit" className="enterButton">
						Enviar
					</button>
				</form>
			</main>
		</div>
	);
}

export default ForgotPassword;
