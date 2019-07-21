import * as d from "discord.js";
import * as fs from "fs";
import * as p from "path";

const b: d.Client = new d.Client();

b.on("ready", () => {
    console.log("Connected to discord with token: " + process.argv[2].toString() + ".");
    b.user.setStatus('invisible');
    fs.access(p.join(__dirname, "Guilds"), fs.constants.F_OK, (err) => {
        if (err) {
            console.log('Failed to find \"Guilds\" folder. Attemping to create.');
            fs.mkdir(p.join(__dirname, "Guilds"), (err) => {
                if (err) throw err;
            })
            console.log('\"Guilds\" folder created.');
        }
    });
});

b.login(process.argv[2].toString())

b.on("message", async message => {
    fs.mkdir(p.join(__dirname, "Guilds", message.guild.name), (err) => {
        if (err && err.code != 'EEXIST') throw err;
    })
    fs.mkdir(p.join(__dirname, "Guilds", message.guild.name, message.channel.parent.name), (err) => {
        if (err && err.code != 'EEXIST') throw err;
    });
    fs.open(p.join(__dirname, "Guilds", message.guild.name, message.channel.parent.name, message.channel.name + ".txt"), 'a', (err, fd) => {
        if (err && err.code != "ENOENT") throw err;
        var am = "[ " + message.createdAt + " ] " + message.author.username + ": " + message.content
        if (message.attachments) {
            message.attachments.forEach(attachment => {
                am = am + " " + attachment.filename + "(" + attachment.url + ")"
            });
        }
        fs.appendFile(fd, am + "\r\n", 'utf8', (err) => {
            fs.close(fd, (err) => {
                if (err) throw err;
            });
            if (err) throw err;
        });
        console.log("logged 1 message in "+p.join(__dirname, "Guilds", message.guild.name, message.channel.parent.name, message.channel.name + ".txt"))
    });
});