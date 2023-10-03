// url1, name1, detail1, state1, etc etc will be your first rpc.
// url2, name2, detail2, state2, etc etc will be your second rpc.
// you get the point, don't you?

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
    'name2',
    'name3',
    'name4',
    // Add more names as needed
];

const details = [
    'detail1',
    'detail2',
    'detail3',
    'detail4',
    // Add more details as needed
];

const states = [
    'state1',
    'state2',
    'state3',
    'state4',
    // Add more states as needed
];

const largeTexts = [
    'large text 1',
    'large text 2',
    'large text 3',
    'large text 4',
    // Add more large texts as needed
];

const smallImages = [
    'small image 1 link here',
    'small image 2 link here',
    'small image 3 link here',
    'small image 4 link here',
    // Add more small image URLs as needed
];

const smallTexts = [
    'small text 1',
    'small text 2',
    'small text 3',
    'small text 4',
    // Add more small texts as needed
];

let currentIndex = 0;

client.on('ready', async () => {
    console.log(`${client.user.tag} is ready!`);
    // Change presence every 30 seconds
    setInterval(() => {
        setPresence(images[currentIndex], names[currentIndex], details[currentIndex], states[currentIndex], largeTexts[currentIndex], smallImages[currentIndex], smallTexts[currentIndex]);
        currentIndex = (currentIndex + 1) % images.length;
    }, 30000); // 30 seconds in milliseconds
});

function setPresence(imageUrl, name, detail, state, largeText, smallImage, smallText) {
    const rpc = new Discord.RichPresence();
    rpc.setApplicationId('534203414247112723');
    rpc.setType('STREAMING');
    rpc.setURL('https://www.twitch.tv/whatever');
    rpc.setDetails(detail || 'default detail');
    rpc.setName(name || 'default name'); // keep in mind that name wont be used with a streaming status.
    rpc.setState(state || 'default state');
    rpc.setAssetsLargeImage(imageUrl || 'default image URL, this will be used if no image URLs are set at the beginning of the code.');
    rpc.setAssetsLargeText(largeText || 'default large text');
    rpc.setAssetsSmallImage(smallImage || 'default small image link');
    rpc.setAssetsSmallText(smallText || 'default small text');

    client.user.setActivity(rpc);
    console.log(`RPC enabled. Image URL: ${imageUrl}, Name: ${name}, Detail: ${detail}, State: ${state}, Large Text: ${largeText}, Small Image: ${smallImage}, Small Text: ${smallText}`);
}

// Replace with your token.
client.login('your token here');


