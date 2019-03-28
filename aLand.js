const knife = 1.4;
const spear = 2.8;
const _308 = 30.8;
const fangs = 1.5;
const noWeapon = 1.0;
const noAlch = 0;
var player = {
    pHealth: 135,
    pStr: 3,
    pDef: 3,
    pIni: 3,
    pWeapon: noWeapon,
    pWeAlch: noAlch
};

let wolf = { 
    health: 10,
    attack: 4,
    defence: 2,
    initiative: 4,
    weapon: fangs
};

let bear = { 
    health: 24,
    attack: 6,
    defence: 4,
    initiative: 2,
    weapon: fangs
};

function monsterBattle (player, monster){
    let tempMonsterHealth = monster.health;
    while (player.pHealth > 0 && monster.health > 0){
        if (player.pIni >= monster.initiative){
            monster.health -= player.pStr * player.pWeapon - monster.defence;
            if (monster.health > 0){
            player.pHealth -= monster.attack * monster.weapon - player.pDef;
            }
        } else if (monster.initiative > player.pIni) {
            player.pHealth -= monster.attack * monster.weapon - player.pDef;            
            monster.health -= player.pStr * player.pWeapon - monster.defence;
        }
    }
    if (player.pHealth <= 0 && monster.health <= 0){
        console.log("Whilst defeating your foe, you alas have also been felled.");
    } else if (player.pHealth <= 0) {
        console.log("You have perished..");
    } else if (monster.health <= 0) {
        console.log("You defeated the monster!");
        monster.health = tempMonsterHealth;
    } else {
        console.log("Unknown error");
    }
}
//Dead ends only have one connection
const layerOneRooms = ['Corridor', 'Dead end', 'Sewer', 'Chamber'];
//ROOM transversal//
//RaNDOM ENCOUNTER METHOD FOR 2-3 EVENTS per room
//FIrst for procedural generation after set keys
//Create map 3x3:
//Connect by number. Reached by if sibling or sibling array index matches.
let arrMap = [
    [['a', layerOneRooms[3]], ['a', layerOneRooms[0]], ['c', layerOneRooms[1]]],
    [['b', layerOneRooms[0]], ['ab', layerOneRooms[0]], ['c', layerOneRooms[0]]],
    [['b', layerOneRooms[3]], ['b', layerOneRooms[3]], ['bc', layerOneRooms[2]]]
];
var someText = arrMap[0][1][0];
var toMatch = arrMap[0][2][0];
if (toMatch.match(someText)){
    console.log('Matches!');
}
//check Connections function
function mapRooms(arrMap){
let prevRoom;
let nextRoom;
let downRoom;
let upRoom;
let thisRoom;
let pR;
let uR;
let nR;
let dR;
for (let i = 0; arrMap.length > i; i++){
    for (let j = 0; arrMap[i].length > j; j++){
        console.log(arrMap[i][j][0]);
        if (j > 0){
            
            prevRoom = j-1;
            
            pR = arrMap[i][prevRoom][0];
            thisRoom = arrMap[i][j][0];
            //console.log('2nd arr > 0');
            if (thisRoom.match(pR)){
                console.log(`prev room match`);
            }
        }
        if (i > 0){
            upRoom = i-1;
            uR = arrMap[upRoom][j][0];
            thisRoom = arrMap[i][j][0];
            console.log('ALOG' + uR);
            console.log('ALOG' + thisRoom);
            //console.log('1st arr > 0');
            if (thisRoom.match(uR)){
                console.log(`up room match`);
            }
        }
        if (i < arrMap.length-1){
            downRoom = i+1;
            //if (arrMap[i][j][0] === arrMap[downRoom][j][0]){
            dR = arrMap[downRoom][j][0];
            //console.log(dR + 'Veronika');
            thisRoom = arrMap[i][j][0];
            //console.log('! last 1 arr item');
            if (thisRoom.match(dR)){
                //console.log(thisRoom + ' n ' + dR);
                console.log(`down room match`);
            } 
        }
        if (j < arrMap[i].length-1){
            nextRoom = j+1;
            nR = arrMap[i][nextRoom][0];
            //console.log(nR + 'Vero right');
            thisRoom = arrMap[i][j][0];
            //console.log('! last 2 att item');
            if (thisRoom.match(nR)){
                console.log(`next room match`);
            }
        }
    }
}
};
mapRooms(arrMap);
//temporary specific encounters
let enemy;
let goldPile;
let potion;
let weapon;
//General encou for LEVEL/ROOM_TYPE
//Increased numerally for rarity control by pow
const chamberEnc = {
    1: enemy,
    2: goldPile,
    3: potion,
    4: weapon
};

let layoutDesc = `You are in a ${layerOneRooms[3]}. `;




/* TEST FOR ENCOUNTER
player.pWeapon = spear;
while (player.pHealth > 0){
    //document.write("A monster attacks!");
    monsterBattle(player, bear);
    //onsole.log("hello");

}*/


