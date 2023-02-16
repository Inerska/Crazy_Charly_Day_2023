import {useState} from "react";
import {Button, Modal, Text} from "@nextui-org/react";
import ProductsSearchBar from "@/Components/ProductsSearchBar";

export default function ProductsSearchBarModalAsker() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <div>
            <Button auto color="warning" shadow onPress={handler}>
                Rechercher un produit
            </Button>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Recherche un produit
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <ProductsSearchBar/>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
