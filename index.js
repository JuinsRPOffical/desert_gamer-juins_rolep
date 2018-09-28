const Discord =require('discord.js');
const bot =new Discord.Client();

bot.login ("NDk0ODcxMDIzMDc0NjcyNjUw.Do50OA.ssAVunubhxkG1bMRm4CTvmAv4-k");

let version = "1.0";
let hideobnova = false;

bot.login(process.env.token);

bot.on('ready', () => {
    console.log("Бот был успешно запущен!");
    bot.guilds.find(g => g.id == "490095436212862977").channels.find(c => c.name == "general").send(`\`Я был запущен! Версия ${version}\``)
    if (!hideobnova){
        if (bot.guilds.find(g => g.id == "471579337779445760").channels.find(c => c.name == "info")) bot.guilds.find(g => g.id == "471579337779445760").channels.find(c => c.name == "updates-bot-user").send(`**DISCORD BOT UPDATE** @everyone\n\`\`\`diff
Вышло обновление версии ${version}:
- Пофиксил "undefined" в "/setadmin [USER] [LVL]"
» Vlad_Botorov.\`\`\``).then(msgdone => {
            msgdone.react(`👍`).then(() => { 
                msgdone.react(`👎`)
            })
        })
    }
});