var React = require('react');
var ReactDOM = require('react-dom');
var ReactClass = React.createClass({
    render: function () {
        if (this.props.isHidden){
            return null;
        }
        return React.createElement('h1', { className: 'header' }, this.props.header);
        //return React.createElement('h1', { className: 'header' }, this.props.header);
        //return false;
    }
});
var o = {header :"OwnHeader",
        isHidden:true};
var reactComponentElement = React.createElement(ReactClass,o);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
o.header = "changed my mind";