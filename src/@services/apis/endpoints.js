import { Students, User, Teachers, Admins } from "../mocks";

function endPoint(address, type, guarded, testData) {
	this.address = address;
	this.type = type;
	this.guarded = guarded;
	this.testData = testData;
}

const endPoints = {
	login: new endPoint("/user/sign-in", "POST", false, User),
	getAllStudents: new endPoint(
		"/super-admin/get-students-list",
		"GET",
		true,
		Students
	),
	getAllTeachers: new endPoint(
		"/super-admin/get-teachers-list",
		"GET",
		true,
		Teachers
	),
	getAllAdmins: new endPoint("/admins", "GET", true, Admins),
	addNewUser: new endPoint("/super-admin/create-users", "POST", true, null),
};

export default endPoints;
