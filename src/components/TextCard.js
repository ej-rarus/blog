function TextCard(props) {
    return (
        <div className="Text-card">
            <div className="Text-card-title">{props.contents[props.i].title}</div>
            <div className="Text-card-text">{props.contents[props.i].text.split("\n").map(
                (txt) => (
                    <>
                        {txt}
                        <br />
                    </>
                ))}</div>
        </div>
    )
}

export default TextCard;