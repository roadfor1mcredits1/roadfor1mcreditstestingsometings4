var ServerID = "501706352234856449"; //اي دي السيرفر
var ChannelID = "501707191951163393";// اي دي الروم

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
var prefix = "!"
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if(!args) return message.channel.send(`${prefix}say <words>`);

if (command == "say") {
if(!message.guild.member(message.author).hasPermission("ADMINSTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

message.channel.send(args.join("  "))
  }



});

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

client.on('ready', () => {
    client.channels.get("501724913313251340").join();
    }); 



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
