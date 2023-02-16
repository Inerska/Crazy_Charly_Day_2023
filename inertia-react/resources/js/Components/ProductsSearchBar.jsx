import {Combobox} from "@headlessui/react";
import {useState} from "react";

export default function ProductsSearchBar() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [query, setQuery] = useState('');

    return <>
        <Combobox value={selectedProduct} onChange={setSelectedProduct}>
            <Combobox.Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit"
            />
        </Combobox>
    </>
}
