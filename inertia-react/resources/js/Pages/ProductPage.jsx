import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Container, Image} from "@nextui-org/react";

export default function ProductPage(props) {
    return (<AuthenticatedLayout
        auth={props.auth}
        errors={props.errors}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All products</h2>}>

        <Container className="mt-6 ">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mr-6">
                    <Image
                        src={`/products/${props.product.id}.jpg`}
                        width="400"
                        height="400"
                        objectFit="cover"
                        alt={props.product.description}
                    />
                </div>
                <div>
                    <h1 class="text-5xl font-bold mb-6">{props.product.nom}</h1>
                    <p>{props.product.description}</p>
                    <hr className="mt-2 mb-2"/>
                    <p class="text-3xl font-semibold">{props.product.prix} €/{props.product.poids === 0 ? "kg" : "unité"}</p>
                    <p>Payement sécurisé avec Stripe, Paypal ou Apple Pay</p>
                    <hr className="mt-2 mb-2"/>

                    <input type="number" placeholder="Choisir une quantité" class="rounded borderless mr-5"/>

                    <a href={`/add-to-panier/${props.product.id}`}
                       class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-6 font-2xl">
                        Add to cart
                    </a>

                    <table class="table-auto mt-6">
                        <tbody>
                        <tr>
                            <td class="border px-4 py-2">Cheapest delivery fee</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Symmetrically designed</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </Container>
    </AuthenticatedLayout>)
}
