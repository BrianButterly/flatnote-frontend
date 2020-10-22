import React from 'react'
import showNote from '../actions/note'
import { connect } from 'react-redux'
import deleteNote from '../actions/note'
import { Link } from 'react-router-dom'

class Show extends React.Component {


    componentDidMount(){
        fetch(`http://localhost:3000/notes/${this.props.match.params.id}`)
            .then(resp => resp.json())
            .then( note => {
              this.props.showNote(note)
            })
    }

    handleDelete = () => {
        
        fetch(`http://localhost:3000/notes/${this.props.note.id}`, {method: "DELETE"})
            .then(resp => resp.json())
            .then( data => {
                this.props.history.push("/home")    
            }) 
    }

    renderNote = () => {
        const { title, body } = this.props.note
        const link = `/edit/${this.props.note.id}`
        return (
            <div>
                <h1>{title}</h1>
                <h3>{body}</h3>
                <button class="btn"onClick={this.handleDelete}>Delete</button>
                <p></p>
                <Link to={link}><button class="btn">Edit</button></Link>
            </div>
        )
    }

   render() {
       return (
           <div className="show-card">
               {this.renderNote()}
           </div>
       )
   }
}

const mapDispatchToProps = {
    showNote,
    deleteNote
}

const mapStateToProps = (state) => {
    return {
        note: state.note 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Show)