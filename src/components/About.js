import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <div className="">
            <h1>About</h1>
            <h2>This is Namaste React about page.</h2>
            {/* <User name={"Anuj"} location={"Prayagraj"}/> */}
            <UserClass name={"Anuj Prajapati"} location={"Prayagraj"}/>
        </div>
    )
}

export default About;