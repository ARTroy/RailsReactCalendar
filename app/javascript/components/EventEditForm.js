import React from 'react';

class EventEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.day_event.id,
            title: props.day_event.title,
            description: props.day_event.description,
            start_datetime: props.day_event.start_datetime,
            end_datetime: props.day_event.end_datetime,
        };
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value 
    });

    onChange_date = (e) => { 
        var split = e.target.name.split("_");
        var full_name = split[0] + "_datetime";
        var full_date = new Date(this.state[full_name]);

        if(split[1] == "time") {  
            let split_val = e.target.value.split(":")
            full_date.setHours(split_val[0]);
            full_date.setMinutes(split_val[1]);
        } else if(split[1] == "date") {
            let val = e.target.value;
            let split_val = val.split("-");
            full_date.setFullYear(split_val[0]);
            full_date.setDate(split_val[2]);
            full_date.setMonth(split_val[1]-1);
            
        }
        
        this.setState({ [full_name]: full_date });
    }
  
    onSubmit = (e) => { 
        e.preventDefault();
        this.props.update_event({ 
            id:this.state.id, 
            title:this.state.title, 
            description:this.state.description, 
            start_datetime:this.state.start_datetime, 
            end_datetime:this.state.end_datetime
        }); 
        this.props.close_self();
    }

    rebuild = (day_event) => {
        this.setState({
            id: day_event.id,
            title: day_event.title,
            description: day_event.description,
            start_datetime: day_event.start_datetime,
            end_datetime: day_event.end_datetime,
        });
    }

    render() {
        return (
            <div>
                <h2 id="modalTitle">{ this.state.title }</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="grid-x grid-padding-x">
                        <div className="cell small-12">
                            <label>title</label>
                            <input name="title" 
                                type="text" 
                                value={ this.state.title } 
                                onChange={ this.onChange }
                            />
                        </div>
                        <div className="cell small-12">
                            <label>description</label> 
                            <input name="description" 
                                type="text" 
                                value={ this.state.description } 
                                onChange={ this.onChange }
                            /> 
                        </div>
                        <div className="cell small-12">
                            <label>start datetime</label>
                        </div>
                        <div className="cell small-6">
                            <input name="start_date" 
                                type="date" 
                                style={ {display: 'inline-block'} } 
                                onChange={ this.onChange_date }
                                value={ this.state.start_datetime.getFullYear() + "-" + (this.state.start_datetime.getMonth() + 1).toString().padStart(2, '0') + "-" + this.state.start_datetime.getDate().toString().padStart(2, '0') }
                            />
                        </div>
                        <div className="cell small-6">
                            <input name="start_time" 
                                type="time" 
                                style={ {display: 'inline-block'} } 
                                onChange={ this.onChange_date }
                                value={ this.state.start_datetime.getHours().toString().padStart(2, '0') + ":" + this.state.start_datetime.getMinutes().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-12">
                            <label>end datetime</label>
                        </div> 
                        <div className="cell small-6">
                            <input name="end_date" 
                                type="date" 
                                style={ {display: 'inline-block'} } 
                                onChange={ this.onChange_date }
                                value={ this.state.end_datetime.getFullYear() + "-" + (this.state.end_datetime.getMonth() + 1).toString().padStart(2, '0') + "-" + this.state.end_datetime.getDate().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-6">
                            <input name="end_time" 
                                type="time" 
                                style={ {display: 'inline-block'} } 
                                onChange={ this.onChange_date }
                                value={ this.state.end_datetime.getHours().toString().padStart(2, '0') + ":" + this.state.end_datetime.getMinutes().toString().padStart(2, '0') }/>
                        </div>
                        <div className="cell small-12">
                            <button type="submit" className="button">Update</button>
                        </div> 
                    </div>
                </form>
            </div>
        );
    }        
}
export default EventEditForm;