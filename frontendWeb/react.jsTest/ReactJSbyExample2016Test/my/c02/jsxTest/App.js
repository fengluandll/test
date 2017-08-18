import React from 'react';
import ReactDom from 'react-dom';

var Heading = React.createClass({
    render: function () {
        return ( <th>{this.props.heading}</th> )
    }
});

var Headings = React.createClass({
    render: function () {
        var headings = this.props.headings.map(function (heading) {
            return <Heading heading="{heading}"/>
        });
        return (<thead>
        <tr>{headings}</tr>
        </thead>);
    }
});


var Row = React.createClass({
    render: function () {
        <tr>
            <td>
                {this.props.changeSet.when}
            </td>
            <td>{this.props.changeSet.who}</td>
            <td>{this.props.changeSet.description}</td>
        </tr>
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
            return <table className="table">
                <Headings headings={this.props.headings}/>
                <Rows changeSets={this.props.changeSets}/>
            </table>
        }
    }
);

var data = [
    {"when": "2 minutes ago",
     "who": "Jill Dupre",
        "description": "Created new account"},
    {
    "when": "1 hour ago",
    "who": "Lose White",
    "description": "Added fist chapter"
}];

var headings = ['When', 'Who', 'Description'];

ReactDom.render(
    <App headings = {headings},changeSets={data} />, document.getElementById('container')
);




