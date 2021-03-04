function Error(props) {
    return <footer className='error'>
    <div className='error-mess'>
        <h2>Pare che qualcosa sia andato storto...</h2>
        <p>La richiesta dei dati relativi ai prodotti non è andata a buon fine :/</p>
    </div>
    <div className='error-buttons'>
        <button onClick={() => props.setRetry()}>Riprova</button>
        <br/>
        <br/>
        <button className='close'>Chiudi</button>
    </div>
</footer>
}

export default Error;