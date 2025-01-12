
export function getTokenExpirationDate() {
	const storedExpirationDate = localStorage.getItem('expirationDate');
	const expirationDate = new Date(storedExpirationDate);
	const now = new Date();
	const duration = expirationDate.getTime() - now.getTime();
	return duration;
}

export function getAuthToken() {
	const token = localStorage.getItem('token');

	if (!token) {
		return null;
	}

	const duration = getTokenExpirationDate();
	if (duration < 0) {
		return 'expired';
	}
	return token;
}

export function tokenLoader() {
	const token = getAuthToken();
	return token;
}

