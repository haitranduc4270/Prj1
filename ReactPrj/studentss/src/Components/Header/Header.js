import React from 'react';
import './style.css'


class Header extends React.Component {
    render () {
        return (
            <header>
                <button id="Student-list-button">
                        Student List
                </button>

                <button id="Add-Student-button">
                        Add Student
                </button>

                <div className="Search">
                    <input type="text" name="" id="Search" title="Search" /> 
                    <button id="Search-by-MSSV-button">
                        Search by MSSV
                    </button>
                </div>
            </header>


        )
    }

}

export default  Header;