import AppLayout from "../../layouts/AppLayout";
import SideBarButton from "../../layouts/components/SideBarButton";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import SoundAudioContext from "../../components/Audio/SoundAudioContext";

import IconBack from "../../icons/back.svg";
import IconMusic from "../../icons/music.svg";
import IconMusicMute from "../../icons/music-mute.svg";
import IconImage from "../../icons/image.svg";
import IconImageMute from "../../icons/image-mute.svg";
import IconVideo from "../../icons/video.svg";
import IconVideoMute from "../../icons/video-mute.svg";
import ImageEffect from "./effect.svg";
import ImageEffectIcon from "./effect-icon.svg";
import ImageBackground from "./background.jpg";

import "./index.css";

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function BreathScreen() {
    SoundAudioContext('/Breathing_1min.mp3');
    const [location, setLocation] = useLocation();
    const [videoMute, setVideoMute] = useState(false);
    const [imageMute, setImageMute] = useState(false);
    const [musicMute, setMusicMute] = useState(false);

    const [state, setState] = useState(0)

    const interaction = 3;

    async function init() {
        await timeout(5000);

        setState(1);
        await timeout(3000);

        for (let i = 0; i < interaction; i++) {

            setState(2);
            await timeout(4000);

            setState(3);
            await timeout(7000);

            setState(4);
            await timeout(8000);
        }

        setState(5);
        await timeout(3000);

        setLocation("/end");
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <AppLayout menu={(
            <ul>
                <li>
                    <SideBarButton onClick={() => { setVideoMute(!videoMute) }} icon={videoMute ? IconVideoMute : IconVideo}>Видео</SideBarButton>
                </li>
                <li>
                    <SideBarButton onClick={() => { setMusicMute(!musicMute); SoundAudioContext.close() }} icon={musicMute ? IconMusicMute : IconMusic}>Музыка</SideBarButton>
                </li>
                <li>
                    <SideBarButton onClick={() => { setImageMute(!imageMute) }} icon={imageMute ? IconImageMute : IconImage}>Фон</SideBarButton>
                </li>
                <li>
                    <SideBarButton href={"/chooseBreath"} icon={IconBack}>Назад</SideBarButton>
                </li>
            </ul>
        )}>
            <div className="Breath">
                {!imageMute && (
                    <img className="Breath__background" src={ImageBackground} alt="Фон"/>
                )}
                {!videoMute && (
                    <div className="Breath__video">
                        <video muted={true} autoPlay={true} loop={true}>
                            <source src="/Hackaton_Sber.mp4" type='video/mp4'/>
                        </video>
                    </div>
                )}

                {state === 0 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Приятных снов
                        </div>
                        <div className="Breath__text">
                            Спокойных отход ко сну. Техника 4-7-8
                        </div>
                        <div className="Breath__help">
                            <ol>
                                <li>Вдыхайте через нос 4 секунды</li>
                                <li>Задержите дыхание на 7 секунд</li>
                                <li>Выдыхайте  полностью через рот в течение 8 секунд со звуком «цс-с-с-с»</li>
                                <li>Повторите еще 3 раза весь цикл</li>
                            </ol>
                        </div>
                    </div>
                )}
                {state === 1 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Раслабьтесь, сконцентрируйтесь и начнем
                        </div>
                    </div>
                )}
                {state === 2 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Вдохните ...
                        </div>
                    </div>
                )}
                {state === 3 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Задержите дыхание ...
                        </div>
                    </div>
                )}
                {state === 4 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Медленно выдыхайте ...
                        </div>
                    </div>
                )}
                {state === 5 && (
                    <div className="Breath__block">
                        <div className="Breath__title">
                            Ух, хорошо то как
                        </div>
                        <div className="Breath__text">
                            За сегодня 1 минута
                        </div>
                    </div>
                )}


                <div className={"Breath__effect Breath__effect--state-" + state}>
                    <img className="Breath__effect-icon" src={ImageEffectIcon} alt="Иконка эффекта"/>
                    <img className="Breath__effect-image" src={ImageEffect} alt="Эффект"/>
                </div>
            </div>
        </AppLayout>
    )
}