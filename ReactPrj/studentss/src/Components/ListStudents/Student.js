import React from "react";
import './ListStudents.css'
const axios = require('axios');


class Student extends React.Component{
    
    constructor (props) {
        super(props);
        
        this.state = {
            defaultDisplay : this.createDefaultDisplay(),
            modifierDisplay :  this.createModiffierDissplay(), 
            isModifier : false,
        };
        
    }

    render () {
        if(this.state.isModifier){
            return this.state.modifierDisplay;
            
        }else {
            return this.createDefaultDisplay(); // để gọi hàm cập nhật lại giá trị hiển thị vì this.props đã thay đổi
        }
    }


    onClickModifier = () => {
        console.log("Modifier " + this.props.student.MSSV);
        this.setState ({
            isModifier : true,
        })
    }

    onClickDetail = () => {
        console.log("Detail " + this.props.student.MSSV);
    }

    onClickDelete = async () => {
        try{
            let res = await axios.delete('http://localhost:4000/Students/'+ this.props.student.MSSV)
            this.props.updateFromChild();
        }catch (err) {
            console.log(err);
        }
        
            
    }

    onClicCancerModifier = () => {
        this.setState ({
            isModifier : false,
        })
    }

    onClickSubmitModifier = async () => {
        let data = {
            name : document.getElementById("nameModifier").value || this.props.student.name,
            MSSV : document.getElementById("MSSVModifier").value || this.props.student.MSSV,
            class : document.getElementById("classModifier").value || this.props.student.class,
            khoa : document.getElementById("khoaModifier").value || this.props.student.khoa,
            email : document.getElementById("emailModifier").value || this.props.student.email,
            SDT : document.getElementById("sdtModifier").value || this.props.student.SDT,
            image : this.props.student.image,
            address : document.getElementById("addressModifier").value || this.props.student.address,
            
        }
        try {
            let res = await axios.put('http://localhost:4000/Students/' + this.props.student.MSSV, data);
            this.props.updateFromChild();
            this.setState ({
                isModifier : false,
                
            })
        } catch (err ) {
            console.log(err);
        }

        
    
    }


    createDefaultDisplay = () => {
        return (
                <tr >
                    <td  key = "1" className = "students-list__table__name-column">{this.props.student.name}</td>
                    <td  key = "2" className = "students-list__table__MSSV-column">{this.props.student.MSSV}</td>
                    <td  key = "3" className = "students-list__table__class-column">{this.props.student.class}</td>
                    <td  key = "4" className = "students-list__table__khoa-column">{this.props.student.khoa}</td>
                    <td  key = "5" className = "students-list__table__email-column">{this.props.student.email}</td>
                    <td  key = "6" className = "students-list__table__sdt-column">{this.props.student.SDT}</td>
                    <td  key = "7" className = "students-list__table__address-column">{this.props.student.address}</td>
                    <td  key = "8" className = "students-list__table__modifier-column"><button onClick = {this.onClickModifier}>Sửa đổi</button></td>
                    <td  key = "9" className = "students-list__table__delete-column"><button onClick = {this.onClickDelete} >Xóa</button></td>
                    <td  key = "10"className = "students-list__table__detail-column"><button onClick = {this.onClickDetail}>Chi tiết</button></td>
                </tr>
            )
        
    }

    createModiffierDissplay = () => {
        return (
            <tr >
                <td  key = "1" className = "students-list__table__name-column" >
                    <input type = "text" className = "students-list__table__name-input-column--on-modifier" id = "nameModifier"></input>
                </td>
                <td  key = "2" className = "students-list__table__MSSV-column" >
                    <input type = "number" className = "students-list__table__MSSV-input-column--on-modifier" id = "MSSVModifier"></input>
                </td>
                <td  key = "3" className = "students-list__table__class-column" >
                    <input type = "text" className = "students-list__table__class-input-column--on-modifier" id = "classModifier"></input>
                </td>
                <td  key = "4" className = "students-list__table__khoa-column" >
                    <input type = "text" className = "students-list__table__khoa-input-column--on-modifier" id = "khoaModifier"></input>
                </td>
                <td  key = "5" className = "students-list__table__email-column" >
                    <input type = "email" className = "students-list__table__email-input-column--on-modifier" id = "emailModifier"></input>
                </td>
                <td  key = "6" className = "students-list__table__sdt-column" >
                    <input type = "number" className = "students-list__table__sdt-input-column--on-modifier" id = "sdtModifier"></input>
                </td>
                <td  key = "7" className = "students-list__table__address-column" >
                    <input type = "text" className = "students-list__table__address-input-column--on-modifier" id = "addressModifier"></input>
                </td>
                <td  key = "8" className = "students-list__table__modifier-column" ><button onClick = {this.onClickSubmitModifier}>Lưu</button></td>
                <td  key = "9" className = "students-list__table__delete-column" ><button onClick = {this.onClicCancerModifier} >Hủy</button></td>
                <td  key = "10"className = "students-list__table__detail-column" ></td>
            </tr>
        )

    }

}

export default Student;