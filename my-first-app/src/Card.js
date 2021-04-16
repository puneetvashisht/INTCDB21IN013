import React, { Component } from 'react'
// import Badge from './Badge'
import Badge from './Badge'

export default class Card extends Component {
    render() {
        return (
            <div class="col">
                 <div class="card">
                <img src="https://via.placeholder.com/150" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Badge caption="Votes"></Badge>
                </div>
                </div>
            </div>
           
        )
    }
}
