import React, { Component } from 'react';
import {Table, Button, ButtonToolbar} from'react-bootstrap';


import './App.css'



class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            highlightingColor : 'red',
            players:null
        }





    }
    componentWillMount() {
fetch(`${process.env.PUBLIC_URL}/data/players.json`
).then(response => response.json()
).then((players)=>{this.setState({players:players});})
    }

    render() {
        return (
            <div>

                <h1>
                    Players
                </h1>
                <ButtonToolbar>
                    <Button onClick={
                        ()=>this.setState({highlightingColor:'black'})
                    }>Red</Button>
                    <Button onClick={
                        ()=>this.setState({highlightingColor:'green'})
                    }>Blue</Button>
                </ButtonToolbar>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.players ===null? null:this.state.players.map(
                        (player) => (
                            <tr key={player.id}>
                                <td style ={{color : player.points >100? this.state.highlightingColor: 'blue'}}>{player.username}</td>
                                <td style ={{color : player.points >100? this.state.highlightingColor: 'blue'}}>{player.points}<td></td></td>
                            </tr>))}


                    <tr>
                        <td>Total score</td>
                        <td>{this.state.players ===null? null:this.state.players.map((player)=>player.points).reduce((a,b)=>(a+b))}</td>
                    </tr>
                    <tr><td>Average</td>
                        <td>{this.state.players ===null? null:this.state.players.map((player)=>player.points).reduce((a,b)=>(a+b))/this.state.players.length}</td></tr>




                    </tbody>
                </Table>




        </div>


    );
  }
}

export default App;
