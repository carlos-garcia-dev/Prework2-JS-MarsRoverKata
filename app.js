/* Carlos García - JS: Mars Rover Kata
https://github.com/carlos-garcia-dev
https://www.codewars.com/users/cdvlpr
Madrid - Octubre 2020 */



//Iteration 1 | The rover object

const rover = { 
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0}],
}



//Bonus 4 | Obstacles 

const rover2 = {
    direction: 'N',
    x: 9,
    y: 9,
    travelLog: [{ x: 0, y: 0}],
}

const coord = [
 [null, null, null, null, null, null, null, null, null, null],
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null], 
 [null, null, null, null, null, null, null, null, null, null],  
]




//Iteration 2 | Turning the rover

function turnLeft (rover){
    switch (rover.direction) {

        case 'N':
            rover.direction = 'W'
            break;

        case 'E':
            rover.direction = 'N'
            break;

        case 'S':
            rover.direction = 'E'
            break;

        case 'W':
            rover.direction = 'S'
            break;   
    }

    console.log(`Turns Left! Rover has the direction ${rover.direction}.`) 

}


function turnRight (rover){
    switch (rover.direction) {

        case 'N':
            rover.direction = 'E'
            break

        case 'E':
            rover.direction = 'S'
            break

        case 'S':
            rover.direction = 'W'
            break

        case 'W':
            rover.direction = 'N'
            break
    }

    console.log(`Turns Right! Rover has the direction ${rover.direction}.`)   

}


//Iteration 3 | Moving the rover

function goForward(rover, command){
    if(rover.x >= 0 && rover.x < 10){
        

        if (rover.direction === 'N'){
            console.log('NORTH')
            rover.y--

        } else if (rover.direction === 'E') {
            console.log('EAST')
            rover.x++

        } else if (rover.direction === 'S') {
            console.log('SOUTH')
            rover.y++

        } else if (rover.direction === 'W') {
            console.log('WEST')
            rover.x--

        }


        let newPosition = { x: rover.x, y: 
        rover.y}
        
        console.log(`Rover has this new position: ${rover.travelLog.push(newPosition)}`)


    //Bonus 1 | Enforce boundaries 

    } else {
        console.log('The rover has gone OUT from the board!!!')
    }
}



/*
    //Bonus 2 | Move backwards 

function goBackward(rover, command){
    if(rover.x >= 0 && rover.x < 10){
        

        if (rover.direction === 'N'){
            console.log('NORTH')
            rover.y++

        } else if (rover.direction === 'E') {
            console.log('EAST')
            rover.x--

        } else if (rover.direction === 'S') {
            console.log('SOUTH')
            rover.y--

        } else if (rover.direction === 'W') {
            console.log('WEST')
            rover.x++

        }


        let newPosition = { x: rover.x, y: 
        rover.y}
        
        console.log(`Rover has this new position: ${rover.travelLog.push(newPosition)}`)


    //Bonus 1 | Enforce boundaries 

    } else {
        console.log('The rover has gone OUT from the board!!!')
    }
}
*/


//Iteration 4 | Commands

function commands (command) {
 for (let i = 0; i < command.length; i++) {
    let orders = command[i]

    switch (orders) {
        case 'f':
            goForward(rover, command);
            break
    
        case 'r':
            turnRight(rover, command);
            break
    
        case 'l':
            turnLeft(rover, command)
            break
    
        case 'b':
            goBackward(rover, command);
            break


    //Bonus 3 | Validate inputs 

        default:
            console.log('Wrong command: You must enter: f, r, l or b')
            break
    }  

}   
    console.log(rover.travelLog);
}

//Iteration 5 | Tracking 

commands('rffrfflfrff')

//////////////////////////////////////////////

