import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default function NosProduits(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/allProducts")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    const geoProps = products.map((product) => {
        return {
            nom: product.nom,
            position: [product.latitude, product.longitude],
        };
    });

    const position = [48.725288, 2.572804];

    return (
        <div style={{height: "100vh", width: "100%"}}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}
                            style={{height: "100vh", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geoProps.map((geoProp, index) => (
                    <Marker key={index} position={geoProp.position}>
                        <Popup>{geoProp.nom}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
