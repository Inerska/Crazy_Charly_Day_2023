import {Button, Card, Container, Text} from "@nextui-org/react";

export default function AdminDashboard(props) {
    return (<>
            <Container>
                <h1>Admin Dashboard</h1>
                <Card>
                    <Card.Header>
                        <Text>User Count</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text>{props.userCount}</Text>
                    </Card.Body>
                </Card>

                <a href="/dashboard">Return to main dashboard</a>
            </Container>
        </>);
}
