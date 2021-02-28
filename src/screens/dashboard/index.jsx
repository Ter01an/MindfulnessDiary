import BaseLayout from "../../layouts/BaseLayout";
import SideBarButton from "../../layouts/components/SideBarButton";
import DashboardCalendar from "./components/DashboardCalendar";
import DashboardWidget from "./components/DashboardWidget";
import "./index.css";

import IconBack from "../../icons/back.svg";
import IconMeditation from "../../icons/meditation.svg";
import IconLungs from "../../icons/lungs.svg";
import IconWater from "../../icons/water.svg";
import IconOnboardArrow from "../../icons/onboard-arrow.svg";
import IconOkay from "../../icons/okay.svg";
import IconSkip from "../../icons/skip.svg";

export default function DashboardScreen(props) {
    return (
        <BaseLayout menu={(
            <ul>
                <li>
                    <SideBarButton handleOnClick={props.handleOnClick} action={'tryExit'} icon={IconBack}>Назад</SideBarButton>
                </li>
                {props.onboard && (
                    <>
                        <li>
                            <SideBarButton handleOnClick={props.handleOnClick} action={'go'} href={"/chooseBreath"} icon={IconOkay}>Начнем</SideBarButton>
                        </li>
                        <li>
                            <SideBarButton handleOnClick={props.handleOnClick} action={'skip'} href={"/dashboard"} icon={IconSkip}>Пропустить</SideBarButton>
                        </li>
                    </>
                )}
            </ul>
        )}>
            {props.onboard && (
                <div className="Dashboard__onboard">
                    <div className="Dashboard__onboard-block">
                        <div className="Dashboard__onboard-title">
                            Рекомендую отслеживать ваше настроение в<br/>
                            специальном дневнике, вместе со мной вы можете<br/>
                            помедитировать или проконтроливать ваш водный баланс.
                        </div>
                        <div className="Dashboard__onboard-text">
                            Может быть начнем с дыхательной гимнастики?
                        </div>
                        <img src={IconOnboardArrow} alt="Дыхательная гимнастика"/>
                    </div>
                </div>
            )}
            <div className="Dashboard">
                <div className="Dashboard__head">
                    <h2>
                        Дневник осознанности
                    </h2>

                    <a className="LinkButton" href="#achievements">
                        Мои достижения
                    </a>

                    <div className="Dashboard__bonus">
                        <span>СБЕРиков</span>
                        200
                    </div>
                </div>

                <DashboardCalendar/>

                <div className="Dashboard__widgets">
                    <DashboardWidget onboard={props.onboard} href={"/chooseBreath"} handleOnClick={props.handleOnClick} action={'chooseBreath'} icon={IconLungs} title={"Дыхание"} subtitle={"Вы дышали 4 минуты"} text={"Виджет содержит в себе техники дыхания для пробуждения, расслабления и легкого зазыпания"}/>
                    <DashboardWidget href={"#widget2"} icon={IconMeditation} title={"Медитация"} subtitle={"Вы медитировали 10 минут"} text={"Виджет содержит в себе техники медитации которые помогут вам обрести гармонию и самоконтроль"}/>
                    <DashboardWidget href={"#widget3"} icon={IconWater} title={"Водный баланс"} subtitle={"Вы выпили 3 стакана воды"} text={"Виджет поможет вам всегда держать баланс воды в организме. "}/>
                </div>
            </div>
        </BaseLayout>
    )
}