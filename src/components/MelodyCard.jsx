import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

const MelodyCard = ({ imageSrc, audioSrc, initialVolume = 0.5 }) => {
  const [volume, setVolume] = useState(initialVolume);
  const [isPlayed, setIsPlayed] = useState(false);
  const [audio, setAudio] = useState(new Audio(audioSrc));
  const audioRef = useRef(null);

  useEffect(() => {
    // Update volume when the state changes
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => setAudio(new Audio(audioSrc)), [])

  const playSound = () => {
    if(!isPlayed){
      // Set initial volume
      audio.volume = volume;

      // Set the audio element to the ref for future access
      audioRef.current = audio;

      // Play the audio and loop it infinitely
      audio.loop = true;
      audio.play()
        .then(() => console.log("Played"))
        .catch(error => {
          toast.error("Error Playing")
        });
      setIsPlayed(true);
    }
    else{
      audio.pause()
      setIsPlayed(false);
    }
  };

  return (
    <div>
      <div className='w-[120px] m-auto'>
        <div className={`${isPlayed ? 'bg-[#283618] bg-opacity-25' : ''} flex flex-col w-[120px] gap-2 items-center py-2 border border-slate-700`}>
          <img src={imageSrc} alt=" " className='w-[75px] h-[75px] cursor-pointer' onClick={() => playSound()} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            className='w-[75px] bg-slate-600 volume-slider'
            onChange={(e) => setVolume(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default MelodyCard;
