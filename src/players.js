import React from 'react'
import {Table} from 'react-bootstrap'
const players = [
    {id:1,username:"Del Piero", points:10},
    {id:2,username:"Zidane", points:20},
    {id:3,username:"Beckham", points:20,},
    {id:4,username:"Zambrotta", points:10},
    {id:5,username: "Nedved",points:13 },
    {id:6,username:"Bufon", points:0},
    {id:7,username:"Terezegeut", points:1},
    {id:8,username:"Ronaldo", points:2},
    {id:9,username:"Carlos", points:220},
    {id:10,username:"Mik", points:4}
    ];

const Players = () => (
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
    player => (
     <tr key={player.id}>
    <td>{player.username}</td>
    <td>{player.points}</td>
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
)


export default Players;










