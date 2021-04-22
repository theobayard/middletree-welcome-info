function NavCard (props) {


    return (
        <a class="buttonCard" href={"/"+props.nav}>
            <div class="navCard">
                <h2>{props.audience}</h2>
            </div>
        </a>
    )
}
export default NavCard