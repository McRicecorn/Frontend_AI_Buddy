import "./Classroom.css";
import { Board } from "./Board/Board";
import { UseVoiceButton } from "../Buttons/UseVoiceButton";
import { InputField } from "../InputField/InputField";
import { LoginAnzeige } from "../LoginScreen/LoginAnzeige";
import "../LoginScreen/LoginAnzeige.css";
import { LogoutButton } from "../LoginScreen/LogoutButton";

 export const Classroom = ({username}) => {
  return (
    <div className="classroom">
      <div className="wall" />
      <div className="floor" />

      <div className="board-wrapper">
        <Board />
        <div className="input-wrapper">
          <InputField /> 
          <UseVoiceButton  />
        </div>
       

      </div>
      <LogoutButton />
      <LoginAnzeige username={username} />
    </div>
  );
}

