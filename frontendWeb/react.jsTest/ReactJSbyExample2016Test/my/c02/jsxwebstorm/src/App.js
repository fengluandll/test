import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var RecentChangesTable = React.createClass({
    render: function () {
        return (<table>
            {this.props.children}
        </table>);
    }
});

RecentChangesTable.Heading = React.createClass({
    render: function () {
        var headingStyle = {backgroundColor: 'FloralWhite',
                            fontSize: '19px'};
        return ( <th style={headingStyle}>{this.props.heading}</th> )
    }
});

RecentChangesTable.Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (heading) {
            return <RecentChangesTable.Heading heading={heading}/>
        });
        return (<thead>
        <tr>{headings}</tr>
        </thead>);
    }
});


RecentChangesTable.Row = React.createClass({
    render: function () {
        var trStyle= {backgroundColor: 'aliceblue'};
        return (<tr style={trStyle}>
            <td>
                {this.props.changeSet.when}
            </td>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.description}</td>
        </tr>);
    }
});

RecentChangesTable.Rows = React.createClass({
    render: function () {
        var rows = this.props.changeSets.map(function (changeSet) {
            return (<RecentChangesTable.Row changeSet={changeSet}/>);
        });
        return (<tbody>{rows}</tbody>);
    }
});




var App = React.createClass(
    {
        render: function () {
            return (<RecentChangesTable>
                <RecentChangesTable.Headings headings={this.props.headings}/>
                <RecentChangesTable.Rows changeSets={this.props.changeSets}/>
            </RecentChangesTable>);
        }
    }
);

export default App;
