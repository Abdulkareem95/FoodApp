import React from "react";

class UserCls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    console.log("child constructor is called");
  }
  async componentDidMount() {
    console.log("child component did mount is called");
    const data = await fetch("https://api.github.com/users/Abdulkareem95 ");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update called");
  }
  render() {
    console.log("child render method is called");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>{name}</h1>
        <p>Location:{location}</p>
        <p>Hi I am Abdul kareem what do you want to know</p>
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor is called");
  }
  componentDidMount() {
    // console.log("parent component did mount called ");
  }
  render() {
    // console.log("parent render is called");
    return (
      <div>
        <UserCls name={"abdul"} location={"Delhi"}></UserCls>
        <h1> welcome</h1>
      </div>
    );
  }
}

export default About;
