import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


global.owner = [
  ['919172389527'],
  ['916202316574', 'Maddox-69', true]
] 
global.prems = []

global.APIs = { 
  violetics : 'https://violetics.pw',
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { 
  'https://violetics.pw': 'beta',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = 'MADDOX-69'
global.author = 'ELECTRON-MD'

global.copyright = 'MADDOX-69'
global.packname = 'ELECTRON-MD'
global.author = 'MADDOX-69'

//sticker WM
global.stkpack = 'ELECTRON-MD'
global.stkowner = 'MADDOX-69'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})