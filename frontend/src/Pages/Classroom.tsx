import React from 'react';
import Character from '../components/Character/Character';
import { ChatBoard } from '../components/Chatboard/Chatboard';
import InputBox from '../components/InputBox/InputBox';
import type { ChatMessage } from '../Interfaces';
import StatusBar from '../components/Status/StatusBar';
import { MediaPanel } from '../components/MediaPanel/MediaPanel';
import { MediaItem } from '../components/MediaItem/MediaItem';
import { MediaType } from '../enums/MediaType';
import './Classroom.css'

interface ClassroomProps {
  username: string;
  messages: ChatMessage[];
  onSend: (text: string) => void;
}

const dummyMedia1 = new MediaItem(
  '1',
  MediaType.IMAGE,
  'Photosynthese',
  'https://tse1.explicit.bing.net/th/id/OIP.NO4OZ6ocvEJ-jbWsXESazgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  'Übersicht zur Photosynthese'
)
const dummyMedia2 = new MediaItem(
  '2',
  MediaType.VIDEO,
  'Capibara',
  'https://www.youtube.com/watch?v=8Pj-YEQbojk',
  'Capibara Song'

)
let dummyMedia = [dummyMedia1,dummyMedia2]

const Classroom: React.FC<ClassroomProps> = ({ username, messages, onSend }) => {
  return (
    <div className="classroom">
      <div className='left'>
        <Character />
        <StatusBar username={username} />
      </div>

      <div className='middle'>
        <MediaPanel media={dummyMedia}/>
      </div>  


      <div className="right">
        <ChatBoard messages={messages} />
        <InputBox onSend={onSend} />
    
      </div>
    </div>
  );
};

export default Classroom;
