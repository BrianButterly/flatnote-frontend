import React from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/notes'
import { Link } from 'react-router-dom'


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
                    <Link to={`/notes/${note.id}`} style={{color: "black"}}>
                    <div class="grid-item" style={{color: "black"}}>
                        <div key={note.id}>
                            <h3>{note.title}</h3>
                        </div>
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

