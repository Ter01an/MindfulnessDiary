import BaseLayout from "../../layouts/BaseLayout";
import SideBarButton from "../../layouts/components/SideBarButton";
import { Range } from 'react-range';
import { useState } from "react";
import "./index.css";

import IconBack from "../../icons/back.svg";
import IconOkay from "../../icons/okay.svg";
import IconSkip from "../../icons/skip.svg";

export default function ReturnScreen() {
    let [rate, setRate] = useState([50])

    function onChange(values) {
        setRate(values);
    }

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
            
            <Range min={0} max={100} step={1} values={rate} onChange={onChange} renderTrack={({ props, children }) => (
                <div className="RangeLine" {...props}>
                    {children}
                    <div className="RangeLine__min">0</div>
                    <div className="RangeLine__max">100</div>
                </div>
            )} renderThumb={({ props }) => (
                <div className="RangeThumb" {...props} style={{
                    ...props.style,
                    height: '6.25em',
                    width: '6.25em'
                }}><span>{rate[0]}</span></div>
            )} />

        </BaseLayout>
    )
}