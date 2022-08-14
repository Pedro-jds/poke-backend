export default class AppError {
	constructor({ error, statusCode }) {
		this.error = error;
		this.statusCode = statusCode;
	}
}