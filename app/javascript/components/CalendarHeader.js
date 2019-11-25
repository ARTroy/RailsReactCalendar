import React from 'react';
import { Link } from 'react-router-dom';
//<i className="fas fa-angle-left"></i></span>
//style={{marginLeft:"initial", paddingRight:"0.9375rem", width:"initial", borderRight:"solid black 3px;"}}>
function CalendarHeader() {
    return (
        <React.Fragment>
            <div className="cell header_cell">       
                <div class="grid-container" style={{border: '2px solid whitesmoke', textAlign:"center", padding:"0px", backgroundColor: 'aliceblue'}}>
                    <div className="grid-x"> 
                    <div className="cell small-4"><i className="fas fa-angle-left"></i></div>
                    <div className="cell small-4"><i className="fas fa-angle-right"></i></div>
                    <div className="cell small-4"><Link to='/menu'><i className="fi-widget"></i></Link></div>
                    </div>
                </div>
            </div>    
            <div className="cell header_cell"><div>Monday</div> </div>
            <div className="cell header_cell"><div>Tuesday</div></div>
            <div className="cell header_cell"><div>Wednesday</div></div>
            <div className="cell header_cell"><div>Thursday</div></div>
            <div className="cell header_cell"><div>Friday</div></div>
            <div className="cell header_cell"><div>Saturday</div></div>
            <div className="cell header_cell"><div>Sunday</div></div> 
        </React.Fragment>
    )
}

const headerStyle = {
    color: '#003366',
}
//<Link to='/'>Home</Link> | <Link to='/about'>About</Link>
export default CalendarHeader;