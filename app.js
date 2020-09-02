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
    x: 5,
    y: 5,
    travelLog: [{ x: 5, y: 5}],
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

    console.log(`Turns Left! Rover2 has the direction ${rover2.direction}.`) 

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

    console.log(`Turns Right! Rover2 has the direction ${rover2.direction}.`)   

}


//Iteration 3 | Moving the rover

function goForward(rover, command){
    if(rover.x >= 0 && rover.x < 10){
    
        switch (rover.direction || rover2.direction) {

            case 'N':
                console.log('NORTH')
                rover.y--
                rover2.y--
                break;

            case 'E':
                console.log('EAST')
                rover.x++
                rover2.x++
                break;

            case 'S':
                console.log('SOUTH')
                rover.y++
                rover2.y++
                break;

            case 'W':
                console.log('WEST')
                rover.x--
                rover2.x--
                break;
        }


    //Bonus 1 | Enforce boundaries
        
        if (rover.x < 0 || rover.x >= 10) {
            console.log('The rover has gone OUT from the board!!!') 

        } else if (rover.y < 0 || rover.y >= 10) {
            console.log('The rover has gone OUT from the board!!!')

        } else if (rover2.x < 0 || rover2.x >= 10) {
            console.log('The rover2 has gone OUT from the board!!!')

        } else if (rover2.y < 0 || rover2.y >= 10) {
            console.log('The rover2 has gone OUT from the board!!!') 
        }

        let newPosition = { x: rover.x, y: 
        rover.y}

        let newPosition2 = { x: rover2.x, y: rover2.y}
        
        console.log(`Rover has this new position: ${rover.travelLog.push(newPosition)}`)

        console.log(`Rover2 has this new position: ${rover2.travelLog.push(newPosition2)}`)

    }
}



    //Bonus 2 | Move backwards 

function goBackward(rover, command){
     if(rover.x >= 0 && rover.x < 10){
    
        switch (rover.direction || rover2.direction) {

            case 'N':
                console.log('NORTH')
                rover.y++
                rover2.y++
                break;

            case 'E':
                console.log('EAST')
                rover.x--
                rover2.x--
                break;

            case 'S':
                console.log('SOUTH')
                rover.y--
                rover2.y--
                break;

            case 'W':
                console.log('WEST')
                rover.x++
                rover2.x++
                break;
        }



    //Bonus 1 | Enforce boundaries

        if (rover.x < 0 || rover.x >= 10) {
            console.log('The rover has gone OUT from the board!!!') 

        } else if (rover.y < 0 || rover.y >= 10) {
            console.log('The rover has gone OUT from the board!!!')

        } else if (rover2.x < 0 || rover2.x >= 10) {
            console.log('The rover2 has gone OUT from the board!!!')

        } else if (rover2.y < 0 || rover2.y >= 10) {
            console.log('The rover2 has gone OUT from the board!!!') 
            
        }


        let newPosition = { x: rover.x, y: rover.y}

        let newPosition2 = { x: rover2.x, y: rover2.y}
        
        console.log(`Rover has this new position: ${rover.travelLog.push(newPosition)}`)
        console.log(`Rover 2 has this new position: ${rover2.travelLog.push(newPosition2)}`)
    }
}



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
    console.log(rover.travelLog)
    console.log(rover2.travelLog)
}

//commands('rffrfflfrff')
commands('lf')
