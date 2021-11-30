import React from "react";
import './ListStudents.css'
import axios from "axios";

class TableFooter extends React.Component {
    render () {
        return (
                <tr key = "Footer">
                <td  key = "1" className = "students-list__table__name-column" >
                        <input type = "text" className = "students-list__table__name-input-column--on-add" id = "nameInput" defaultValue = "Tran Duc Hai"></input>
                </td>
                <td  key = "2" className = "students-list__table__MSSV-column" >
                        <input type = "number" className = "students-list__table__MSSV-input-column--on-add" id = "MSSVInput" defaultValue = "20194270"></input>
                </td>
                <td  key = "3" className = "students-list__table__class-column" >
                        <input type = "text" className = "students-list__table__class-input-column--on-add" id = "classInput"></input>
                </td>
                <td  key = "4" className = "students-list__table__khoa-column" >
                        <input type = "text" className = "students-list__table__khoa-input-column--on-add" id = "khoaInput"></input>
                </td>
                <td  key = "5" className = "students-list__table__email-column" >
                        <input type = "email" className = "students-list__table__email-input-column--on-add" id = "emailInput"></input>
                </td>
                <td  key = "6" className = "students-list__table__sdt-column" >
                        <input type = "number" className = "students-list__table__sdt-input-column--on-add" id = "sdtInput"></input>
                </td>
                <td  key = "7" className = "students-list__table__address-column" >
                        <input type = "text" className = "students-list__table__address-input-column--on-add" id = "addressInput"></input>
                </td>
                <td  key = "8" className = "students-list__table__Input-column" ><button onClick = {this.onClickSubmitAdd}>Thêm</button></td>
                
                </tr>
        )
        
    }

    onClickSubmitAdd = async () => {
        let data = {
            name : document.getElementById("nameInput").value ,
            MSSV : document.getElementById("MSSVInput").value ,
            class : document.getElementById("classInput").value ,
            khoa : document.getElementById("khoaInput").value,
            email : document.getElementById("emailInput").value ,
            SDT : document.getElementById("sdtInput").value ,
            address : document.getElementById("addressInput").value,
            
        }

        if(data.name === "" || data.MSSV === "" ) {
                alert('Your name and your MSSV can\'t be null ')
        }else {
            try{
                let res = await axios.post('http://localhost:4000/Students', data);
                console.log(res);
                this.props.updateFromChild();
            }catch (err){
                alert("some thing wrong please try again");
                console.log(err);
            }
        }
        
        
    
    }


    

}

export default TableFooter;