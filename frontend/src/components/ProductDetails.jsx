import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams(); // Obtiene el ID de la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`); // API del backend
                setProduct(response.data); // Actualiza el estado con los detalles del producto
            } catch (error) {
                console.error("Error al obtener los detalles del producto:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <p>Cargando...</p>; // Mientras carga, muestra un mensaje

    return (
        <div>
            <h1>Detalles del Producto</h1>
            <p><strong>Nombre:</strong> {product.name}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Descripción:</strong> {product.description}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
        </div>
    );
};

export default ProductDetails;