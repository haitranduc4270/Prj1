import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header.js';
const axios = require('axios');

class MainPage extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            name : ""
        };
        this.loadData();
            
    }
    
    async loadData () {
        /*
        fetch('http://localhost:4000/Students')
            .then (data => {
                return data.json();
            })
            .then(data => {
                let i = 0;
                console.log(data);
                this.setState({
                        name :  data[i].name ,
                        MSSV :  data[i].MSSV,
                        Lop : data[i].Lop,
                        Khoa :  data[i].Khoa,
                        Email : data[i].Email,
                        SDT : data[i].SDT,
                        Anh :  data[i].Anh,
                        DiaChi :  data[i].DiaChi,
                    })  
            })
            
        */

        axios.get('http://localhost:4000/Students')
            .then(function (response) {
                return response;
            })
            .then(data => {
                console.log(data.data);
                this.setState ({
                    name : data.data[1].name
                })
            })
            .catch(err => {
                console.log(err);
            })
            
    
    }

    render () {
        return (
            <Header name = {this.state.name} />
            
        )}


    
}


ReactDOM.render (
    <MainPage />,
    document.getElementById('root')
);

