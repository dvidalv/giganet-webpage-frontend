import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
	const error = useRouteError();

	let title = 'Ha ocurrido un error!';
	let message = 'Algo salió mal';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'No encontrado!';
		message = 'No se pudo encontrar el recurso o página';
	}

	return (
		<div className="error-page">
			<div className="error-content">
				<h1>{title}</h1>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default ErrorPage;
