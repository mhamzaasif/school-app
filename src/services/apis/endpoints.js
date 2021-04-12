import { Students, User, Teachers, Admins } from "../mocks";

function endPoint(address, type, guarded, testData) {
    this.address = address;
    this.type = type;
    this.guarded = guarded;
    this.testData = testData;
};

const endPoints = {
    login: new endPoint("/login", 'POST', false, User),
    getAllStudents: new endPoint("/students", "GET", false, Students),
    getAllTeachers: new endPoint("/teachers", "GET", false, Teachers),
    getAllAdmins: new endPoint("/admins", 'GET', false, Admins)
};

export default endPoints;