import { useState } from "react"

const Board = () => {
    const [game,setgame]=useState([null,null,null,null,null,null,null])
    const [player,setplayer]=useState(true)
    const [timer,settimer]=useState(3)
    const handlePlay =(position)=>{
        const newGame = game.slice()
        newGame[position]=player ? "X" : "O"
        setgame(newGame)
        setplayer(!player)
        settimer(3)
    }
    const handleAutoPlay=()=>{
        const emptyGame = game.map((item,index)=> item ? null :index).filter(item => item !==null)
        const position = emptyGame[Math.floor(Math.random()*emptyGame.length)]
        handlePlay(position)

    }
    const listWinner=[
        [0,1,2],[0,4,8],[0,3,6]
    ]
    const checkWinner=()=>{
        for(let i=0;i<listWinner.length;i++){
            const [p1,p2,p3]=listWinner[i]
            if(game[p1]===game[p2] && game[p2]===game[p3]){
                return game[p1]

            }
        }
        return null
    }
    
}
export default Board