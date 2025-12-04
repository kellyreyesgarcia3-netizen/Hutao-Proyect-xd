import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

global.botnumber = ''

global.owner = [
    ["17089308726", "Propietario 👑", true],
    //num en lid v:
    ["17089308726", "creadorLid", true],
    ["51993175834"],    
    ["5218712620915"],
    ["5351524614"]
];

global.mods = []
global.suittag = []
global.prems = []

global.packsticker = '★彡( 𐐘ł_₴Ø₣ł₳ ₵ₕ )彡★'
global.packname = '󠁖󠁖󠁖󠁖󠁖󠁖󠁻󠁻𝐌𝐚ⷡ𝐫ⷪ𝐢ⷮ𝐧𝐞 𝐜𝐡-𝐌𝐃🈀'
global.author = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.wm = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.titulowm = '★彡( 𐐘ł_₴Ø₣ł₳ ₵ₕ )彡★'
global.titulowm2 = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.igfg = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.botname = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.dev = '★彡( 𐐘ł_₴Ø₣ł₳ ₵ₕ )彡★'
global.textbot = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.gt = '𝐌𝐚ⷡ𝐫ⷪ𝐢ⷮ𝐧𝐞 𝐜𝐡-𝐌𝐃🈀'
global.namechannel = 'ʍǟʀɨռɛ çɦ-քʀօʏɛƈȶ'
global.vs = 'V2.3'

global.imagen1 = "https://spacny.wuaze.com//uploads/images__41_.jpeg"
global.imagen2 = "https://spacny.wuaze.com//uploads/images__42_.jpeg"
global.imagen3 = "https://spacny.wuaze.com//uploads/images__43_.jpeg"
global.imagen4 = "https://spacny.wuaze.com//uploads/images__44_.jpeg"
global.imagen5 = fs.readFileSync('./src/+18.jpg')
global.imagen6 = "https://files-furina.stellarwa.xyz/1763136179619.jpg"
global.imagen7 = "https://files-furina.stellarwa.xyz/1763136191624.jpg"
global.imagen8 = "https://files-furina.stellarwa.xyz/1763136575331.jpg"
global.imagen9 = "https://files-furina.stellarwa.xyz/1763136580625.jpg"
global.imagen10 = "https://files-furina.stellarwa.xyz/1763136591252.jpg"
global.miniurl = "https://files-furina.stellarwa.xyz/1763136607528.jpg"
global.logo2 = "https://files-furina.stellarwa.xyz/1763136612880.jpg"
global.logo3 = "https://files-furina.stellarwa.xyz/1763136612880.jpg"
global.catalogo = "https://files-furina.stellarwa.xyz/1763136613587.jpg"
global.logo4 = "https://files-furina.stellarwa.xyz/1763136613834.jpg"
global.logo5 = "https://files-furina.stellarwa.xyz/1763136615365.jpg"
global.logo7 = "https://files-furina.stellarwa.xyz/1763136615901.jpg"
global.logo8 = "https://files-furina.stellarwa.xyz/1763136621219.jpg"
global.rule = fs.readFileSync('./src/rule.jpg')
global.welcome = "https://files-furina.stellarwa.xyz/1763136621896.jpg"
global.adios = "https://files-furina.stellarwa.xyz/1763136622229.jpg"

global.photoSity = [imagen8, imagen1, imagen4, imagen6]

global.languaje = 'Es'
global.nameqr = 'Marine ch'
global.sessions = 'Session/Hutao'
global.jadi = 'Session/SubBot'

global.channel = {
channel1: "120363404567175987@newsletter",
channel2: "120363404567175987@newsletter",
channel3: "120363404567175987@newsletter",
channel4: "120363404567175987@newsletter",
channel5: "120363404567175987@newsletter"
}

global.gp4 = 'https://chat.whatsapp.com/GJiDeiFHsdeAQD0uoDBpEI?mode=hqrt3'
global.gp1 = 'https://chat.whatsapp.com/J0HJBNlznVNIrqHgz5nGsX?mode=hqrt3'
global.channel = 'https://whatsapp.com/channel/0029Vb6iPeUD8SE7OCpohu25'
global.md = 'https://github.com/CheirZ'
global.correo = 'kellyreyesgarcia3@outlook.com'
global.cn = 'https://chat.whatsapp.com/DFsGVZPO94QJze8NIG1srE?mode=hqrt3'

global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
