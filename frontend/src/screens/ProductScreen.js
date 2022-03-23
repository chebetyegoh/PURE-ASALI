import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import  Rating from '../components/Rating'
import products from '../products'






function ProductScreen() {
    const id = useParams()
    console.log(id)
    const product = products.find((p) => p._id === id)
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductScreen
