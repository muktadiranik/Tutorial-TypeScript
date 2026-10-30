import { studentName as name, studentAge as age } from './student.ts';

function displayInfo(): void {
    console.log(`Student Name: ${name}, Student Age: ${age}`);
}

displayInfo();

import * as studentModule from './student.ts';

function displayInfo2(): void {
    console.log(`Student Name: ${studentModule.studentName}, Student Age: ${studentModule.studentAge}`);
}

displayInfo2();