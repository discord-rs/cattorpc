const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

const images = [
    'https://cdn.discordapp.com/attachments/1131999775194108094/1158189640902266950/oSHRqOH.gif?ex=651b57a8&is=651a0628&hm=08f43171a19445e851e82ee991c32c3b48f2d2e9c681d72d4c3342c507c4a7b8&',
    'https://cdn.discordapp.com/attachments/1140009938744254564/1158203851019661312/RCKhFUe.gif?ex=651b64e4&amp;is=651a1364&amp;hm=e17e1c083ff0eb0a085f3b27233d47f57566ad39b2764d86e052e86dda7ad25b&amp;',
    'https://media.discordapp.net/attachments/1140009938744254564/1158203851468443738/xOBVBqc.gif?ex=651b64e4&is=651a1364&hm=fa0e055ae6af1e7a33332ba219bfbbf1b30bb156e1ea81a4cd65a7f0415f5e06&=&width=1132&height=1000',
    'https://cdn.discordapp.com/attachments/1158026723892416614/1158229067292749896/djH45tp.gif?ex=651b7c60&is=651a2ae0&hm=9197ed6ce16516d63fbe2bc9e1e2b97be3371b8e2f4d3035fa8e30a2ad627c98&',
    // Add more image URLs as needed
];

const names = [
    'rs',
    '#FOG',                                     // KEEP IN MIND: you need the same amount of names as you need images. you cant have 5 images and 4 names.
    'Yeat - Turban',
    'Ave Satanas',
    // Add more names as needed
];

let currentIndex = 0;

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);
    // Change presence every 30 seconds
    setInterval(() => {
        setPresence(images[currentIndex], names[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
    }, 30000); // 30 seconds in milliseconds
});

function setPresence(imageUrl, name) {
    const rpc = new Discord.RichPresence();
    rpc.setApplicationId('534203414247112723');
    rpc.setType('STREAMING');
    rpc.setURL('https://www.twitch.tv/898_rs');
    rpc.setDetails(name || 'rs');
    rpc.setName('rs');
    rpc.setState('.gg/loudhouse');
    rpc.setAssetsLargeImage(imageUrl || 'https://cdn.discordapp.com/attachments/1131999775194108094/1158189640902266950/oSHRqOH.gif?ex=651b57a8&is=651a0628&hm=08f43171a19445e851e82ee991c32c3b48f2d2e9c681d72d4c3342c507c4a7b8&');
    rpc.setAssetsLargeText('#898 ');
    rpc.setAssetsSmallImage('https://media.discordapp.net/attachments/1139727962527248444/1150959290065092718/a_83872ca65abf51900ed46aa68d8f575f.gif?ex=6516ca9e&is=6515791e&hm=28ecb1ab80346ef0f0092ce3faf5b95e8ea8b1f9e136d83c45ff820ea1a29494&=&width=242&height=242');
    rpc.setAssetsSmallText('#FOG');

    client.user.setActivity(rpc);
    console.log(`RPC enabled. Image URL: ${imageUrl}, Name: ${name}`);
}
// Replace 'YOUR_TOKEN_HERE' with your actual bot token
client.login('');

