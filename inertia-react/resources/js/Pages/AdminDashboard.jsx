export default function AdminDashboard(props) {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    );
}
