# DiscordBotTS

Dates:
For 5 consecutive days from 16rd of Mars to the 21rst of March. 

Why the project was launched ? :
The purpose of this group project was to allow us to work in a collaborative way. It was also an opportunity to better understand node js and to discover Typescript. 
What was launched 
A Discord bot, which has many functionalities. 

Difficulties: 
Typescript does not accept some Discord.js classes or one must specify the Channel type, for instance, TextChanne, or VoiceChannel
for instance, how to send a message in a particular Channel; 
In JS:
const channel = client.channels.cache.find(channel => Channel.name === "général");

in TS:
const channel = <TextChannel>client.channels.cache.get("821342065844682761")


Bot's functionnalities 
Team random Divider :
Take a list of students shuffle it and return the half: This was very useful to implement especial during the confinement. Indeed, half of the class had to stay at home when the other half 
came. A random selection was set-up for this purpose. Using a bot to render randomly a list of students how had to come in class was a convinient way, especially when evry student can see the random result in Discord;

Cron set-up: I have set-up Cron to fix the pause hour for my classmates, as we worked hard and couldn't see the time going...



