import "./DashboardCalendar.css";

import Chart from "./chart.svg";

function getDayTitle(day) {
    switch (day) {
        default:
        case 0: return 'Вс';
        case 1: return 'Пн';
        case 2: return 'Вт';
        case 3: return 'Ср';
        case 4: return 'Чт';
        case 5: return 'Пт';
        case 6: return 'Сб';
    }
}

export default function DashboardCalendar() {
    let today = new Date(),
        date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
        days = [];

    for (let i = 0; i <= 30; i++) {
        date.setDate(date.getDate() + 1);
        days.push({
            number: date.getDate(),
            day: date.getDay(),
            current: date.getDate() === today.getDate()
        })
    }

    return (
        <div className="DashboardCalendar">
            <div className="DashboardCalendar__days">
                {days.map((value, index) => {
                    return (
                        <div className={"DashboardCalendar__day " + (value.current ? 'DashboardCalendar__day--current' : '')} key={index}>
                            <span>{getDayTitle(value.day)}</span>
                            {value.number}

                            {value.current && (
                                <div className="DashboardCalendar__current-mood">
                                    100
                                    <span>Все отлично</span>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
            <div className="DashboardCalendar__line">
                <h3 className="DashboardCalendar__title">
                    Настроение
                </h3>
                <div className="DashboardCalendar__сhart">
                    <img src={Chart} alt="График"/>
                </div>
            </div>
        </div>
    )
}