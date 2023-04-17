let inputdirection={X:0,Y:1}
export function getinput()
{
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && inputdirection.Y !== 1) {
        inputdirection.X = 0;
        inputdirection.Y = -1;
    }
    else if (e.key === 'ArrowDown' && inputdirection.Y !== -1) {
        inputdirection.X = 0;
        inputdirection.Y = 1;
    }

    else if (e.key === 'ArrowLeft' && inputdirection.X !== 1) {
        inputdirection.X = -1;
        inputdirection.Y = 0;
    }

    else if (e.key === 'ArrowRight' && inputdirection.X !== -1) {
        inputdirection.X = 1;
        inputdirection.Y = 0;

    }
})
return inputdirection;
}