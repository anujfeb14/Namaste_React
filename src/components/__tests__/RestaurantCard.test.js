import { render, screen, waitFor } from "@testing-library/react"
import RestaurantCard, { withOpenLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/RestaurantCardMock.json"
import "@testing-library/jest-dom"


it("Should render Restaurant Card component with props data", ()=>{
    render(<RestaurantCard resData = {MOCK_DATA}/>);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})

it("Should call render the HOC", async () =>{
    const mockComponent = jest.fn(() => null)
    const Component = withOpenLabel(mockComponent);

    render(<Component/>)
    await waitFor(() => expect(mockComponent).toBeCalled());
})