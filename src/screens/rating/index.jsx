import BaseLayout from "../../layouts/BaseLayout";
import SideBarButton from "../../layouts/components/SideBarButton";

import IconBack from "../../icons/back.svg";
import IconOkay from "../../icons/okay.svg";
import IconSkip from "../../icons/skip.svg";

export default function RatingScreen() {
    return (
        <BaseLayout menu={(
            <ul>
                <li>
                    <SideBarButton onClick={() => { alert('exit') }} icon={IconBack}>Назад</SideBarButton>
                </li>
                <li>
                    <SideBarButton href={"#2"} icon={IconOkay}>Оценить</SideBarButton>
                </li>
                <li>
                    <SideBarButton href={"/"} icon={IconSkip}>Пропустить</SideBarButton>
                </li>
            </ul>
        )}>
            <h1>
                Оцените ваше<br/>
                настроение от 1 до 100
            </h1>
            <p className="mb-3">
                Основываясь на вашей оценке я смогу подсказывать вам подходящие упражнения и предоставлять полезную контентную информацию
            </p>
            <h3>
                Скажите голосом<br/>
                или перетащите ползунок
            </h3>
        </BaseLayout>
    )
}