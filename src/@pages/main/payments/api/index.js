export const getAllPayments = async ({ setLoading, setError }) => {
	try {
		// SOME CODE
		// throw "dkjsbf";
	} catch (e) {
		await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
		setError("An error ocurred while getting data");
	} finally {
		setLoading(false);
	}
};
