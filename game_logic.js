import { getinput as getinput } from "./getdirection.js"; 
import {update as updatefood,draw as drawfood,foodpos}  from './food.js'
export const snake_speed=15;
let points=0;
const snakebody=[{X:11,Y:10}]
export function update()
{
    const inputdirection=getinput()
    for(let i=snakebody.length-2;i>=0;i--)
    {
        snakebody[i+1]=({...snakebody[i]})
    }
    updatescore()
    snakebody[0].X+=inputdirection.X;
    snakebody[0].Y+=inputdirection.Y;
    snakebody[0].Y=(snakebody[0].Y+31) %31;
    snakebody[0].X=(snakebody[0].X+31) %31;
    if(snakebody[0].Y==foodpos.X &&snakebody[0].X==foodpos.Y)
    {
        updatefood()
        expandsnake()
        updatepoint()
    }
    for(let i=1;i<snakebody.length;i++)
    {
        if(snakebody[0].X===snakebody[i].X && snakebody[0].Y===snakebody[i].Y)
        {
            console.log("matched");
            dead();
            points=0;
            break;
        }
    }
    drawfood()
}
export function draw(head)
{
    document.getElementById('head').innerHTML=''
    snakebody.forEach((segment)=>{
        const snake=document.createElement('div')
        snake.style.gridRowStart=segment.Y;
        snake.style.gridColumnStart=segment.X;
        snake.className="snake";
        head.appendChild(snake);
    })
}
function expandsnake()
{
    const length=snakebody.push({X:40,Y:40});
}
function updatescore()
{
    document.getElementById('score').innerHTML=`SCORE:${points}`
}
function updatepoint()
{
    points+=5
}
function dead(){
    snakebody.length=1
}