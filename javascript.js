
//INITIALIZING
let songIndex=0;
let audioEle=new Audio('songs/music0.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let song=[
    {Songname:"Ishq Hai-Rahat Fateh Ali",filePath:"songs/music0.mp3",coverPath:'images/cover.jpg'},
    {Songname:"Chand-Udit Narayan",filePath:"songs/music1.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Bheegi Bheegi Raton Me",filePath:"songs/music2.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Janae Kahan Gaye woh din",filePath:"songs/music3.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Meri Bheegi Bheegi Si-Anamika",filePath:"songs/music4.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Khuda-Rahat Fateh Ali",filePath:"songs/music5.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Dillagi",filePath:"songs/music6.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Tuta Pull wahan",filePath:"songs/music7.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Faasle",filePath:"songs/music8.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Mohbhang",filePath:"songs/music9.mp3",coverPath:"images/cover.jpg"},
    {Songname:"Choo Lo",filePath:"songs/music10.mp3",coverPath:"images/cover.jpg"}
]

// Listen to Events
audioEle.addEventListener('timeupdate',()=>{
    // seekbar
    progress=parseInt((audioEle.currentTime/audioEle.duration)*100)
    myProgressBar.value=progress
})
myProgressBar.addEventListener('change',()=>{
    audioEle.currentTime=(myProgressBar.value*audioEle.duration/100);
})
songItem.forEach((element,i)=>{
    element.getElementsByClassName("SongName")[0].innerText =song[i].Songname; 
})
const MakeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e);
        MakeAllPlay();
        songIndex=parseInt(e.target.id);
        audioEle.src = `songs/music${songIndex}.mp3`;
        masterSongName.innerText = song[songIndex].Songname;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioEle.currentTime = 0;
        audioEle.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');       
    })
})
//next
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioEle.src=`songs/music${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex].Songname;
    audioEle.currentTime=0;
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    MakeAllPlay();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
})
//Previous
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioEle.src=`songs/music${songIndex}.mp3`;
    masterSongName.innerText=song[songIndex].Songname;
    audioEle.currentTime=0;
    audioEle.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    MakeAllPlay();
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');('fa-play-circle');
})
// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioEle.paused || audioEle.currentTime<=0){
        audioEle.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-pause-circle');('fa-play-circle');
    }
    else{
        audioEle.pause()
        gif.style.opacity=0;
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-pause-circle');
        document.getElementById(songIndex).classList.add('fa-play-circle');
    }
})