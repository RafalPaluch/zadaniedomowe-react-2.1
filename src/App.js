import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import './App.css'

import players from './players.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            highlightingColor : 'red'
        }
    }
  render() {
    return (
        <div>
          <h1>
            Players
          </h1>
          <Table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {players.map(
                (player) => (
                    <tr key={player.id}>
                      <td style ={{color : player.points >100? this.state.highlightingColor: player.points}}>{player.username}</td>
                      <td style ={{color : player.points >100? this.state.highlightingColor: player.points}}>{player.points}<td></td></td>
                    </tr>))}


            <tr>
              <td>Total score</td>
              <td>{players.map((player)=>player.points).reduce((a,b)=>(a+b))}</td>
            </tr>
            <tr><td>Average</td>
              <td>{players.map((player)=>player.points).reduce((a,b)=>(a+b))/players.length}</td></tr>




            </tbody>
          </Table>




        </div>


    );
  }
}

export default App;
