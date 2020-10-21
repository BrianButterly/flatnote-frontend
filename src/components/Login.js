import React from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export default () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Username"
          />
          <Link to="/home" style={{color: "black"}}>
            <Button id="button-color" onClick={() => console.log('Clicked')} fluid size="large" style={{color: "black"}}>
              Login
            </Button>
          </Link>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);
