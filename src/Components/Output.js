import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios_instance from '../axiosApi';
import './Output.css';

function ChoiceModel() {
    let [models, setModels] = useState('');

    const fetchModels = async () => {
        try {
            const response = await axios_instance.get('/api/choice-model/');
            setModels(response.data);
            return response.data;
        } catch (error) {
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    }

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
