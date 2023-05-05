import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topo from './Components/Topo'
import Home from "./Components/Home";
import Frontend from './Components/Frontend'
import Programacao from './Components/Programacao'
import Design from './Components/Design'
import Catalogo from "./Components/Catalogo"
import NotFound from "./Components/NotFound"
import Rodape from './Components/Rodape'
import "./index.css"
import Livro from "./Components/Livro"
import axios from "axios";

class App extends Component{
  state = {
    livros: []
  }
  async componentDidMount(){
    try{
      const { data: livros } = await axios.get("/api/todosOsLivros.json")
      this.setState({ livros })
    }catch(error){
      console.log(error)
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'> Mensagem de erro</p>"
        )
    }
  }

  render(){
    return (
      <Router>
          <Topo />
            <Switch>
              <Route exact path="/" render={()=> <Home livros={this.state.livros}/>} />
              <Route exact path="/frontend" render={()=> <Frontend livros={this.state.livros}/>} />
              <Route exact path="/programacao" render={()=> <Programacao livros={this.state.livros}/>} />
              <Route exact path="/design" render={()=> <Design livros={this.state.livros}/>} />
              <Route exact path="/catalogo" render={(props)=> <Catalogo livros={this.state.livros}/>} />
              <Route path="/livro/:livroSlug" render={props=>{
                const livro = this.state.livros.find(
                  livro => livro.slug === props.match.params.livroSlug
                )
                if(livro) return <Livro livro={livro} />
                else return <NotFound />
              }}/>
              <Route component={NotFound} />
            </Switch>
          <Rodape />
      </Router>
    )
  }
}

export default App
