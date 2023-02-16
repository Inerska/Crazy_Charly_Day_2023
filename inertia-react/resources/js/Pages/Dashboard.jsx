import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {Button, Card, Grid, Pagination, Row, Text} from "@nextui-org/react";
import {useState} from "react";

export default function Dashboard(props) {

    const [page, setPage] = useState(1);

    return (<AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All products</h2>}
    >
        <Head title="Court Circuit"/>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Grid.Container gap={2} justify="center">
                    {Object.entries(props.produits).map(([key, value]) => {
                        return (<Grid key={key} xs={12} sm={6} md={4} lg={3} xl={2}>
                            <a href={`/product/${value.id}`}>
                                <Card isPressable isHoverable>
                                    <Card.Body css={{p: 0}}>
                                        <Card.Image
                                            src={`/products/${value.id}.jpg`}
                                            width={140}
                                            height={140}
                                            objectFit="cover"
                                            alt={value.description}
                                        />
                                    </Card.Body>
                                    <Card.Footer css={{justifyItems: "flex-start"}}>
                                        <Row wrap="wrap" justify="space-between" align="center">
                                            <Text b>{value.nom}</Text>
                                            <Text css={{color: "$accents7", fontWeight: "$semibold", fontSize: "$sm"}}>
                                                {value.prix} €/{value.poids === 0 ? "kg" : "unité"}
                                            </Text>
                                            <Button auto size="small" type="success">
                                                <a href={`/add-to-panier/${value.id}`}>
                                                    Add to cart
                                                </a>
                                            </Button>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </a>
                        </Grid>)
                    })}
                </Grid.Container>
            </div>
        </div>

        <Pagination total={props.buttons} page={page} onChange={(page) => {
            setPage(page)
            location.href = `/dashboard/${page}`;
        }}/>

    </AuthenticatedLayout>);
}
