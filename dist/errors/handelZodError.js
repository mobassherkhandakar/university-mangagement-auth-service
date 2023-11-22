"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const errors = error.issues.map(issus => {
        return {
            path: issus === null || issus === void 0 ? void 0 : issus.path[issus.path.length - 1],
            message: issus === null || issus === void 0 ? void 0 : issus.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Zod Validation Error',
        errorMessages: errors,
    };
};
exports.default = handleZodError;
