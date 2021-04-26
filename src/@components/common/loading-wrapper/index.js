import React from "react";
import { Spinner, Alert } from "react-bootstrap";

const LoadingWrapper = ({ loading, error, children }) => {
	return (
		<div className="col-12 h-100 p-3 m-0 text-left">
			{loading ? (
				<div className="h-100 row justify-content-center align-items-center p-5">
					<Spinner variant="secondary" animation="border" />
				</div>
			) : error ? (
				<div className="h-100 row justify-content-center align-items-center p-5">
					<Alert className="px-5" variant="danger">
						<Alert.Heading>Something went wrong!</Alert.Heading>
						{error}
					</Alert>
				</div>
			) : (
				children
			)}
		</div>
	);
};

export default LoadingWrapper;
