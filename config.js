const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760105256";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/b1ikpr.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94760105256,94750177369";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_53_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICA5MixcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMFk1OXZHYm9ybE9kYVIxc1A5c2VLbWFuV25vMUhjUmVURzdpaUpoeHZ6ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmZnQ0RQUE5Ud3lPaTY3X0lIVUVTZ1wiLFxuICBcInBob25lSWRcIjogXCJiM2NjODJiMy05MTUxLTRhYjgtODJlMi04M2JkM2RjNzE0ZmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjI4LFxuICAgICAgMTg3LFxuICAgICAgMjAyLFxuICAgICAgNSxcbiAgICAgIDE3MyxcbiAgICAgIDE4OSxcbiAgICAgIDE3MSxcbiAgICAgIDIxLFxuICAgICAgMTg2LFxuICAgICAgNSxcbiAgICAgIDcxLFxuICAgICAgNSxcbiAgICAgIDI0MCxcbiAgICAgIDIyNSxcbiAgICAgIDUyLFxuICAgICAgMCxcbiAgICAgIDkzLFxuICAgICAgMjUxLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTgzLFxuICAgICAgMTY4LFxuICAgICAgODEsXG4gICAgICAyMTksXG4gICAgICAxODksXG4gICAgICAxMzgsXG4gICAgICA1MCxcbiAgICAgIDgsXG4gICAgICA5NSxcbiAgICAgIDE3OCxcbiAgICAgIDEzMCxcbiAgICAgIDY3LFxuICAgICAgMTQ0LFxuICAgICAgNzMsXG4gICAgICAxMzYsXG4gICAgICAxMjIsXG4gICAgICAxMzAsXG4gICAgICAxNSxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFWk1XWUJYNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTAxNzczNjk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MzI5NzUzMjU0NzIwNzoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOQzM1NUFFRU43Q29ia0dHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkcvV0h3QVVZMGNMZGlFYzRKRFpaWkNDb3dJWTBtNm1GWGtwN0NQR1k2eFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1pKdnNpa0FWSS9HWEd3TTFGajluKzFVZWNFT0Q2VmNEOGdWZGhIek5YSGVuckZqVnlPSk83c0RFRjZScGdQUnIrd0lyU0dkcTBMSlVTQ1VCMGxXRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWxvS1FXVVlkZEkzTTFxOWIvNWIvREViMncwSEE3VXFzR2hvZm5LME15RkRSdHQ1azN0MjQ5alhWQlhkZ00wY2hiVlJLUHZKajRDUkRlTldZdFZMQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTAxNzczNjk6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY5OTYxOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂",
  packname: process.env.PACK_NAME || "ɪʟꜱ│xLEOㅤ戈",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-4bfcc6c0-4b4e-4e7a-a049-a842a6b4ad1e",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "anjana lelum",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
