import React from 'react'

class NoMatch extends React.Component {

    render(){
        return (
            <div style={{fontSize: "80px", color: "#DB9833", textAlign: "center", paddingTop: "10%"}}>
               Error 404 - Path does not exist.
            </div>
        )
    }
}

export default NoMatch