import React from 'react'
const players = [
    {username:"Del Piero", points:10},
    {username:"Zidane", points:20},
    {username:"Beckham", points:20,},
    {username:"Zambrotta", points:10},
    {username: "Nedved",points:13 },
    {username:"Bufon", points:0},
    {username:"Terezegeut", points:1},
    {username:"Ronaldo", points:2},
    {username:"Carlos", points:22},
    {username:"Mik", points:4}
    ];

const Players = () => (
    <div>
        <h1>
            Players
        </h1>
        <ul>
            {players.map(
                player=>
                <li>{player.username} score: {player.points}</li>

            )}
        </ul>
    </div>
)


export default Players;










