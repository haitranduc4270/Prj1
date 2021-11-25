import React from 'react';
import ReactDOM from 'react-dom';


class NumberList extends React.Component {
    

    render () {
    
        return (
          <ul>
            {this.props.numbers.map((number) => {
                return (
                    <li key = {number.toString()}>
                        {number}
                    </li>
                );
            })}
          </ul>  
        );
    }

}


let numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
    <NumberList numbers = {numbers}/>,
    document.getElementById('root')
);


