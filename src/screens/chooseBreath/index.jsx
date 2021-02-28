import BaseLayout from "../../layouts/BaseLayout";
import SideBarButton from "../../layouts/components/SideBarButton";
import TechniqueWidget from "./components/TechniqueWidget";
import "./index.css";

import IconBack from "../../icons/back.svg";
import IconTech1 from "../../icons/tech-1.svg";
import IconTech2 from "../../icons/tech-2.svg";
import IconTech3 from "../../icons/tech-3.svg";

export default function ChooseBreathScreen(props) {
    return (
        <BaseLayout menu={(
            <ul>
                <li>
                    <SideBarButton href="/" icon={IconBack}>Назад</SideBarButton>
                </li>
            </ul>
        )}>
            <h2>
                Выбор техники дыхания
            </h2>
            <p className="mb-3">
                Вы сейчас готовитесь ко сну, хотите расслабиться или взбодриться?<br/>
                Во время упражнения вы можете выбрать фоновое видео, или подходящую музыку для упражнений.
            </p>

            <div className="TechniqueWidgets">
                <TechniqueWidget handleOnClick={props.handleOnClick} action={'sleep'} styles={{border: "0.5px solid rgba(255, 255, 255, 0.09)", background: "linear-gradient(133.62deg, #0255A2 1.18%, rgba(3, 225, 255, 0.8) 98%)"}} href={"/breath"} icon={IconTech1} achievements={4} title={"Уснуть"} subtitle={"Вы дышали 4 минуты"}/>
                <TechniqueWidget styles={{border: "0.5px solid rgba(255, 255, 255, 0.09)", background: "linear-gradient(133.2deg, #8C3E25 1.25%, #CC3C0E 98.63%)"}} href={"#tech2"} icon={IconTech2} achievements={1} title={"Взбодриться"} subtitle={"Вы дышали 4 минуты"}/>
                <TechniqueWidget styles={{border: "0.5px solid rgba(123, 97, 255, 0.09)", background: "linear-gradient(133.16deg, #7B61FF 2.76%, #411CFF 100.86%)"}} href={"#tech3"} icon={IconTech3} achievements={2} title={"Снять стресс"} subtitle={"Вы дышали 4 минуты"}/>
            </div>

        </BaseLayout>
    )
}