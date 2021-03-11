import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './components/Articles';
import Panier from './components/Panier';

export default class App extends Component {

  state = {
    monArgent : 20,
    panier : [],
    articles : [
      { nom : "Coca-Cola", prix : 1, stock : 5, image : './img/Coca.jpg' },
      { nom : "Cécémel", prix : 1.5, stock : 5, image : './img/Cecemel.jpg' },
      { nom : "Ice-Tea", prix : 2, stock : 5, image : './img/IceTea.jpg' },
    ],
  }

  achat = (i) => {
    let {monArgent, panier, articles} = this.state
    if (monArgent < articles[i].prix || articles[i].stock == 0) {
      return null
    }
    monArgent -= articles[i].prix
    articles[i].stock --
    panier.push(articles[i])
    this.setState({monArgent, articles, panier})
  }

  rendre = (i) => {
    let {monArgent, panier, articles} = this.state
    monArgent += panier[i].prix
    panier[i].stock ++
    panier.splice(i, 1)
    this.setState({monArgent, articles, panier})
  }

  render() {

    return (
      <div>
        <h1>Mon argent : {this.state.monArgent} €</h1>
          {
            this.state.articles.map((el) => {
              if (this.state.monArgent < el.prix) {
                return (<h1>"Solde Insuffisant pour {el.nom}"</h1>)
              }
            })
          }
        <div className="d-flex justify-content-around">
          {
            this.state.articles.map((el, i) => {
              console.log(el)
              return (
                <Articles key={i} allState={el} fonctionAchat={() => this.achat(i)}/>
              )
            })
          }
        </div>
        <div className="mt-4">
          {
            this.state.panier.map((el, i) => {
              return (
                <Panier key={i} allState={el} fonctionRendre={() => this.rendre(i)}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

