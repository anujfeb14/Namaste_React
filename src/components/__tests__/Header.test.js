import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header component with a login button",() =>{
    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name : "Login"});
    expect(loginButton).toBeInTheDocument();
})

it("Should change login button to logout button on click", () =>{
    render(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});