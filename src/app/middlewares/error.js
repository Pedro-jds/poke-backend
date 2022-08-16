import AppError from '../errors/AppError';

export default async (err, req, res, next) => {
	if (err instanceof AppError) {
		const { error, statusCode } = err;

		return res.status(statusCode).json({ error });
	}

	
	if(err.code==="ER_DUP_ENTRY"){
		return res.status(400).json({error:"Duplicate entry"})
	}
	
	console.log(err)
	return res.status(500).json({ error: 'Internal Server Error' });
};