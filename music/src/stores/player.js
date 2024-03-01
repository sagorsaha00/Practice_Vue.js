import { defineStore } from "pinia"
<<<<<<< HEAD
import { Howl } from "howler"
import helper from "../includes/helper";
=======
import {Howl} from "howler"
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
 

export default defineStore("player", {
    state:() => ({
        current_song:{},
        sound:{},
<<<<<<< HEAD
        seek:"00:00",
        duration:"00:00",
        playerProgress:"0%"
    }),
    actions:{
        async newSong(song) {
            if(this.sound instanceof Howl) {
                this.sound.unload();
            }
=======
    }),
    actions:{
        async newSong(song) {
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
            this.current_song = song;

            this.sound = new Howl({
                src:[song.url],
                html5:true
            })

            this.sound.play();
<<<<<<< HEAD


            this.sound.on("play", () => {
                requestAnimationFrame(this.progress);
            })
        },
        async toggleAudio() {
            if(!this.sound.playing) {
                return;
            }
            if(this.sound.playing()) {
                this.sound.pause();
                
            } else {
                this.sound.play()
            }
        },
        progress() {
        this.seek = helper.formatTime(this.sound.seek());
        this.duration = helper.formatTime(this.sound.duration());

        this.playerProgress = `${
            (this.sound.seek() / this.sound.duration()) * 100
        }%`


        if(this.sound.playing()) {
            requestAnimationFrame(this.progress)
        }  
        },
        updateSeek(event) {
             if(!this.sound.playing) {
                return;
             }


            const { x, width } = event.currentTarget.getBoundingClientRect();
            const clickX = event.clientX - x;

            const percentage = clickX / width;
            const seconds  = this.sound.duration() * percentage;

            this.sound.seek(seconds);
            this.sound.once('seek',this.progress);
        }
    },
        //  playing:(state) => {
        //     if(this.sound.playing) {
                 
        //         return state.sound.playing();
            
                
        //     }
        //     return false;
            
             
     
       
        getters:{
            playing:(state) => {
                if(this.sound.playing) {
                    return state.sound.playing();
                }
                return false;
            }
        }

      
    // },
     
     
    
    // getters:{
    //     playing:(state) => {
    //         if(this.sound.playing) {
    //             return state.sound.playing();
    //         }
    //         return false;
    //     }
    // }
=======
        }
    }
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
})