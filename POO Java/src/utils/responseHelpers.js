exports.successResponse = (data) => ({ success: true, data });
exports.errorResponse = (message, field) => ({ success: false, error: { message, field } }); 