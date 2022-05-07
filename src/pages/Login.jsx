import { useEffect, useState } from 'react';
import { ReactMic } from '@cleandersonlobo/react-mic';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import './loginstyle.css'

const Login = () => {
  const [record, setRecord] = useState(false)
  const [audio, setAudio] = useState('') 
  const [holder, setHolder] = useState([])
  console.log(`🤖 ~ Login ~ holder`, holder)

useEffect(() => {
  setHolder([...holder, audio])
}, [audio])

  const start = () => setRecord(true)
  const stop = () => setRecord(false)

  const onStop = (recordedBlob) => {
    setAudio(recordedBlob.blobURL)
  }


  return (
    <>
      <h1>Login</h1>
      <Link to="/register" >
        Registre-se
      </Link>
      {holder && holder.map((value) =>  {
        if (value !== '') {
          return ( 
             <ReactAudioPlayer 
             src={value}
             controls
             />

             )
            }
      })}
    
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}

          strokeColor="transparent"
          backgroundColor="transparent" />
        <button onClick={start} type="button">Start</button>
        <button onClick={stop} type="button">Stop</button>
      

      <ReactPlayer 
      url='https://www.youtube.com/watch?v=IKydZtF9I3w'
      width='350px'
      height='197px'
      style={{position: 'absolute', bottom: '20px', left: '20px'}}
      />
    </>
  );
};

export default Login;
