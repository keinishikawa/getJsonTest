import React from "react";
import "./styles.css";
import axios from "axios";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }

  memberList(list) {
    const memberList = list.map((member, index) => {
      return (
        <li>
          {member.name}
          {member.age}
        </li>
      );
    });
    return <ul>{memberList}</ul>;
  }

  render() {
    console.log(this.state.member);
    return (
      <div>
        <button onClick={this.getJson}>GetJson</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  getJson = () => {
    const url = "https://jsondata.okiba.me/v1/json/vF5dq200415111848";
    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };
}
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
