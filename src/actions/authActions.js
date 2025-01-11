import { sendLoginFormData } from '../api/api';

export async function authActions({ request }) {
	const formData = await request.formData();
	const data = {
		email: formData.get('email'),
		password: formData.get('password'),
		confirmPassword: formData.get('confirmPassword'),
	};

	if (data.password !== data.confirmPassword) {
		return {
			success: false,
			data: {
				message: 'Las contraseñas no coinciden',
			},
		};
	}

	const response = await sendLoginFormData(data);
	return response;
}
