import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from '@inertiajs/react';
import {Card, Grid, Pagination, Row, Text} from "@nextui-org/react";
import {useState} from "react";

export default function Dashboard(props) {

    const [page, setPage] = useState(1);

    return (<AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All products</h2>}
    >
        <Head title="Court Circuit"/>
        <div className="flex flex-col items-center">
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Grid.Container gap={2} justify="center" css={{width: "100%"}}>
                        {Object.entries(props.produits).map(([key, value]) => {
                            return (<Grid key={key} xs={12} sm={6} md={3} lg={3} xl={2}>
                                <Card isPressable isHoverable>
                                    <a href={`/product/${value.id}`}>
                                        <Card.Body css={{p: 0, width: 200}}>
                                            <Card.Image
                                                src={`/products/${value.id}.jpg`}
                                                width={140}
                                                height={140}
                                                objectFit="cover"
                                                alt={value.description}
                                            />
                                        </Card.Body>
                                        <Card.Footer css={{justifyItems: "flex-start"}}>
                                            <Row wrap="wrap" justify="space-between" align="center"
                                                 class="">
                                                <div className="mb-6 w-full">
                                                    <Text b>{value.nom}</Text>
                                                    <Text css={{
                                                        color: "$accents7",
                                                        fontWeight: "$semibold",
                                                        fontSize: "$sm"
                                                    }}>
                                                        {value.prix} €/{value.poids === 0 ? "kg" : "unité"}
                                                    </Text>
                                                </div>

                                                <a href={`/add-to-panier/${value.id}`} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg font-semibold">
                                                    Add to cart
                                                </a>
                                            </Row>
                                        </Card.Footer>
                                    </a>
                                </Card>
                            </Grid>)
                        })}
                    </Grid.Container>
                </div>
            </div>

            <Pagination total={props.buttons} page={page} onChange={(page) => {
                setPage(page)

                router.visit(`/dashboard/${page}`,

                    {
                        preserveScroll: true,
                        only: ['produits'],
                        preserveState: true,
                    })


            }}/>
        </div>


    </AuthenticatedLayout>);
}
