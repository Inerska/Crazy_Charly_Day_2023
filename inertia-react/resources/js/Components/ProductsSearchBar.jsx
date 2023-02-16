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
                <Combobox.Options class="bg-red-500 flex-row">
                    {filteredProducts.map((product) => (
                        <Combobox.Option
                            key={product.id}
                            value={product.nom}
                            as="a"
                            href={`/product/${product.id}`}
                        >
                            {product.nom}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </>
    );
}
