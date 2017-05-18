import React from 'react';
import ChartComponent from './chart-component';
import MapComponent from './map-component';

const renderChart = (data, color, height = 120, width = 180) => {
    return <ChartComponent {...{
                height: height,
                width: width,
                data: data,
                color: color
            }}/>
}

export default ({ row }) => {

    return <tr>
            <td>
                <MapComponent lat={row.lat} lon={row.lon}/>
            </td>
            <td>
                {renderChart(row.temperature,'red')}
            </td>
            <td>
                {renderChart(row.pressure,'green')}
            </td>
            <td>
                {renderChart(row.humidity,'blue')}
            </td>
        </tr>
};