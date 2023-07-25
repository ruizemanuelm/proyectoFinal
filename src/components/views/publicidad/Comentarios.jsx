import React from 'react';
import { Form, Container, Button, Card, Col, Row} from 'react-bootstrap';

const Comentarios = () => {
    return (
        <>
        <Container className='mb-5'>
        <hr />
        <Row>
        <Col className='mt-5' md={2}>
            <Card>
            <Card.Img
            src='https://junkmailimages.blob.core.windows.net/large/fa685acad3d44539bd3d0ffba39c913b.jpg'
            ></Card.Img>
            </Card>
        </Col>
        <Col >
        <Form className='mt-5'>
            <Form.Group>
                <Form.Control as="textarea" placeholder='Escribe un comentario' rows={3}></Form.Control>
            </Form.Group>
            <Button className='mt-3' variant='primary' type='submit'>Enviar comentario</Button>
        </Form>  
        </Col>
        </Row>
        </Container>
        </>
    );
};

export default Comentarios;