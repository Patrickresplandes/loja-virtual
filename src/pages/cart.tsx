import React, {useContext} from 'react'
import  {useRouter} from 'next/router'
import { CartContext } from './cart-context'

const Cart: React.FC = () => {
    const {state, dispath} = useContext(CartContext);
    const router = useRouter();

    //função para remover do carrinho
    const removeItem = (itemid:string) => {
        dispath({type:'REMOVE_ITEM',itemid})
    }

    //função para finalizar a compra
    const checkout = () => {
        dispath({type:'CLEAR_CART'}); //limpa o carrinho
        router.push('/'); //manda pra pagina inicial    
    }

    return (

        <div>
            <h1>Carrinho de Compra</h1>
            {state.items.map((item) => (
                <div key={item.id}>
                    <p>{item.nome}</p>
                    <p>Preço:{item.valor}</p>
                    <button onClick={() => removeItem(item.id)}>Remover</button>
        </div>
            ))}
            <button onClick={checkout}>Finalizar Compra</button>
        </div>
    );
}

export default Cart;