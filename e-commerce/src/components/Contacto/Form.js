import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Form.css';
import { useFormik } from 'formik';

function FormContact() {
    const form = useFormik({
        initialValues: {
            mail: '',
            name: '',
            consulta: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (<Form className='form' onSubmit={form.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" name="mail" placeholder='Ingresa tu email' onChange={form.handleChange} />
        </Form.Group>
        <Form.Group>
        <Form.Label/>
            <Form.Control type="text" name="name" placeholder='Ingresa tu nombre' onChange={form.handleChange} />
        </Form.Group>
        <Form.Label/>
        <Form.Control  as="textarea" rows={3} name="consulta" placeholder='Hola, quiero...' onChange={form.handleChange} />
        <Form.Group controlId="formBasicCheckbox">
        <Form.Label/>
            <Form.Check id=""type="checkbox" label='Quiero recibir novedades y promociones' />
        </Form.Group>
        <Button variant="outline-light" type='submit'>Submit</Button>
    </Form>
    )

}

export default FormContact;