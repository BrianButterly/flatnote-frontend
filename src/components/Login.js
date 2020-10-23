import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux'
import { fetchUserSuccess } from '../actions/user'


class Login extends React.Component {

  state = {
    username: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/users/session/login', reqObj)
        .then(resp => resp.json())
        .then( user => {
          this.props.fetchUserSuccess(user)
          this.props.history.push("/home")
        })
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Segment>
            <Form size="large">
              <Form.Input
                onChange={this.handleChange}
                value={this.state.username}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
              />
                <Button onClick={this.handleSubmit} id="button-color" fluid size="large" style={{ color: "black" }}>
                  Login
                </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = {
  fetchUserSuccess
}

export default connect(null, mapDispatchToProps)(Login)
