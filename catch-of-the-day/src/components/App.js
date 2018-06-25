import React from "react";
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="You are cool!" display={true}/>
                    <Header tagline="I shouldn't be displayed!" display={false}/>
                    <Header tagline="This should be displayed." display={true}/>
                </div>
                <Inventory />
                <Order />
            </div>
        );
    }
}

export default App;