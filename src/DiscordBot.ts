import * as dotenv from 'dotenv';
dotenv.config()

import {Client, Message, Channel, TextChannel} from "discord.js";
import * as schedule from "node-schedule";
import {Shuffle} from "./Shuffle"
var client = new Client




export class Team_Rac_Mom_Jor {
		private client: Client
		private config: any

		constructor() {
			this.client = new Client()
			this.config = process.env
		}

		public start(): void {
			  
      //Let"s set an activity to our bot;
				this.client.on('ready', () => {
					
					console.log(`Logged in as ${ this.client.user.tag }`)
					this.client.user.setActivity(this.config.activity)
				})
       
         //when one say "!hello" in French, as well as in English or French in any Channel, the bot reply: welcome to the Geeks' Channel :) ! 
		
				this.client.on('message', (message: Message) => {
						if (message.author.id !== this.client.user.id) {
						      
                                if ((message.content == this.config.prefix +"hello") || (message.content == this.config.prefix +"guten tag" )||(message.content == this.config.prefix + "bonjour" )|| (message.content ==this.config.prefix +"salut")) { 
                                    message.reply("Bonjour, soyez les bienvenus au salon des geeks !");
                                this.config.prefix 
                            
                                
                                }
						}
				})
        
        // ok, would you like something more funy ?Please find the most funniest jokes both in English and Fransh that I have found, which appear randomely in the Channel when you ask for.
        const jokes = [
          'Trois amis, un africain, un européen et un chinois, partent à l’aventure en forêt amazonienne. Au cours de leur excursion, ils se font capturer par des Amazones. La chef de tribu leur dit : « Si on additionne la taille de vos zizis et que ça ne dépasse pas 45 cm, on vous découpe. » Tour à tour : – L’africain montre son zizi : 25 cm – L’européen montre le sien : 12 cm. – Le chinois montre le sien : 8 cm. La chef de tribu leur dit :« D’accord, vous pouvez partir. » Une fois éloignés de la tribu, le chinois dit à ses camarades :« Pfiouu les mecs ! Heureusement que j’ai bandé sinon on était foutus !',
          'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
          '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
          'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
          'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
          'If you listen to a UNIX shell, can you hear the C?',
          'Une vieille cougar, devenue riche grâce à la fortune héritée de son défunt mari, souhaite revivre les joies de l’orgasme et organise un concours : le jeune étalon qui la fera jouir remportera 100 000 euros. 3 jeunes : un européen, un africain et un chinois participent au concours.L’européen dit :– A moi la fortune !Il se rend dans la chambre de la cougar et ressort quelques minutes plus tard, déçu de n’avoir pas réussi. A son tour, l’africain dit : – A moi la fortune !Il se rend à son tour dans la chambre de la cougar, et ressort cette fois-ci quelques dizaines minutes plus tard, mais avec une tête de vaincu. Le chinois entre à son tour dans la chambre de la cougar, et une heure plus tard, ressort avec la mallette de 100 000 euros. L’européen et l’africain lui demandent en choeur : – Comment t’as fait ? – Moi utiliser ma tête !',
          'Why do Java programmers have to wear glasses? Because they don’t C#.',
          'What sits on your shoulder and says “Pieces of 7! Pieces of 7!”? A Parroty Error.',
          'When Apple employees die, does their life HTML5 in front of their eyes?',
          'Without requirements or design, programming is the art of adding bugs to an empty text file.',
          'Before software can be reusable it first has to be usable.',
          'Un africain, perdu dans le désert, est sur le point de mourir de soif. Il trouve une lampe et s’empresse de l’astiquer dans un dernier espoir. Un génie apparaît soudainement et lui dit :– Donne-moi trois vœux à exaucer.– Je souhaite être dans un endroit où il y a beaucoup d’eau. Je voudrais être blanc et voir beaucoup de fesses.Le génie s’exécute et le transforme en… chiottes',
          'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
          'I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.',
          'There are two ways to write error-free programs; only the third one works.',
          'Comment fait-on pour rentrer douze Belges dans un coffre de voiture ? On jette une frite à l’intérieur.',
          'Qui a inventé les sous-marins ? Les Belges en essayant de construire un bateau.',
          'Pourquoi n y a-t-il pas de portes aux toilettes belges ? Car ils ont peur qu’on regarde par le trou de serrure.',
        
        ];
        this.client.on('message', (msg:Message) => {
          if (msg.content === this.config.prefix +'joke') {
            msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)]);
          }
        });

        var team=['Mohamed',"Rachid","Mouny",'Carina','JordanD','Tiphaine', 'JordanT','Joshua', 'Maria', 'Morjane', 'Bernard', 'Thibault','Farouk','Marwa', 'Souad','Bart', 'Maxime', 'Youcef','Adlane','Biben']



        this.client.on('message', (msg: Message) => {
          if (msg.content === this.config.prefix +'team') {
            return msg.reply(Shuffle(team))
          };
          
        });

        // CRON

        const job = schedule.scheduleJob('28 * * * *', function () {
        
          console.log("cron is on the street")
        //const channel =client.channels.cache.get("821089523689062403");
        let channel = <TextChannel>client.channels.cache.get("821342065844682761")

        channel.send('PAUUUUUUUUUUUUUUUUUUSE! ETEIGNEZ LES VMS !');
        }
);



				this.client.login(this.config.token)
		}
	}















client.login(process.env.token)
