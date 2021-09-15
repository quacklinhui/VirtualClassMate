import './NavBar.css';

function Button(){
    return (
        <ul className = "nav-buttons">
            <button className = "navbar-button-red"><a href = "#">Create Room</a></button>
            <button className = "navbar-button-green"><a href = "#">Join Room</a></button>
        </ul>
            
    )
}

export default Button;