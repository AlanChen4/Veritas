import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Output.css';

function ChoiceModel() {
    let [models, setModels] = useState('');

    const fetchModels = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/choice-model/`)
            .then(res => {
                setModels(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        fetchModels();
    }, [fetchModels]);

    return (
         <Container fluid className='m-5'>
             <Row>
                <Button onClick={fetchModels}>Get Models</Button>
             </Row>
             <Row className='mt-3'>
                 <h3 className='model-inputs'>
                    {JSON.stringify(models)}
                 </h3>
             </Row>
         </Container>
    );
}

export default ChoiceModel;
