import { Link, Outlet } from "react-router-dom";
// import { useParams } from 'react-router-dom';

const About = () => {
    // const { id } = useParams();
    // console.log("CastList ~ id", id);
    return ( <div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit unde asperiores, placeat iste ea reprehenderit voluptatum consequatur. Necessitatibus autem doloribus quo possimus dignissimos quisquam corrupti, porro eius, delectus nemo eos harum cumque, sunt omnis nihil aliquam non magnam quos nostrum!</h1>

        <Link to="/movie/test">Test</Link>
        {/* <Link to="reviwers">Reviwers</Link> */}
        
        <Outlet />
    </div> );
}
 
export default About;