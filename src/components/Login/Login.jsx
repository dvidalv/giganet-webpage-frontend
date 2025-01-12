import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
	Form,
	Link,
	useSearchParams,
	useActionData,
	useNavigation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Login.css';

function Login() {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const data = useActionData();
	const [showMessage, setShowMessage] = useState(false);
	const error = data?.message || null;
	const success = data?.success || false;

	useEffect(() => {
		if (data) {
			setShowMessage(true);
			const timer = setTimeout(() => {
				if (success) {
					navigate('/');
				}
				setShowMessage(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [data, success, navigate]);

	useEffect(() => {
		setShowMessage(false);
	}, [isLogin]);

	return (
		<div className="login" id="login">
			<div className="login-container">
				<h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
				<Form
					method="post"
					action={`/auth?mode=${isLogin ? 'login' : 'register'}`}
					onSubmit={() => setShowMessage(false)}
				>
					<div className="form-group">
						<label htmlFor="email">Correo Electrónico</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="ejemplo@correo.com"
							autoComplete="username"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Contraseña</label>
						<input
							type="text"
							id="username"
							name="username"
							autoComplete="username"
							style={{ display: 'none' }}
							aria-hidden="true"
							tabIndex={-1}
							defaultValue={document.getElementById('email')?.value || ''}
						/>
						<input
							type="password"
							id="password"
							name="password"
							required
							placeholder="Ingresa tu contraseña"
							autoComplete="current-password"
						/>
					</div>
					{!isLogin && (
						<div className="form-group">
							<label htmlFor="confirmPassword">Confirmar Contraseña</label>
							<input
								type="password"
								id="confirmPassword"
								name="confirmPassword"
								required
								placeholder="Ingresa tu contraseña"
								autoComplete="new-password"
							/>
						</div>
					)}
					<div className="message-container">
						{showMessage && (error || success) && (
							<motion.div
								className={`message ${!success ? 'error' : 'success'}`}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{
									duration: 0.3,
									ease: 'easeOut',
								}}
							>
								<p>{error || (success ? 'Operación exitosa' : '')}</p>
							</motion.div>
						)}
					</div>
					<div className="actions-buttons">
						<Link
							to={`?mode=${isLogin ? 'register' : 'login'}`}
							className="login-button"
						>
							{isLogin ? 'Registrarse' : 'Iniciar Sesión'}
						</Link>
						<button type="submit" className="button" disabled={isSubmitting}>
							{isSubmitting
								? 'Cargando...'
								: isLogin
								? 'Iniciar Sesión'
								: 'Registrarse'}
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Login;
