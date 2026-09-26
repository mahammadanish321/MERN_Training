const errorHandler = (error, req, res, next) => {
    console.error(`[ERROR] ${error.stack || error.message}`);

    if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors || {}).map((e) => e.message);
        return res.status(400).json({
            success: false,
            error: 'Validation Error',
            details: messages,
        })
    }

    if (error.code === 11000) {
        const field = Object.keys(error.keyPattern || {})[0];
        return res.status(409).json({
            success: false,
            error: `Duplicate value for field: ${field}`,
        });
    }
    if (error.name === 'CastError') {
        return res.status(400).json({
            success: false,
            error: `Invalid ${error.path}: ${error.value}`,
        });
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Internal Server Error'
    })

};

module.exports = errorHandler;