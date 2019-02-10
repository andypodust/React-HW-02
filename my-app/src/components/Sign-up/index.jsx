import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

export default class SignUp extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { name, email, phone, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Sign-up</h2>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          placeholder="Phone number"
        />
        <input
          type="passpord"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Password"
        />

        <input type="submit" value="Sign in" />
      </form>
    );
  }
}
