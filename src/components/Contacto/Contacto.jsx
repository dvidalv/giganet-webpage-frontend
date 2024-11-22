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

function Contacto() {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Header />
			<div className="form_container">
				<div className="contact" id="contact">
					<h2>Contacto</h2>
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
					</div>

					<button type="submit" className="button">
						Enviar Mensaje
					</button>
					</Form>
				</div>
			</div>
		</>
	);
}

export default Contacto;
