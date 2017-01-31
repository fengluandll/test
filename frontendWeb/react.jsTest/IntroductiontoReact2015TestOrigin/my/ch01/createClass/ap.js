var MyComponent = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.name}
            </div>
                );
    }
});

React.render(<MyComponent name="yun" />, document.getElementById('container'));