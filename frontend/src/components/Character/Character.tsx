import React, { useEffect, useRef } from 'react';
import './Character.css';
// @ts-ignore
import { TalkingHead } from "../../../modules/talkinghead.mjs";

const Character: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headRef = useRef<any>(null);

    useEffect(() => {
        
        if (containerRef.current && !headRef.current) {
            
            const head = new TalkingHead(containerRef.current, {
                ttsEndpoint: "native", // nutzt browser-sprachausgabe
                cameraView: "upper",   // kamera-fokus Oberkörper
                dataRoot: "/modules/"  // pfad zu lip-sync modulen 
            });

            headRef.current = head;

            
            head.showAvatar({
                url: "/RosalindeFranklinWebsiteExport2.glb", 
                body: 'F',                 // weiblicher avatar-typ 
                avatarMood: 'neutral',     // stimmung bei start
                lipsyncLang: 'de'          // deutsche lippensynchronisation
            }).then(() => {
                console.log("Avatar Rosalind Franklin ist bereit!");
            }).catch((error: any) => {
                console.error("Fehler beim Laden des Avatars:", error);
            });

            // globale funktion zum sprechen
            (window as any).avatarSpreche = (text: string) => {
                if (text) {
                    head.speakText(text); // synchronisiert sprache und lippen
                }
            };
        }
    }, []);

    return (
        <div className="character-container">
            {/* Avatar gerendert */}
            <div 
                ref={containerRef} 
                className="character-avatar" 
                style={{ width: '100%', height: '100%' }}
            />
            <div className="character-name">
                Rosalind Franklin
            </div>
        </div>
    );
};

export default Character;