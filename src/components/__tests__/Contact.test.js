import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us page test cases", () => {
    test("Should load contact us component", () =>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load the button inside contact component", ()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input field inside contact component", () =>{
        render(<Contact/>);
        const input = screen.getByPlaceholderText("Message");
        expect(input).toBeInTheDocument();
    });
    
    test("Should load two input box in contact component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
    
    test("Should load two input box in contact component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).not.toBe(3);
    });
});
