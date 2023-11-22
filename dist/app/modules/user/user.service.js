"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const academicSemster_model_1 = require("../academicSemester/academicSemster.model");
const student_model_1 = require("../student/student.model");
const user_modal_1 = require("./user.modal");
const user_utils_1 = require("./user.utils");
const createStudent = (student, user) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const academicSemester = yield academicSemster_model_1.AcademicSemester.findById(student.academicSemester);
    //set user role
    user.role = 'student';
    //set password
    if (!user.password) {
        user.password = config_1.default.default_user_password;
    }
    const session = yield mongoose_1.default.startSession();
    let userAllData = null;
    try {
        session.startTransaction();
        const id = yield (0, user_utils_1.generateStudentId)(academicSemester);
        user.id = id;
        student.id = id;
        const newStudent = yield student_model_1.Student.create([student], { session });
        if (!newStudent.length) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Felid to create student');
        }
        user.student = (_a = newStudent[0]) === null || _a === void 0 ? void 0 : _a._id;
        const newUser = yield user_modal_1.User.create([user], { session });
        if (!newUser.length) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Felid to create User');
        }
        userAllData = newUser[0];
        yield session.commitTransaction();
        yield session.endSession();
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw error;
    }
    if (userAllData) {
        userAllData = yield user_modal_1.User.findOne({ id: userAllData.id }).populate({
            path: 'student',
            populate: [
                {
                    path: 'academicSemester',
                },
                {
                    path: 'academicDepartment',
                },
                {
                    path: 'academicFaculty',
                },
            ],
        });
    }
    return userAllData;
});
exports.userService = {
    createStudent,
};
