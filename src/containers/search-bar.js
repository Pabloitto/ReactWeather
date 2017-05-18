import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBarContainer extends Component {

    constructor(props){
        super(props);
        this.state = {term : ''};
    }

    render() {
        return (
            <div>
               <form className="input-group" onSubmit={this.onSubmitTerm.bind(this)}>
                    <input 
                        required
                        value={this.state.term} 
                        type="text"
                        placeholder="Type the term"
                        className="form-control"
                        onChange={this.onTermChange.bind(this)}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form> 
            </div>
        );
    }

    onSubmitTerm(event){
        event.preventDefault();
        const term = this.state.term;
        this.props.fetchWeather(term);
        this.setState({term : ''});
    }


    onTermChange(event){
        const term = event.target.value;
        this.setState({term});
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);