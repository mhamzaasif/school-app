import { apis } from "../../../../@services";

export const getStudents = async ({ setStudents, setIsLoading, setError }) => {
	try {
		setIsLoading(true);
		const { data } = await apis.getAllStudents();
		setStudents(data);
	} catch (error) {
		setError(error);
	} finally {
		setIsLoading(false);
	}
};
