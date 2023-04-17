export let foodpos={X:13,Y:10}
export function update()
{
    foodpos.X=Math.floor(Math.random()*30+1)
    foodpos.Y=Math.floor(Math.random()*30+1)
}
export function draw()
{
    const food=document.createElement('div')
    food.style.gridColumnStart=foodpos.Y
    food.style.gridRowStart=foodpos.X
    food.className="food"
    document.getElementById('head').appendChild(food);
    return foodpos;
}