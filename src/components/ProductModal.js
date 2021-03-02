import { useState } from 'react';

function ProductModal(props) {
    const [ img, setImg ] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

     setImg(props.image);
     setTitle(props.title);
     setDescription(props.description);
     setPrice(props.price);


    return (<div className='ProductModal'>
        <img src={img} alt=""/>
        <h2><strong>{title}</strong></h2>
        <h3>{description}</h3>
        <footer>
            <h2>{price}</h2>
        </footer>
    </div>)
}

export default ProductModal;