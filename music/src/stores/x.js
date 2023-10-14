
const ctrlicon = document.getElementById("ctrlicon")

function playPause() {
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play")
    } else{
        song.play();
        ctrlicon.classList.add("fa-pause")
        ctrlicon.classList.remove("fa-play")
    }
}