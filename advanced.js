// Interfaces
/*
function typeOfCreature(creature: Fish | Bird){
    if('swim' in creature){
        console.log('Creature is fish')
    } else if('fly' in creature){
        console.log('Creature if bird');
    }
}

const creature1: Fish = {
    swim: () => {
    }
}
*/
function creatureIsFish(creature) {
    return creature.swim !== undefined;
}
function isNull(val) {
    return !val;
}
var empty = '';
var zero = 0;
isNull(empty);
isNull(zero);
