"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentValidation = void 0;
const zod_1 = require("zod");
const academicDepartmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        academicFaculty: zod_1.z.string({
            required_error: 'Academic Faculty is required',
        }),
    }),
});
exports.academicDepartmentValidation = {
    academicDepartmentZodSchema,
};
