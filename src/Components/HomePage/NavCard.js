import CONFIG from '../../Config'

function NavCard (props) {
    const baseURLPath = CONFIG.baseURLPath
    return (
        <a class="buttonCard" href={baseURLPath+props.nav}>
            <div class="navCard">
                <h2>{props.audience}</h2>
            </div>
        </a>
    )
}
export default NavCard