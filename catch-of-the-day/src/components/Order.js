import React from 'react';

class Order extends React.Component {
    render(){
        const orderIds = Object.keys(this.props.order);
        return(
            <div className="order-wrap">
                {orderIds}
            </div>
        );
    }
}

export default Order;