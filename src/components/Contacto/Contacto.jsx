import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getLocation } from '../../api/api';
import { MdLocationOn } from 'react-icons/md';
import { motion, AnimatePresence } from 'motion/react';
import 'animate.css/animate.css';
import './Contacto.css';

function Contacto() {
	const formRef = useRef(null);
	const response = useActionData();
	const [locationStatus, setLocationStatus] = useState('');
	const [error, setError] = useState(false);
	const [message, setMessage] = useState('');

	useEffect(() => {
		getLocation(setLocationStatus);
	}, []);

	useEffect(() => {
		if (!response) return;

		const isSuccess = response.success === true;
		setError(!isSuccess);

		if (isSuccess) {
			formRef.current.reset();
			setLocationStatus('');
		}

		setMessage(
			response.data?.message ||
				(isSuccess ? 'Mensaje enviado con éxito' : 'Error al enviar el mensaje')
		);
	}, [response]);

	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage('');
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [message]);

	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

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
		<div className="contacto" id="contacto">
			<div className="contacto-container">
				<h1>Contacto</h1>
				<Form ref={formRef} method="post" className="contacto-form">
					<div className="form-group">
						<input
							type="text"
							id="nombre"
							name="nombre"
							required
							placeholder="Tu nombre"
							className='input'
							minLength="3"
							maxLength="20"
						/>
						<label htmlFor="nombre" className='label'>Nombre</label>
					</div>

					<div className="form-group">
						<input
							type="tel"
							id="telefono"
							name="telefono"
							required
							placeholder="Tu teléfono (ej: 809-000-0000)"
							className='input'
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			
						/>
						<label htmlFor="telefono" className='label'>Teléfono</label>
					</div>

					<div className="form-group">
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="Tu email (ej: ejemplo@gmail.com)"
							className='input'
							pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
						/>
						<label htmlFor="email" className='label'>Email</label>
					</div>

					<div className="form-group">
						<textarea
							id="mensaje"
							name="mensaje"
							required
							placeholder="Tu mensaje"
							rows="5"
							className='input'
						></textarea>
						<label htmlFor="mensaje" className='label'>Mensaje</label>
					</div>

					<input type="hidden" name="locationStatus" value={locationStatus} />

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

					<button type="submit" className="contacto-button">
						{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
					</button>

					<p className="location-status">
						<MdLocationOn className="location-icon" />
						{locationStatus || 'Obteniendo ubicación...'}
					</p>
				</Form>
			</div>
		</div>
	);
}

export default Contacto;
