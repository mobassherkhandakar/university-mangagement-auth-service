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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFacultyId = exports.generateStudentId = void 0;
const user_modal_1 = require("./user.modal");
const lastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_modal_1.User.findOne({
        role: 'student',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent.id.substring(4) : undefined;
});
const generateStudentId = (academicSemester) => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield lastStudentId()) || (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementalId = `${academicSemester === null || academicSemester === void 0 ? void 0 : academicSemester.year.substring(2)}${academicSemester === null || academicSemester === void 0 ? void 0 : academicSemester.code}${incrementalId}`;
    return incrementalId;
});
exports.generateStudentId = generateStudentId;
const getLastFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastFaculty = yield user_modal_1.User.findOne({
        role: 'Faculty',
    }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastFaculty === null || lastFaculty === void 0 ? void 0 : lastFaculty.id) ? lastFaculty.id.substring(2) : undefined;
});
const generateFacultyId = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentId = (yield getLastFacultyId()) || (0).toString().padStart(5, '0');
    let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0');
    incrementalId = `F-${incrementalId}`;
    return incrementalId;
});
exports.generateFacultyId = generateFacultyId;
