var ServerID = "502892621048578048"; //اي دي السيرفر
var ChannelID = "502893057973157890";// اي دي الروم

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 's';

client.on('warn', console.warn);

client.on('error', console.error);
// Codes server - !.Zeyad' , ♚Roýale#5555


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Zeyad,Royale','\n','ProBot credits miner is ready!'));// Codes Server` - iiZeyad , Roýale"1.5k 🍷#1111

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));// Codes server - !.Zeyad' , ♚Roýale#5555


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) // Codes server - !.Zeyad' , ♚Roýale#5555


    });
}

var timer = setTimeout(timerFunc, 500);

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

client.on('ready', () => {
    client.channels.get("502940526149107723").join();
    }); 



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
