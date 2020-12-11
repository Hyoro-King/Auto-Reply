const Discord = require('discord.js')
const client = new Discord.Client()

const presenceDiscord = require('discord.js-self')
const presenceClient = new presenceDiscord.Client()

const moment = require('moment')

require('dotenv-flow').config()
const env_files = {
    token: process.env.DISCORD_TOKEN,
    message: process.env.MESSAGE
}
let replyMessage = env_files.message
const token = env_files.token

if(token === '<your token here>'){
    const time = moment().format("kk:mm:ss")
    console.log(`${time} | ERROR | Invalid token was provided. Please replace "<your token here>" with your token!`)
    return
}

replyMessage = replyMessage.toString()

client.on('ready', () => {
    console.log('------------------------------')
    console.log(`Connected to ${client.user.tag}`)
    console.log('------------------------------')
    const time = moment().format("kk:mm:ss")
    console.log(`${time} | Info | Connecting to Discord Rich Presence...`)
})

client.on('message', message => {
    if(!message.channel.type === 'dm' || message.author.bot || message.author.id === client.user.id) return
    message.channel.send(replyMessage)
    const time = moment().format("kk:mm:ss")
    console.log(`${time} | Message | Message Recieved from ${message.author.tag} > Message Content: ${message.content}`)
})

client.login(token).catch(error => {
    console.log('Invalid token! Please provide a valid token to login!')
    setTimeout(() => {}, 10000)
})