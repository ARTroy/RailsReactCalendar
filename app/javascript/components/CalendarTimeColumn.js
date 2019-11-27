import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

//Was originally less hard code, but honestly the hours of the day don't really change, unfortunatlty.
function CalendarTimeColumn() {
    return (
        <div className="cell time_column" id="day">
            <div className="time_cell" id="time_cell_00">00:00</div>
            <div className="time_cell" id="time_cell_01">01:00</div>
            <div className="time_cell" id="time_cell_02">02:00</div>
            <div className="time_cell" id="time_cell_03">03:00</div>
            <div className="time_cell" id="time_cell_04">04:00</div>
            <div className="time_cell" id="time_cell_05">05:00</div>
            <div className="time_cell" id="time_cell_06">06:00</div>
            <div className="time_cell" id="time_cell_07">07:00</div>
            <div className="time_cell" id="time_cell_08">08:00</div>
            <div className="time_cell" id="time_cell_09">09:00</div>
            <div className="time_cell" id="time_cell_10">10:00</div>
            <div className="time_cell" id="time_cell_10">10:00</div>
            <div className="time_cell" id="time_cell_10">10:00</div>
            <div className="time_cell" id="time_cell_10">10:00</div>
            <div className="time_cell" id="time_cell_11">11:00</div>
            <div className="time_cell" id="time_cell_12">12:00</div>
            <div className="time_cell" id="time_cell_13">13:00</div>
            <div className="time_cell" id="time_cell_14">14:00</div>
            <div className="time_cell" id="time_cell_15">15:00</div>
            <div className="time_cell" id="time_cell_16">16:00</div>
            <div className="time_cell" id="time_cell_17">17:00</div>
            <div className="time_cell" id="time_cell_18">18:00</div>
            <div className="time_cell" id="time_cell_19">19:00</div>
            <div className="time_cell" id="time_cell_21">21:00</div>
            <div className="time_cell" id="time_cell_22">22:00</div>
            <div className="time_cell" id="time_cell_23">23:00</div>
        </div>
    )
}

export default CalendarTimeColumn;