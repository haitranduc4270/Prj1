import React from 'react';
import ReactDOM, { render } from 'react-dom';

class FancyBorder extends React.Component {
    render () {
        return (
            <div className = {'FancyBorder FancyBorder-' + this.props.color}>
                {props.children}
            </div>
        )

    }
}

class WelcomeDialog extends React.Component {
    render () {
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                Welcome
                </h1>
                <p className="Dialog-message">
                Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
        )
    }
}






ReactDOM.render(
    <WelcomeDialog  />,
    document.getElementById('root')
); 