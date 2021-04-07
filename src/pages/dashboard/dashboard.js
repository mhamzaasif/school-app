import React, { useContext } from 'react';
import { userContext } from "../../context/user-context";
function Dashboard() {
    const { user } = useContext(userContext);
    return (
        <div>
            Welcome to the dashboard!
            {JSON.stringify(user)}
        </div>
    );
}

export default Dashboard;
