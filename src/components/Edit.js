import React from 'react'
import { Button, Form, FormDropdown, FormField, Grid, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import editNoteSuccess from '../actions/note'

class Edit extends React.Component{

    state = {
        title: '',
        body: '',
        user_id: 1,
        id: ""
    }

    componentDidMount(){
        const {title, body, id} = this.props.note
        this.setState({
            title,
            body, 
            user_id: 1,
            id 
        }) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const reqObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch(`http://localhost:3000/notes/${this.props.note.id}`, reqObj)
            .then(resp => resp.json())
            .then( notes => {
                this.props.editNoteSuccess(notes)
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
                marginTop: "150px"}}>Edit Note
            </h1>
            <Segment id="new" textAlign="center">
                <Form onSubmit={this.handleSubmit} unstackable>
                    <Form.Group widths={2}>
                        <Form.TextArea icon="pencil alternate" iconPosition="left" onChange={this.handleChange} value={this.state.title} name='title' placeholder='Title' />
                        <Form.TextArea icon="pencil alternate" iconPosition="left" onChange={this.handleChange} value={this.state.body} name='body' placeholder='Body' />
                    </Form.Group>
                    <Button id="button-color" onClick={() => console.log('Clicked')} style={{color: "black"}} type='submit'>
                        Submit
                    </Button>
                </Form>
            </Segment>
            </div>
        )
    }
}


const mapDispatchToProps = {
    editNoteSuccess
}

const mapStateToProps = (state) => {
    return {
        note: state.note 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)