import AppLayout from "../../layouts/AppLayout";
import SideBarButton from "../../layouts/components/SideBarButton";

import IconBack from "../../icons/back.svg";
import IconClose from "../../icons/close.svg";
import IconMenu from "../../icons/menu.svg";
import IconReload from "../../icons/reload.svg";
import IconRate from "../../icons/rate.svg";
import IconRateActive from "../../icons/rate-active.svg";

import ImageEffect from "../breath/effect.svg";
import ImageEffectIcon from "../breath/effect-icon.svg";
import ImageRondo from "./arondondon.jpg";

import "./index.css";
import TechniqueWidget from "../chooseBreath/components/TechniqueWidget";

export default function EndScreen(props) {
    return (
        <AppLayout menu={(
            <ul>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'breath'} href={"/breath"} icon={IconReload}>Повторить</SideBarButton>
                </li>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'first'} href={"/"} icon={IconMenu}>Другое</SideBarButton>
                </li>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'chooseBreath'} href={"/chooseBreath"} icon={IconClose}>Завершить</SideBarButton>
                </li>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'chooseBreath'} href={"/chooseBreath"} icon={IconBack}>Назад</SideBarButton>
                </li>
            </ul>
        )}>
            <div className="Breath">
                <div className="Breath__blur">
                    <div className="Breath__blur-block">
                        <div className="Breath__blur-subtitle">
                            Новое достижение
                        </div>
                        <div className="Breath__blur-title">
                            Ты просто зверюга
                        </div>
                        <div className="Breath__blur-rating">
                            <img src={IconRateActive} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                            <img src={IconRate} alt="Рейтинг"/>
                        </div>
                        <div className="Breath__blur-image">
                            <img src={ImageRondo} alt="Зверюга"/>
                        </div>
                        <div className="Breath__blur-under">
                            Повторим?
                        </div>
                    </div>
                </div>

                <div className={"Breath__effect Breath__effect--state-1"}>
                    <img className="Breath__effect-icon" src={ImageEffectIcon} alt="Иконка эффекта"/>
                    <img className="Breath__effect-image" src={ImageEffect} alt="Эффект"/>
                </div>
            </div>
        </AppLayout>
    )
}