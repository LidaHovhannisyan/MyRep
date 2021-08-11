import React from "react";

class Li extends React.Component {
    componentDidMount() {
        console.log('li did mount');
    }

    componentWillUnmount() {
        console.log('li unmounted');
    }

    render() {
    const {item} = this.props;
    return (
      <li>
        <div>
          <span>{item}</span>
        </div>
      </li>
    );
  }
}

export default Li;
