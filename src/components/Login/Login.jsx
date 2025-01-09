import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí irá la lógica de autenticación
		console.log('Datos del formulario:', formData);
		navigate('/');
	};

	return (
		<div className="login" id="login">
			<div className="login-container">
				<h1>Iniciar Sesión</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="email">Correo Electrónico</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
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
							value={formData.password}
							onChange={handleChange}
							required
							placeholder="Ingresa tu contraseña"
						/>
					</div>

					<button type="submit" className="login-button">
						Iniciar Sesión
					</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
