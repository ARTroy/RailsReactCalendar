import React from 'react';
import { Link } from 'react-router-dom';
//<i className="fas fa-angle-left"></i></span>
//style={{marginLeft:"initial", paddingRight:"0.9375rem", width:"initial", borderRight:"solid black 3px;"}}>
//function CalendarHeader() {

class CalendarHeader extends React.Component {
    render (){
        return <React.Fragment>
            <div className="cell header_cell">       
                <div className="grid-container">
                    <div className="grid-x"> 
                    <div className="cell small-4"><i className="fas fa-angle-left"></i></div>
                    <div className="cell small-4"><i className="fas fa-angle-right"></i></div>
                    <div className="cell small-4"><Link to='/menu'><i className="fi-widget"></i></Link></div>
                    </div>
                </div>
            </div>    
            <div className="cell header_cell"><div>Mon {this.props.week_days[0].getDate()}{this.nth(this.props.week_days[0].getDate())}</div></div>
            <div className="cell header_cell"><div>Tue {this.props.week_days[1].getDate()}{this.nth(this.props.week_days[1].getDate())}</div></div>
            <div className="cell header_cell"><div>Wed {this.props.week_days[2].getDate()}{this.nth(this.props.week_days[2].getDate())}</div></div>
            <div className="cell header_cell"><div>Thu {this.props.week_days[3].getDate()}{this.nth(this.props.week_days[3].getDate())}</div></div>
            <div className="cell header_cell"><div>Fri {this.props.week_days[4].getDate()}{this.nth(this.props.week_days[4].getDate())}</div></div>
            <div className="cell header_cell"><div>Sat {this.props.week_days[5].getDate()}{this.nth(this.props.week_days[5].getDate())}</div></div>
            <div className="cell header_cell"><div>Sun {this.props.week_days[6].getDate()}{this.nth(this.props.week_days[6].getDate())}</div></div> 
        </React.Fragment>
    }

    nth (date) {
        if (date > 3 && date < 21) return 'th';
        switch (date % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
}

const headerStyle = {
    color: '#003366',
}
//<Link to='/'>Home</Link> | <Link to='/about'>About</Link>
export default CalendarHeader;