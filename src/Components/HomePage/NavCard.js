import {Link} from 'react-router-dom'

function NavCard (props) {
    return (
        <Link class="buttonCard" to={"/"+props.nav}>
            <div class="navCard">
                <h2>{props.audience}</h2>
            </div>
        </Link>
    )
}
export default NavCard