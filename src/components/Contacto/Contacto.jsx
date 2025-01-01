import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'animate.css';
import { motion, AnimatePresence } from 'framer-motion';

import './Contacto.css';
import Header from '../Header/Header';
import { sendContactFormData } from '../../api/api';
import { getLocation } from '../../api/api';

import { IoLocationOutline } from 'react-icons/io5';

const schema = z.object({
	nombre: z.string().min(1, { message: 'El nombre es requerido' }),
	telefono: z.string().min(1, { message: 'El teléfono es requerido' }),
	email: z.string().email({ message: 'El email es requerido' }),
	mensaje: z.string().min(1, { message: 'El mensaje es requerido' }),
});

function Contacto() {
	const [locationStatus, setLocationStatus] = useState('');
	const [successMessage, setSuccessMessage] = useState(false);
	let timeOutId;
	// console.log(locationStatus);

	useEffect(() => {
		window.scrollTo(0, 0);
		getLocation(setLocationStatus);
	}, []);

	const {
		register,
		handleSubmit,
		setError, // eslint-disable-line
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data) => {
		data.location = locationStatus;
		sendContactFormData(data);
		setSuccessMessage(true);
		timeOutId = setTimeout(() => {
			setSuccessMessage(false);
		}, 5000);

		reset();
	};

	useEffect(() => {
		return () => clearTimeout(timeOutId);
	}, [timeOutId]);

	const errorMessageStyle = {
		color: '#ff0000',
		fontSize: '0.8rem',
		marginTop: '4px',
		fontWeight: '500',
	};

	return (
		<>
			<Header />
			<div className="form_container">
				<div className="contact" id="contact">
					<h1>Contacto</h1>
					<Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<label htmlFor="nombre">Nombre</label>
							<input
								type="text"
								id="nombre"
								name="nombre"
								placeholder="Ingrese su nombre"
								required
								{...register('nombre')}
							/>
							{errors.nombre && (
								<p className="error" style={errorMessageStyle}>
									{errors.nombre.message}
								</p>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="telefono">Teléfono</label>
							<input
								type="tel"
								id="telefono"
								name="telefono"
								placeholder="Ingrese su teléfono"
								required
								{...register('telefono')}
							/>
							{errors.telefono && (
								<p className="error" style={errorMessageStyle}>
									{errors.telefono.message}
								</p>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Ingrese su email"
								required
								{...register('email')}
							/>
							{errors.email && (
								<p className="error" style={errorMessageStyle}>
									{errors.email.message}
								</p>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="mensaje">Mensaje</label>
							<textarea
								id="mensaje"
								name="mensaje"
								placeholder="Escriba su mensaje"
								rows="4"
								required
								{...register('mensaje')}
							></textarea>
							{errors.mensaje && (
								<p className="error" style={errorMessageStyle}>
									{errors.mensaje.message}
								</p>
							)}
						</div>
						<AnimatePresence>
							{successMessage && (
								<motion.div
									className="success-message"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{
										duration: 0.3,
										ease: 'easeOut',
									}}
								>
									¡Mensaje enviado con éxito!
								</motion.div>
							)}
						</AnimatePresence>
						{locationStatus && (
							<p
								style={{
									color: locationStatus.includes('Error') ? 'red' : 'green',
									marginBottom: '10px',
									textAlign: 'center',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									<IoLocationOutline color="#fff" className='footer-icon' style={{ marginRight: '10px', fontSize: '1.5rem', color: 'green' }} />
								</div>
								<p style={{ color: locationStatus.includes('Error') ? 'red' : 'green', fontSize: '1rem' }}>{locationStatus}</p>
							</p>
						)}

						<button
							type="submit"
							className={`button ${
								Object.keys(errors).length > 0 ? 'animate__headShake' : ''
							}`}
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
						</button>
					</Form>
				</div>
			</div>
		</>
	);
}

export default Contacto;
