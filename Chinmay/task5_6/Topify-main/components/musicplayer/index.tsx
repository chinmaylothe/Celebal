import React, { useState, useEffect, useContext } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentPlaylistState,
  playingTrackState,
  playState,
  recentlyPlayedTracks,
} from "../../atoms/playerAtom";
import { Track as TrackType } from "../../types/body.types";
import Track from "./Track";
import Controls from "./Controls";
import Player from "./Player";
import Seekbar from "./Seekbar";
import VolumeBar from "./VolumeBar";
import TrackContext from "../../hooks/trackContext";

const MusicPlayer = () => {
  const [play, setPlay] = useRecoilState(playState);
  const playingTrack = useRecoilValue(playingTrackState);
  const recentlyPlayed = useRecoilValue(recentlyPlayedTracks);
  const currentPlaylist = useRecoilValue(currentPlaylistState);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const { chooseTrack } = useContext(TrackContext);

  const currentTrackKey = playingTrack?.key;
  const index = currentPlaylist.findIndex(
    (track: TrackType) => track.key === currentTrackKey
  );

  const handleKeyPress = (event: any) => {
    const keypressed = event?.key.toLowerCase();

    if (event.key == " "){
      event.preventDefault()
      setPlay(prev=>!prev)

    } else if (keypressed == "m"  ){ 
       if (volume === 0) setVolume(()=>0.5)
       else setVolume(()=>0)
      
    }else if (keypressed == "arrowright") setSeekTime(()=>appTime + 5)
     else if (keypressed == "arrowleft") setSeekTime(()=>appTime - 5)
     else if (keypressed == "l") handleNextSong()
     else if (keypressed == "j") handlePrevSong()
  }
  
  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);
    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    localStorage.setItem("recentlyPlayed", JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  const handlePlayPause = () => {
    setPlay(!play);
  };

  const handleNextSong = () => {
    setPlay(prev=>!prev)
    if (shuffle) {
      chooseTrack(
        currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)],
        currentPlaylist
      );
    } else if (repeat) {
      chooseTrack(playingTrack, currentPlaylist);
    } else {
      const nextTrack =
        currentPlaylist[index === currentPlaylist.length - 1 ? 0 : index + 1];
      chooseTrack(nextTrack, currentPlaylist);
    }
    setTimeout(()=>{
      setPlay(true)
    }, 100)
  };
  
  const handlePrevSong = () => {
    const nextTrack =
      currentPlaylist[index === 0 ? currentPlaylist.length - 1 : index - 1];
    chooseTrack(nextTrack, currentPlaylist);
  };

  return (
    <div className="bg-[#181818] flex items-center justify-between px-5 py-2.5 rounded-t-2xl relative sm:space-x-20 md:space-x-0 scrollbar-hide">
      <Track play={play} playingTrack={playingTrack} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          play={play}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentPlaylist={currentPlaylist}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <Seekbar
          value={appTime}
          min={0}
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          playingTrack={playingTrack}
          volume={volume}
          play={play}
          seekTime={seekTime}
          repeat={repeat}
          onEnded={handleNextSong}
          onTimeUpdate={(event: any) => setAppTime(event.target.currentTime)}
          onLoadedData={(event: any) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min={0}
        max={1}
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default MusicPlayer;
