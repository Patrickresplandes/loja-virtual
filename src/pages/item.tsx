import React, {useContext} from 'react'
import { useRouter } from 'next/router'
import { CartContext } from './cart-context'

type ItemProps = {
    item: {
        id:string;
        nome:string;
        valor:number;
    }
}

const Item: React.FC<ItemProps> = ({item}) => {
    const {dispath} = useContext(CartContext);
    const router = useRouter();

    return (
        <div>
            <h1>{item.nome}</h1>
            <p>Preço:{item.valor}</p>
            <button onClick={() => {
                dispath({type:'ADD_ITEM', item})
                router.push('/cart');
            }}>Adicionar ao carrinho</button>
        </div>
    );
}

export default Item;