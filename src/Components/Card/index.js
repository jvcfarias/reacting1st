import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [value, setValue] = useState(0)

    function Add () {
        setValue(value + 1)
    }

    function Remove (){
        setValue(value - 1)
    }

    return (
        <div class="card">
            <div class="card-header">
                Meu primeiro Card 
            </div>
            <div className="card-body">
            <Button 
                className="btn btn-success"
                onClick={Add}
            >
                Adicionar
            </Button>
            <Button 
                className="btn btn-danger"
                onClick={Remove}
            >
                Remover
            </Button>
            <p>{value}</p>
            </div>
        </div>
    )
}

export default Card; 