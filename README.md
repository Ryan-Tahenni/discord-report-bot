# discord-report-bot
-----------------------
This discord bot contains one command: !report @[Username] $-[Reason]

-----------------------
To use this bot (Windows):
  1. Download the repository
  2. Install node.js
  3. Open CMD
  4. Type the command: `cd [the path to your repository folder]`
  5. Install discord.js with this command: `npm install discord.js`
  6. Go to [discord.com/developers](https://discord.com/developers) and create a new application
  7. Inside the application, create a bot and copy the bot token
  8. Invite your bot to your server with the OAth2 URL generator (the scope is "bot" and the bot permissions are "Read Messages/View Channels" and "Send Messages"
  9. In the file index.js, at the last line of code (`client.login("")`), paste your discord bot token inside the string
  10. Run the index.js file
