import React, {Fragment} from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {

    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();

    goToStore = e => {
        // 1. stop the form from submitting
        e.preventDefault();
        // 2. get the text from that input
        const storeName = this.myInput.value.value;
        // 3. change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        console.log(this);
        return (
            <Fragment>
                {/*This is a StorePicker fragment*/}
                <form action="" className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type="submit">Visit Store →</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;