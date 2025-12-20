import "./Classroom.css";
import { Board } from "./Board/Board";
import { UseVoiceButton } from "../Buttons/UseVoiceButton";
import { InputField } from "../InputField/InputField";
import { LoginAnzeige } from "../LoginScreen/LoginAnzeige";
import "../LoginScreen/LoginAnzeige.css";
import { LogoutButton } from "../LoginScreen/LogoutButton";
import { Sidebar } from "./Sidebar/Sidebar";
import { SidebarButton } from "../Buttons/SidebarButton";
import { useState } from "react";
import TextToSpeech from "../TextToSpeech/TextToSpeech";

 export const Classroom = ({username}) => {

  

  return (
    <div className="classroom">
      
      <div className="wall" />
      <div className="floor" />

      <div className="board-wrapper">
        <Board text="Dies ist nur ein kurzer Platzhaltertext, um die Text to Speech Funktionalität zu testen." />
        <div className="tts">
          <TextToSpeech text="Dies ist nur ein kurzer Platzhaltertext, um die Text to Speech Funktionalität zu testen." lang="de-DE" />
        </div>
        <div className="input-wrapper">
          <InputField /> 
          <UseVoiceButton  />
        </div>
       

      </div>
      <Sidebar />
      <SidebarButton />
      <LogoutButton />
      <LoginAnzeige username={username} />
    </div>
  );
}

