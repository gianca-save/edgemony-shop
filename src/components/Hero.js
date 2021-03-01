function Hero(props) {
    return <div className="Hero">
    <div className="Hero_title">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        </div>
        <img src={props.cover} alt=""/>
    </div>
}

export default Hero;