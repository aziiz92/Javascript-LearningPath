/**
 * Reduce() reduces a list of values into a single value.
 */


 var  array = [
    {name: "Keylor Navas", age: "36", position: "Goalkeeper", foot: "Right"},
    {name: "Denis Franchi", age: "20", position: "Goalkeeper", foot: "Right"},
    {name: "Presnel Kimpembe", age: "27", position: "Defender", foot: "Left"},
    {name: "Sergio Ramos", age: "36", position: "Defender", foot: "Right"},
    {name: "Marquinhos", age: "28", position: "Defender", foot: "Right"},
    {name: "Abdou Diallo", age: "26", position: "Defender", foot: "Left"},
    {name: "El Chadaille Bitshiabu", age: "17", position: "Defender", foot: "Left"},
    {name: "Marco Verrati", age: "29", position: "Midfielder", foot: "Right"},
    {name: "Idrissa Gueye", age: "33", position: "Midfielder", foot: "Right"},
    {name: "Xavi Simons", age: "19", position: "Midfielder", foot: "Right"},
    {name: "Ismaël Gharbi", age: "18", position: "Midfielder", foot: "Right"},
    {name: "Edouard Michut", age: "19", position: "Midfielder", foot: "Right"},
    {name: "Kylian Mbappe", age: "24", position: "Forward", foot: "Right"},
    {name: "Neymar Jr", age: "29", position: "Forward", foot: "Right"},
    {name: "Lionel Messi", age: "37", position: "Forward", foot: "Left"}

];

/**
 * We gonna use the reduce() method to get the youngest player.
 */

var youngestPlayer = array.reduce(function(youngestPlayer, player){
    if(player.age < youngestPlayer.age){
        return player;
    }
    return youngestPlayer;
});

console.log(youngestPlayer);// {name: "El Chadaille Bitshiabu", age: "17", position: "Defender", foot: "Left"},