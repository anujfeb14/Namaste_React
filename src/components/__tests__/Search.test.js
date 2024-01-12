import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockRestrauntListData.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should search res List for burger",async ()=>{
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);
    const searchBtn = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "Pizza"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    expect(cards.length).toBe(3);
});

it("Should filter the top rated restaurant",async () =>{
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    const topRatedRestrauntButton = screen.getByTestId("topRatedRestraunt")
    fireEvent.click(topRatedRestrauntButton);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
});