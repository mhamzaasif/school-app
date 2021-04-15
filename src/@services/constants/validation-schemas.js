import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, "Too Short Username")
		.max(50, "Too Long Username")
		.required("Username is required"),
	password: Yup.string()
		.required("Password is required")
		.min(7, "Password Too Short"),
});

export const addUserValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Name too short")
		.max(20, "Name too long")
		.required("Name is required"),
	email: Yup.string()
		.email("Enter a valid Email")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be 8 characters long")
		.required("Password is requried"),
	phoneNumber: Yup.string()
		.matches(/^(\+|\d)[0-9]{7,16}$/, "Enter a valid Phone number")
		.required("Phone number is required"),
	role: Yup.mixed()
		.required("Role is required")
		.oneOf(["Admin", "Teacher", "Student"])
		.notOneOf([""], "Please Select a valid role"),
});
