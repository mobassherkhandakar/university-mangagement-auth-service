"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middlewares/validationRequest"));
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const router = express_1.default.Router();
router.post('/create-department', (0, validationRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidation.academicDepartmentZodSchema), academicDepartment_controller_1.academicDepartmentController.createDepartment);
router.get('/', academicDepartment_controller_1.academicDepartmentController.getAllDepartment);
exports.academicDepartmentRouter = router;
