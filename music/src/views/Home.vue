<template>
<<<<<<< HEAD
    <main>
=======
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
<!-- Introduction -->
<section class="mb-8 py-20 text-white text-center relative">
    <div class="absolute inset-0 w-full h-full bg-contain introduction-bg" style="background-image: url(assets/img/header.png)"></div>
    <div class="container mx-auto">
        <div class="text-white main-header-content">
<<<<<<< HEAD
            <h1 class="font-bold text-5xl mb-5"> {{ $t("home.listen") }}  </h1>
=======
            <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
            <p class="w-full md:w-8/12 mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                et dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
                suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
                pulvinar, fringilla lorem eget, ullamcorper urna.
            </p>
        </div>
    </div>

    <img class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full" src="/assets/img/introduction-music.png" />
</section>

<!-- Main Content -->
<section class="container mx-auto">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
<<<<<<< HEAD
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200" v-icon.right.yelllow="headphones-alt">
=======
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
            <span class="card-title">Songs</span>
            <!-- Icon -->
            <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
        </div>
        <!-- Playlist -->
        <ol id="playlist">

            <app-song-item v-for="song in songs" :key="song.docID" :song="song" />
        </ol>
        <!-- .. end Playlist -->
    </div>
</section>
<<<<<<< HEAD
</main> 
=======
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
</template>

 
<script>
import {
    songsCollection
} from '../includes/firebase';
<<<<<<< HEAD
import AppSongItem from '../components/SongItem.vue';
import i18n from '../includes/i18n'
export default {
    name: 'Home',
    components: {
        AppSongItem,
        i18n
=======
import AppSongItem from '../components/songitem.vue'
export default {
    name: 'Home',
    components: {
        AppSongItem
>>>>>>> 92e997fb40dae32ff317c1a3602b72a16df9dd44
    },
    data() {
        return {
            songs: [],
            maxPerPage: 3,
            pandingRequest: false,
        }
    },
    // async created() {
    //     const snapshots = await songsCollection.get();
    // },
    async created() {
        this.getSongs();

        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const {
                scrollTop,
                offsetHeight
            } = document.documentElement;
            const {
                innerHeight
            } = window;
            const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

            if (bottomOfWindow) {
                this.getSongs();
            }
        },
        async getSongs() {
            if (this.pandingRequest) {
                return;
            }

            this.pandingRequest = true;
            let snapshots;

            if (this.songs.length) {
                const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get();
                snapshots = await songsCollection.orderBy('modified_name').startAfter(lastDoc).limit(this.maxPerPage).get();
            } else {
                snapshots = await songsCollection.orderBy('modified_name').limit(this.maxPerPage).get();
            }

            snapshots.forEach((document) => {
                this.songs.push({
                    docID: document.id,
                    ...document.data(),
                });
            });
            this.pandingRequest = false;
        }
    }
}
</script>
