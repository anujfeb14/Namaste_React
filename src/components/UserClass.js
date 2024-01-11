import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default",
                avatar_url: "adfkajskf"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const jsonData = await data.json();
        this.setState({
            userInfo: jsonData
        });

        this.timer = setInterval(()=>{
            console.log("Hello World!");
        }, 1000);
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Called when we unmount the component/ when we move away from the page")
    }

    render() {

        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h2 className="text-lg font-bold"> {loggedInUser}</h2>}  
                    </UserContext.Consumer>
                </div>
                <h3>Location: {location}</h3>
                <h3>Contact: @anujfeb14</h3>
            </div>
        );
    }
}

export default UserClass;