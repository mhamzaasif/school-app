import React, { useEffect, useState } from "react";
import { LoadingWrapper } from "../../../@components";
import { getAllPayments } from "./api";

const Payments = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		getAllPayments({ setLoading, setError });
	}, []);

	return <LoadingWrapper loading={loading} error={error}>
		This is some text
	</LoadingWrapper>
};

export default Payments;
