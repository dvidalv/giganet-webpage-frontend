import { sendContactFormData } from '../api/api';
export async function contactAction({ request }) {
	const formData = await request.formData();
	const data = {
		nombre: formData.get('nombre'),
		telefono: formData.get('telefono'),
		email: formData.get('email'),
		mensaje: formData.get('mensaje'),
		locationStatus: formData.get('locationStatus'),
	};


	const response = await sendContactFormData(data);


	return response;
}
