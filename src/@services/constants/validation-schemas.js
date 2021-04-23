import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
	email: Yup.string().email().required("Username is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password Too Short"),
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
		.min(6, "Password must be 6 characters long")
		.required("Password is requried"),
	phoneNumber: Yup.string()
		.matches(/^(\+|\d)[0-9]{7,16}$/, "Enter a valid Phone number")
		.required("Phone number is required"),
	role: Yup.mixed()
		.required("Role is required")
		.oneOf(["admin", "teacher", "student"])
		.notOneOf([""], "Please Select a valid role"),
});
