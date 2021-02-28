import BaseLayout from "../../layouts/BaseLayout";
import SideBarButton from "../../layouts/components/SideBarButton";

import IconBack from "../../icons/back.svg";
import IconOkay from "../../icons/okay.svg";
import IconSkip from "../../icons/skip.svg";

export default function FirstScreen(props) {
    return (
        <BaseLayout menu={(
            <ul>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'tryExit'} icon={IconBack}>Назад</SideBarButton>
                </li>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'show'} href={"/onboard"} icon={IconOkay}>Показывай</SideBarButton>
                </li>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'skip'} href={"/dashboard"} icon={IconSkip}>Пропустить</SideBarButton>
                </li>
            </ul>
        )}>
            <h1>
                Добро пожаловать<br/>
                в дневник осознанности
            </h1>
            <p className="mb-3">
                Я могу помочь вам снять стресс перед сном, взбодриться утром и улучшить вашу продуктивность.<br/>
                Выполняйте упражнения регулярно для открытия новых возможностей.
            </p>
            <h3>
                Давайте покажу, что я умею?
            </h3>
        </BaseLayout>
    )
}