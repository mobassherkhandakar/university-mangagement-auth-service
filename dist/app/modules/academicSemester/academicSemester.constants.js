"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterFilterAbleFields = exports.academicSemesterSearchAbleField = exports.academicSemesterCode = exports.academicSemesterTitleCodeMapper = exports.academicSemesterTitle = exports.academicSemesterMonth = void 0;
exports.academicSemesterMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
exports.academicSemesterTitle = [
    'Autumn',
    'Summer',
    'Fall',
];
exports.academicSemesterTitleCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
};
exports.academicSemesterCode = ['01', '02', '03'];
exports.academicSemesterSearchAbleField = ['title', 'code'];
exports.academicSemesterFilterAbleFields = [
    'searchTerm',
    'title',
    'code',
    'year',
];
