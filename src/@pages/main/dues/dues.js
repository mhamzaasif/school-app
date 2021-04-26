import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { LoadingWrapper } from "../../../@components";
import { apis } from "../../../@services";
const Dues = () => {
	const [dues, setDues] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	useEffect(() => {
		const getAllDues = async () => {
			try {
				setIsLoading(true);
				const { data } = await apis.getAllDues();
				setDues(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setError(error);
			}
		};
		getAllDues();
	}, []);

	return (
		<LoadingWrapper loading={isLoading} error={error}>
			<Container fluid>
				<h1 className="text-center">Dues</h1>
				<Table responsive="sm" bordered size="lg">
					<thead>
						<tr>
							<th>ID</th>
							<th>Amount</th>
							<th>User Id</th>
							<th>Due Date</th>
							<th>Fine</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{dues.map((due, index) => (
							<tr
								key={index}
								className={`text-white ${
									due.isPaid
										? "bg-success"
										: new Date() < new Date(due.dueDate)
										? "text-dark"
										: "bg-danger"
								}`}
							>
								<td>{due.id}</td>
								<td>{due.amount}</td>
								<td>{due.userId}</td>
								<td>{due.dueDate}</td>
								<td>{due.fine}</td>
								<td>{due.isPaid ? "Paid" : "Not Paid"}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</LoadingWrapper>
		// <LoadingWrapper>Dues page</LoadingWrapper>
	);
};

export default Dues;
