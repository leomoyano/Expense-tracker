import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction);
      }


    return (
        <div>
            <h3>Agrega una nueva transacción</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Ingrese la transacción</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escriba aqui..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Monto <br />
                    (Negativo - egreso, Positivo + ingreso)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ingresa monto..." />
                </div>
                <button className="btn">Agregar transacción</button>
            </form>
        </div>
    )
}
