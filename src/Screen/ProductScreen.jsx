import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
//import products from '../Products';
import { Col, Row, ListGroup, Image, ListGroupItem, Button } from 'react-bootstrap';
import Rating from '../Components/Rating';
import axios from "axios";

function ProductScreen() {
    const { id } = useParams();
    const [product,setproduct]=useState()
    useEffect(()=>{
        async function fetchProduct(){
        try{
          const{data}=await axios.get(`http://127.0.0.1:8000/api/products${id}/`);
          setproduct(data);
      
        }
        catch(error){
        console.error("error fetching products",error)
        }
      
      
      }
      fetchProduct();
      },[id]);
         

    // Handle case where the product is not found
    if (!product) {
        return (
            <div>
                <h2>Product not found</h2>
                <Link to="/" className='btn btn-dark my-3'>
                    Go back
                </Link>
            </div>
        );
    }

    return (
        <>
            <Link to="/" className='btn btn-primary my-3'>
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating 
                                value={product.rating} 
                                text={`${product.numReviews} reviews`} 
                                color={'yellow'} 
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>Price: ${product.price.toFixed(2)}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <p>Description: {product.description}</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                   
                    <ListGroup variant='box'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <strong>{product.price}</strong>
                            </Row>
                           
                       

        <Row>
            <Col>Status:</Col>
            <Col>
            <strong>
                {product.countInStock >1 ? 'In stock':"out of stock"}
            </strong>
            </Col>
        </Row>
        </ListGroupItem> 
        
<ListGroup>
    <Button className='btn btn-primary' type="button">
        Add cart
    </Button>
</ListGroup>


                    </ListGroup>
                   
                </Col>
            </Row>
        </>
    );
}

export default ProductScreen;