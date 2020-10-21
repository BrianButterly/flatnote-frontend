import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/notes'

class Home extends React.Component {

    // state = {
    //     notes: []
    // }

    componentDidMount(){
        fetch('http://localhost:3000/notes')
        .then(resp => resp.json())
        .then(notes => {
            // this.setState({ notes })
            this.props.fetchNotesSuccess(notes)
        })
    }

    render() {
        const { notes } = this.props;
          return (   
            <div>
                {notes.map(note => (
                    <Link to="/show" style={{color: "black"}}>
                        <div class="ui card" key={note.id}>
                            <h3>{note.title}</h3>
                            <h4>{note.body}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
    
} //End of class

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = {
    fetchNotesSuccess    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)