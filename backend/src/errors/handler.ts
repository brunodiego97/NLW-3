import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';


interface ValidationsErros {
  [key: string]: string[];
}


const errorHandler: ErrorRequestHandler = (error, request, response, next) => {

  if (error instanceof ValidationError) {
    let errors: ValidationsErros = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validatioin fails', errors })

  };


  console.error(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;