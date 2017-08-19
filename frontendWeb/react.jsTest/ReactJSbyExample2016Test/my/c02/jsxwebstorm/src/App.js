import React from 'react';
import logo from './logo.svg';
import './App.css';

var RecentChangesTable = React.createClass({
    render: function () {
        return (<table className="recentChangeTable" data-custom-attribute="abc">
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
        var headings = this.props.headings.map(function (heading,index) {
            return <RecentChangesTable.Heading key={index} heading={heading}/>
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
        var rows = this.props.changeSets.map(function (changeSet,index) {
            return (<RecentChangesTable.Row changeSet={changeSet} key={index}/>);
        });
        return (<tbody>{rows}</tbody>);
    }
});

RecentChangesTable.AmpDiv = React.createClass({
    render: function () {
        // return <div>Mike &amp; Shawn</div>

        // var first = "Mike";
        // var second = "Shawn";
        // return <div>{first + '&amp;' + second}</div>;

        var first = "Mike";
        var second = "Shawn";
        return <div>{[first, <span>&amp;</span>,second]}</div>
    }
});

RecentChangesTable.InnerHtml = React.createClass({
    render: function () {
        return (<div dangerouslySetInnerHTML={{__html:'Mike &amp; Shawn'}}/>);
    }
});




var App = React.createClass(
    {
        render: function () {
            return (<RecentChangesTable>
                <RecentChangesTable.Headings headings={this.props.headings}/>
                <RecentChangesTable.Rows changeSets={this.props.changeSets}/>
                {/*<RecentChangesTable.AmpDiv/>*/}
                {/*<RecentChangesTable.InnerHtml/>*/}
            </RecentChangesTable>);
        }
    }
);

export default App;
