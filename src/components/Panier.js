import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Panier extends Component {
    render() {
        return (
            <div className="d-flex mt-3">
                <h4 className="mr-4">Produit : {this.props.allState.nom} // Unité : 1 </h4> 
                <Button variant="danger" onClick={this.props.fonctionRendre}>Rendre</Button>
            </div>
        )
    }
}
