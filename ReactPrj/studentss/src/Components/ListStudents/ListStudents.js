import React from "react";
import './ListStudents.css'
import Student from "./Student";
import TableHeader from "./TableHeader"; 
import TableFooter from "./TableFooter";

const axios = require('axios');



class ListStudents extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            studentsInfo : [],
            isUpdate : true,
        }
        
        this.loadData();
    }

    render () {
        
        return (
            <div>
                <h1>Danh Sách Sinh Viên</h1>
                <div className = "students-list">
                    <table className = "students-list__table">
                        <tbody>
                            <TableHeader></TableHeader>
                            {this.renderTableStudent()}
                            <TableFooter updateFromChild = {this.updateFromChild} ></TableFooter>
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
         
       
    }

    loadData = () => {
        axios.get('http://localhost:4000/Students')
            .then(response => {
                this.setState ({
                    studentsInfo : response.data,
                    
                })
                return response;
            })
            .catch(err => {
                console.log(err);
            })
        
        
    }

    
    renderTableStudent = () => {
        
        return this.state.studentsInfo.map((student) => {
            return (
                <Student key = {student.ID} student = {student} updateFromChild = {this.updateFromChild}  ></Student>
            )
        })
    }

    

    updateFromChild = () => {
        
        axios.get('http://localhost:4000/Students')
            .then(response => {
                this.setState ({
                    studentsInfo : response.data,
                    
                })
                return response;
            })
            .catch(err => {
                console.log(err);
            })
            
    }


    
    
   
}

export default ListStudents;