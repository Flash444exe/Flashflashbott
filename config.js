import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['212714249761', 'flash', true],
['212614515664', 'flash-bot', false],
['', '', false]
]

global.info = {
 nomerbot: '212614515664',
 pairingNumber: '212693227969',
 nameown: 'Flash',
 nomerown: '212714249761',
 packname: 'sticker by ',
 author: 'FlashCheat',
 namebot: 'ғʟᴀsʜ',
 wm: ''-'_꩜ 𝘍𝘭𝘢𝘴𝘩 𝘉𝘰𝘵 ꩜_'-'',
 stickpack: 'Whatsapp',
 stickauth: 'ғʟᴀsʜ ʙᴏᴛ '
}

// Thumbnail 
global.media = {
 profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 did: 'https://i.postimg.cc/66VY2vf7/20240909-164354.jpg',
 rules: 'https://i.postimg.cc/D0fsb87s/20240909-164916.jpg',
 thumbnail: 'https://i.postimg.cc/KjdGhHpz/d88a5c869741decc1e553ae8e8e86104.jpg',
 thumb: 'https://i.postimg.cc/KjdGhHpz/d88a5c869741decc1e553ae8e8e86104.jpg',
 logo: 'https://i.postimg.cc/KjdGhHpz/d88a5c869741decc1e553ae8e8e86104.jpg',
 unReg: 'https://i.postimg.cc/6QjT1YK7/20240909-165529.jpg',
 registrasi: 'https://i.postimg.cc/FRkFCvGq/20240909-165700.jpg',
 confess: 'https://i.postimg.cc/JzT1102v/20240909-165757.jpg',
 akses: 'https://i.postimg.cc/zfb18jWH/20240909-165903.jpg', 
 wel: 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4', // gif welcome 
 bye: 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://instagram.com/flash.xiiit',
 sgh:  'https://github.com/Flash444exe',
 sgc: 'https://whatsapp.com/channel/0029VajpKD3H5JLwAQJ8Ti3K'
}

global.wait =` انتظر .. أنا أحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *Please be patient*\n\> Running command from *User*!',
 eror: '🤖*Bot Information*\n\> Sorry for the inconvenience in using *Flash Bot*. There was an error in the system while executing the command.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
