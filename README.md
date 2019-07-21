# snot
A Discord snooping bot.


## Description
This discord bot allows you to directly log and store discord messages sent in texts channels viewable by the bot in a .txt document correponding to the channel it was written in. This bot is supposed to be used in a RAT (Remote Access Trojan) situation. You may ask: well if you're able to get the bot in the discord you have admin permissions anyway! Well I made it for a reason and that is deffenitly not always the case. This bot is completely under the radar, as it sets the bot client's status as invisable. This bot can also work while there is another bot running off the same token with no interfearing.


# Use
As this discord bot obiously requires the use of outside repositories there is a short install process that you will have to do.

- Download the lastest release from the releases section, and extract it to the directory of your chosing.
  > Before moving on I would recommend having [VSCode](https://code.visualstudio.com/download) installed for editing, easy command line access and viewing of the .txt log files.
- Next, Download [Node.Js](https://nodejs.org/en/download/) this is required as this is how the bot is ran.
- Once installed, navigate to the root directory of the project (where you extracted it) using command prompt and run the following command : `npm install`
- This will install all required resources needed to run the bot.
- Once downloaded run this command. (assuming your still in the root directory of the program with command prompt): `node . [TOKEN]`
    > The [TOKEN] should be replaced with the token of the bot client you're trying to log from. Seeing as the token is defined on run you can run muilple instaces of this program to use muiltple different bot clients as monitors.
- All messages will now be logged to the "Guilds" folder. Happy snooping!
