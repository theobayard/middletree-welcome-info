function InfoSection(props) {

    let list = props.list? (
        <ul>
            {props.list.map((el) => (
                    <li>{el}</li>
                ))
            }
        </ul>
    ) : null;

    return(
        <div class="infoSection">
            <h2>{props.title}</h2>
            <hr/>
            <div class="infoBody">
                {props.bodyText}
                {list}
            </div>
        </div>
    )
}
export default InfoSection