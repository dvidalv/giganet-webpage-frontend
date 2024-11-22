import './Contacto.css';
import imagenContacto from '../../assets/images/contact.jpg';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from 'react-router-dom';
const schema = z.object({
	nombre: z.string().min(1, { message: 'El nombre es requerido' }),
	telefono: z.string().min(1, { message: 'El teléfono es requerido' }),
	email: z.string().email({ message: 'El email es requerido' }),
	mensaje: z.string().min(1, { message: 'El mensaje es requerido' }),
});

import 'animate.css';

function Contacto() {
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
		console.log(data);
		reset();
	};

	const errorMessageStyle = {
		color: '#ff0000',
		fontSize: '0.8rem',
		marginTop: '4px',
		fontWeight: '500'
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
						{errors.nombre && <p className="error" style={errorMessageStyle}>{errors.nombre.message}</p>}
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
						{errors.telefono && <p className="error" style={errorMessageStyle}>{errors.telefono.message}</p>}
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
						{errors.email && <p className="error" style={errorMessageStyle}>{errors.email.message}</p>}
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
							{errors.mensaje && <p className="error" style={errorMessageStyle}>{errors.mensaje.message}</p>}
						</div>

						<button 
							type="submit" 
							className={`button ${Object.keys(errors).length > 0 ? 'animate__headShake' : ''}`} 
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
