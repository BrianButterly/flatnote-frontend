import React from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createNote } from '../actions/notes'

class New extends React.Component{

    state = {
        title: '',
        body: '',
        user_id: 1
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
        fetch('http://localhost:3000/notes', reqObj)
            .then(resp => resp.json())
            .then( notes => {
            this.props.history.push("/home")
            })
    }
    
    render() {
        return(
            <div>
            <h1 style={{backgroundColor: "#db9833",
                width: "400px", 
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                borderRadius: "5px",
                marginTop: "150px"}}>New Note
            </h1>
            <Segment id="new" textAlign="center">
                <Form onSubmit={this.handleSubmit} unstackable>
                    <Form.Group widths={2}>
                        <Form.Input icon="pencil alternate" iconPosition="left" onChange={this.handleChange} value={this.state.title} name='title' placeholder='Title' />
                        <Form.Input icon="pencil alternate" iconPosition="left" onChange={this.handleChange} value={this.state.body} name='body' placeholder='Body' />
                    </Form.Group>
                    <Button id="button-color" onClick={() => console.log('Clicked')} style={{color: "black"}} type='submit'>
                        Create
                    </Button>
                </Form>
            </Segment>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createNote 
}

export default connect(null, mapDispatchToProps)(New)