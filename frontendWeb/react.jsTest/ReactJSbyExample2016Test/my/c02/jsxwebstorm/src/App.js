import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Heading = React.createClass({
    render: function () {
        return ( <th>{this.props.heading}</th> )
    }
});

var Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (heading) {
            return <Heading heading={heading}/>
        });
        return (<thead>
        <tr>{headings}</tr>
        </thead>);
    }
});


var Row = React.createClass({
    render: function () {
        return (<tr>
            <td>
                {this.props.changeSet.when}
            </td>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.description}</td>
        </tr>);
    }
});

var Rows = React.createClass({
    render: function () {
        var rows = this.props.changeSets.map(function (changeSet) {
            return (<Row changeSet={changeSet}/>);
        });
        return (<tbody>{rows}</tbody>);
    }
});


var App = React.createClass(
    {
        render: function () {
            return (<table className="table">
                <Headings headings={this.props.headings}/>
                <Rows changeSets={this.props.changeSets}/>
            </table>);
        }
    }
);

export default App;
