
import { Form } from 'react-router-dom';
import './Login.css';

function Login() {


	return (
		<div className="login" id="login">
			<div className="login-container">
				<h1>Iniciar Sesión</h1>
				<Form>
					<div className="form-group">
						<label htmlFor="email">Correo Electrónico</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="ejemplo@correo.com"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Contraseña</label>
						<input
							type="password"
							id="password"
							name="password"
							required
							placeholder="Ingresa tu contraseña"
						/>
					</div>

					<button type="submit" className="login-button">
						Iniciar Sesión
					</button>
				</Form>
			</div>
		</div>
	);
}

export default Login;
