
export default function Card(props) {
    

    return(
        <div className="card-box">
        <div className="card-img">
            <h4 className="card-title">{props.title}</h4>
            <img src={props.url}  alt={props.alt}/>
        </div>
        <div className="card-text">
            <p>{props.alt === null ?  props.desc2 : props.alt}</p> </div>
    </div>
    )
}