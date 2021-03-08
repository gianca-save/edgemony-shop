import { useState } from "react";

function Error(props) {
    
    const [ click, setClick ] = useState(false);

    return <footer className={!click ? 'error' : 'is-hidden'}>
    <div className='error-mess'>
        <h2>Pare che qualcosa sia andato storto...</h2>
        <p>La richiesta dei dati relativi ai prodotti non è andata a buon fine :/</p>
    </div>
    <div className='error-buttons'>
        <button onClick={() => props.setRetry()}>Riprova</button>
        <br/>
        <br/>
        <button className='close' onClick={()=>setClick(true)}>Chiudi</button>
    </div>
</footer>
}

export default Error;