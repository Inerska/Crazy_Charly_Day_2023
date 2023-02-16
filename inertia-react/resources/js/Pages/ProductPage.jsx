import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Card, Image} from "@nextui-org/react";

export default function ProductPage(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All products</h2>}>

            <Image
                src={`/products/${props.product.id}.jpg`}
                width={140}
                height={140}
                objectFit="cover"
                alt={props.product.description}
            />

            <h1 class="text-2xl">{props.product.nom}</h1>
            <p class="font-semibold">{props.product.description}</p>
            <p class="text-gray-800">{props.product.prix} €/{props.product.poids === 0 ? "kg" : "unité"}</p>


            <a href={`/add-to-panier/${props.product.id}`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to cart
            </a>

        </AuthenticatedLayout>
    )
}
