import {Head, Link} from '@inertiajs/react';
import {Layout} from "@/Layouts/IndexLayout";
import CourtCircuitLogo from "../Components/CourtCirtcuitLogo";
import {useState} from "react";
import {Button, Card, Navbar, Text} from "@nextui-org/react";
import {VariantsSelectorWrapper} from "@/Components/VariantsSelectorWrapper";

export default function Welcome(props) {

    const [variant, setVariant] = useState("static");

    const variants = ["static", "floating", "sticky"];

    return (<>
        <Head title="Court Circuit"/>
        <Layout>
            <Navbar isBordered variant={variant}>
                <Navbar.Brand>
                    <CourtCircuitLogo/>
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
                    {props.auth.user ? (
                        <>
                            <Navbar.Link href="#">{props.auth.user.name}</Navbar.Link>
                            <Navbar.Link href={route('panier')}>Panier</Navbar.Link>
                        </>) : (<>
                            <Navbar.Link color="inherit" href={route('login')}>
                                Login
                            </Navbar.Link>
                        <Link href={route('register')} as="a">
                            <Button color="primary" auto>
                                Register
                            </Button>
                        </Link>
                        </>)

                    }

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
