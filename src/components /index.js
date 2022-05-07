import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push("/login")
    }

    return(
        <div>
            <h1>Welcome</h1>

            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Home;