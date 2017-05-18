import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherItem from '../components/weather-item-component';

class WeatherList extends Component {

    render() {
        return (
            <div className="margin-top-20">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderWeather(this.props.weather || [])}
                    </tbody>
                </table>
            </div>
        );
    }

    renderWeather(weather){
        return weather.map((row,index)=> <WeatherItem key={index} row={row}/>);
    }

}

export default connect(({ weather }) => {
    return { weather }; 
})(WeatherList);