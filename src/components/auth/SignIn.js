import React, { Component } from "react"; 
class SignIn extends Component {
  state = {
    email:'',
    password:''
  }
  handleSubmit = (e) =>{    
    this.setState({
        [e.target.id] : e.target.value
    })
  }

  handleChange = (e) =>{
      e.preventDefault();
      console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3 mb-3">LogIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className=""
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className=""
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
