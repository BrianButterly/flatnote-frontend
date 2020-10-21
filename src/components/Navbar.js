import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react';

class Navbar extends React.Component {
  render() {
    return (
      <div className={`ui inverted blue menu`} id="nav">
        <Link className="ui header" to='/login'>
          <i className={`${this.props.icon} icon`} />
          <div className="content">{this.props.title}</div>
          <div className="sub header">{this.props.description}</div>
        </Link>
        <Link to='/home'>
          <Header as='h2' style={{padding: "20px 0px"}}>
              <Icon name='edit outline' />
              <Header.Content>Flatnote</Header.Content>
          </Header>
        </Link>
        <div className="right menu">
          <Link style={{color: "black"}} className="item" to='/login'>
            Login 
          </Link>
          <Link style={{color: "black"}} className="item" to='/home'>
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;






