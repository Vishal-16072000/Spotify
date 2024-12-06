import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play-button.png'
import pause_icon from './pause.png'
import plays_icon from './playing.png'
import prev_icon from './previous.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './library.png'
import zoom_icon from './expand.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './miniplayer.png'
import queue_icon from './queue.png'
import volume_icon from './volume-up.png'
import arrow_right from './arrow-right.png'
import arrow_left from './arrow-left.png'
import spotify_logo from './spotify.png'
import clock_icon from './wall-clock.png'

import manjil_kedarnath from './manjil-kedarnath.jpg'
import Arijit_ultimate from './Arijit_ultimate.jpeg'
import Best_of_2023 from './Best_of_2023.jpeg'
import Best_of_Sad from './Best_of_Sad.jpeg'
import Dumdaar_hits from './Dumdar.jpeg'
import Best_of_Bollywood from './Best_of_bollywood.jpeg';
import Karan_Aujla from './Karan_Aujla.jpeg'
import Best_of_bollywood from './Best_of_bollywood.jpeg'
import Top_50_songs from './Top_50_songs.jpeg'
import filhal from './filhal.jpeg'
import Honey_Singh from './honey_singh.jpeg'
import Jaan_bn_gaye from './Jaan_bn_gaye.jpeg'
import Lamborghini from './Lamborghini.jpeg'
import sajni_re from './sajni.jpeg'
import dekho_na from './dekho-na.jpeg'
import millionaire from './millionaire.jpeg'
import Aayat from './Aayat-Bajirao.jpg'

import filhal_song from './Filhall B Praak 128 Kbps.mp3'
import Aabaad_Barbaad_song from './Aabaad Barbaad 128 Kbps.mp3'
import Aayat_song from './Aayat Bajirao Mastani 128 Kbps.mp3'
import Bulleya_song from './Bulleya Ae Dil Hai Mushkil 128 Kbps.mp3'
import Lamborghini_song from './Lamborghini.mp3'
import Manjil_kedarnath_song from './Manzil Kedarnath Jeetu Sharma 128 Kbps.mp3'
import Sajni_re_song from './Sajni Re.mp3'
import Jo_tum_mere_ho_song from './Jo_tum_mere_ho.mp3'
import Millionaire_song from './Millionaire - Yo Yo Honey Singh.mp3'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    pause_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    queue_icon,
    volume_icon,
    arrow_right,
    arrow_left,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {
        id:0,
        name: "Arijit Singh",
        image: Arijit_ultimate,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#2a4365"
    },
    {
        id : 1,
        name: "Best of 2023",
        image: Best_of_2023,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#22543d"
    },
    {
        id : 2,
        name : "Filhal",
        image : filhal,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#6a12b4",
    },
    {
        id : 3,
        name : "Dumdaar Hits",
        image : Dumdaar_hits,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#742a2a"
    },
    {
        id : 4,
        name : "Best of Sad",
        image : Best_of_Sad,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#231654"
    },
    {
        id : 5,
        name : "Yo Yo Honey Singh",
        image : Honey_Singh,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#13548a"
    },
    {
        id : 6,
        name : "Hint ft. Karan Aujla",
        image : Karan_Aujla,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#742895"
    },
    {
        id : 7,
        name : "Best of Bollywood",
        image : Best_of_bollywood,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#742a5c"
    },
    {
        id : 8,
        name : "Top 50 Hindi Songs",
        image : Top_50_songs,
        desc : "Your weekly update of the most played tracks",
        bgColor : "#123412"
    },
]

export const songsData = [
    {
        id : 0,
        name : "Manjil Kedarnath",
        image : manjil_kedarnath,
        file : Manjil_kedarnath_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "04:04"
    },
    {
        id : 1,
        name : "Bulleya Ae Dil Hai Mushkil",
        image : Best_of_Bollywood,
        file : Bulleya_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "05:49"
    },
    {
        id : 2,
        name : "Filhall B Praak",
        image : filhal,
        file : filhal_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "04:15"
    },
    {
        id : 3,
        name : "Lamborghini",
        image : Lamborghini,
        file : Lamborghini_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "02:40"
    },
    {
        id : 4,
        name : "Aabad Barbad",
        image : Jaan_bn_gaye,
        file : Aabaad_Barbaad_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "05:09"
    },
    {
        id : 5,
        name : "Sajni Re",
        image : sajni_re,
        file : Sajni_re_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "03:14"
    },
    {
        id : 6,
        name : "Jo tum mere ho",
        image : dekho_na,
        file : Jo_tum_mere_ho_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "05:46"
    },
    {
        id : 7,
        name : "Millioaire",
        image : millionaire,
        file : Millionaire_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "03:19"
    },
    {
        id : 8,
        name : "Aayat -  Bajirao Mastani",
        image : Aayat,
        file : Aayat_song,
        desc : "Put a smile on your face with these happy tunes",
        duration : "04:22"
    },
]