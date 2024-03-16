import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../assets/meal.mp4'
const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className=" w-3/4 relative"> 
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center"> 
        <div
          className="w-20 h-20 border border-golden rounded-full flex justify-center items-center cursor-pointer" 
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
