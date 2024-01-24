
const errorHandler = (err, req, res, next) => {
    
    const statusCode = err.statusCode || 500;
    
    const errorResponse = {
    error: {
    message: err.message || "Error interno del servidor",
    code: err.code || "internal_error",
    },
    };

    // Enviar respuesta de error en formato JSON
    res.status(statusCode).json(errorResponse);
    
    };

    module.exports = errorHandler;