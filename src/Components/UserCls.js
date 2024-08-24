import React from "react";

class UserCls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h1>{name}</h1>
        <p>Location:{location}</p>
        <p>Hi I am Abdul kareem what do you want to know</p>
      </div>
    );
  }
}
export default UserCls;
