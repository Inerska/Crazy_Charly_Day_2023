import { Combobox } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function ProductsSearchBar() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('/allProducts')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.nom.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <Combobox value={selectedProduct} onChange={setSelectedProduct} as="div" class="flex flex-col">
                <Combobox.Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Rechercher un produit"
                />
                <Combobox.Options class="flex-row">
                    {filteredProducts.map((product) => (
                        <Combobox.Option
                            key={product.id}
                            value={product.nom}
                            as="a"
                            href={`/product/${product.id}`}
                        >
                            <div class="flex items-center bg-white p-2">
                                <img
                                    src={`/products/${product.id}.jpg`}
                                    alt={product.description}
                                    height="50"
                                    width="50"
                                />
                                <span class="text-1xl font-semibold bg-white">{product.nom}</span>
                            </div>
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </>
    );
}
