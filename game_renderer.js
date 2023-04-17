import { update as updates,draw as draws,snake_speed } from "./game_logic.js"; 
let lastRenderTime=0;
let secondsSinceLastRender=0;
function main(currentTime)
{
    window.requestAnimationFrame(main)
    secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    if(secondsSinceLastRender<1/snake_speed)return
    lastRenderTime=currentTime
    draws(document.getElementById('head'))
    updates()
}
window.requestAnimationFrame(main)
