import {Head, Link} from '@inertiajs/react';
import {Layout} from "@/Layouts/IndexLayout";
import CourtCircuitLogo from "../Components/CourtCirtcuitLogo";
import {useState} from "react";
import {Button, Card, Col, Collapse, Container, Grid, Navbar, Text} from "@nextui-org/react";
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


                <Navbar.Content>
                    {props.auth.user ? (<>
                        <Navbar.Link href="#">{props.auth.user.name}</Navbar.Link>
                        <Navbar.Link href="/panier">Panier</Navbar.Link>
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

            <Container>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card css={{w: "100%"}}>
                            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        Nos producteurs / productrices
                                    </Text>
                                    <Text h4 color="white">
                                        Respect des crit??res sociaux et ??cologiques
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Image
                                src="https://courtcircuitnancy.fr/wp-content/uploads/2021/06/%C2%A9Olivier-Braizat_CCircuit_F5920-1536x1024.jpg"
                                width="100%"
                                height={340}
                                objectFit="full"
                                class="blur-sm"
                                alt="Card image background"
                            />
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card css={{w: "100%"}}>
                            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        Les produits
                                    </Text>
                                    <Text h4 color="white">
                                        L'??picerie propose en vrac un maximum de produits locaux (moins de 200 kms),
                                        issus de l'agriculture biologique autant que possible.
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Image
                                src="https://courtcircuitnancy.fr/wp-content/uploads/2021/05/%C2%A9Olivier-Braizat_CCircuit_F5932.jpg"
                                width="100%"
                                height={340}
                                objectFit="full"
                                class="blur-sm"
                                alt="Card image background"
                            />
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} md={4} lg={3} xl={2}>
                        <Card css={{w: "100%"}}>
                            <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                                <Col>
                                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                        La r??duction des d??chets
                                    </Text>
                                    <Text h4 color="white">
                                        Comment ??a fonctionne pour vous ?
                                    </Text>
                                </Col>
                            </Card.Header>
                            <Card.Image
                                src="https://courtcircuitnancy.fr/wp-content/uploads/2021/06/%C2%A9Olivier-Braizat_CCircuit_F5998-768x512.jpg"
                                width="100%"
                                height={340}
                                objectFit="cover"
                                class="blur-sm"
                                alt="Card image background"
                            />
                        </Card>
                    </Grid>
                </Grid.Container>


                <Collapse.Group>
                    <Collapse title="Option A">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Option B">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Option C">
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Container>

        </Layout>
    </>);
}
