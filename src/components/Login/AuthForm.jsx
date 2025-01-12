import {
	Form,
	useActionData,
	useNavigation,
	useSearchParams,
	Link,
	useNavigate,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import 'animate.css';
import './AuthForm.css';

function AuthForm() {
	const [searchParams] = useSearchParams();
	const isLogin = searchParams.get('mode') === 'login';
	const formRef = useRef(null);
	const response = useActionData();
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	const navigate = useNavigate();

	useEffect(() => {
		if (!response) return;

		const isSuccess = response.isSuccess === true;

		setError(!isSuccess);

		setMessage(
			response.data?.message ||
				(isSuccess
					? isLogin
						? 'Sesión iniciada con éxito'
						: 'Usuario creado con éxito'
					: isLogin
					? 'Error al iniciar sesión'
					: 'Error al crear usuario')
		);

		if (isSuccess) {
			if (response.data?.token) {
				localStorage.setItem('token', response.data.token);
				const expiration = new Date();
				expiration.setHours(expiration.getHours() + 1);
				localStorage.setItem('expiration', expiration.toISOString());
			}

			if (isLogin) {
				const timer = setTimeout(() => {
					navigate('/');
					window.scrollTo(0, 0);
				}, 2000);
				return () => clearTimeout(timer);
			} else {
				const timer = setTimeout(() => {
					navigate('?mode=login');
				}, 2000);
				return () => clearTimeout(timer);
			}
		}
	}, [response, isLogin, navigate]);

	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage('');
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [message]);

	const getMessageStyle = (isError) => ({
		background: isError
			? 'linear-gradient(135deg, #ff4444 0%, #cc0000 100%)'
			: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
		color: 'white',
		padding: '15px 20px',
		borderRadius: '8px',
		boxShadow: isError
			? '0 4px 15px rgba(204, 0, 0, 0.2)'
			: '0 4px 15px rgba(76, 175, 80, 0.2)',
		margin: '20px 0',
		textAlign: 'center',
		fontSize: '16px',
		fontWeight: '500',
	});

	return (
		<div className="login" id="login">
			<div className="login-container">
				<h1>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h1>
				<Form
					ref={formRef}
					method="post"
					className="login-form"
					action={`?mode=${isLogin ? 'login' : 'signup'}`}
				>
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

					<AnimatePresence>
						{message && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 20 }}
								transition={{ duration: 0.5, ease: 'easeOut' }}
								style={getMessageStyle(error)}
							>
								<motion.span
									initial={{ scale: 0.8 }}
									animate={{ scale: 1 }}
									transition={{ delay: 0.2 }}
								>
									{error ? '❌' : '✓'} {message}
								</motion.span>
							</motion.div>
						)}
					</AnimatePresence>

					<div className="actions">
						<Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
							{isLogin ? 'Nuevo Usuario' : 'Iniciar sesión'}
						</Link>
						<button disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Guardar'}
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default AuthForm;
