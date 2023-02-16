import {Link, Head} from '@inertiajs/react';
import {Layout} from "@/Layouts/IndexLayout";
import CourtCircuitLogo from "../Components/CourtCirtcuitLogo";
import {useState} from "react";
import {Button, Card, Navbar, Text} from "@nextui-org/react";
import {VariantsSelectorWrapper} from "@/Components/VariantsSelectorWrapper";
import {ThemeProvider} from "next-themes";

export default function Welcome(props) {

    const [variant, setVariant] = useState("static");

    const variants = ["static", "floating", "sticky"];

    return (<>
        <Head title="Court Circuit"/>
        <Layout>
            <Navbar isBordered variant={variant}>
                <Navbar.Brand>
                    <CourtCircuitLogo />
                    <Text b color="inherit" hideIn="xs">
                        Court Circuit
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">Customers</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            <VariantsSelectorWrapper>
                <Card css={{maxW: "50%"}}>
                    <Card.Body css={{pt: "$8", px: "$8"}}>
                    </Card.Body>
                </Card>
            </VariantsSelectorWrapper>
        </Layout>
    </>);
}
