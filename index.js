import React from 'react'
import ReactDOM from 'react-dom'

const HeadingComponent = () =>{
    return <h1>Heading</h1>
}

const MainComponent = () => (
    <div id='main'>
        {HeadingComponent()}
        <HeadingComponent></HeadingComponent>
        <HeadingComponent/>
        <div className='child'>
            <h2>This is react functional component.</h2>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent/>)