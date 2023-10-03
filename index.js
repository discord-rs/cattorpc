const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

const images = [
    'url here, gif or png.',
    'url here, gif or png.',
    'url here, gif or png.',
    'url here, gif or png',
    // Add more image URLs as needed, can be a gif, a png, a jpg, whatever.
];

const names = [
    'name1',
    'name2',                                     // KEEP IN MIND: you need the same amount of names as you need images. you cant have 5 images and 4 names.
    'name3',
    'name4',
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
    rpc.setType('STREAMING'); // can stay as "streaming", can also put as playing and competing etc etc
    rpc.setURL('https://www.twitch.tv/whatever');
    rpc.setDetails(name || 'name here');
    rpc.setName('do whatever, if u have a streaming status it wont show');
    rpc.setState('.gg/loudhouse');
    rpc.setAssetsLargeImage(imageUrl || 'image here, this will be used if no image urls are set at the beginning of the code.');
    rpc.setAssetsLargeText('large text here');
    rpc.setAssetsSmallImage('small image link here, again can be gif or png it doesnt matter');
    rpc.setAssetsSmallText('small text here');

    client.user.setActivity(rpc);
    console.log(`RPC enabled. Image URL: ${imageUrl}, Name: ${name}`);
}
// Replace with your token.
client.login('your token here');

