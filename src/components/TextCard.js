function TextCard(props) {
    return (
        <div className="Text-card">
            <h1>{props.contents[props.i].title}</h1>
            <p>{props.contents[props.i].text}</p>
        </div>
    )
}

export default TextCard;