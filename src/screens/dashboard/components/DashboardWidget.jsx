import "./DashboardWidget.css";
import { Link } from "wouter";

export default function DashboardWidget({ onboard = false, href, icon, title, subtitle, text, action, handleOnClick }) {
    return (
        <Link onClick={()=>{handleOnClick(action)}} href={href} className={"DashboardWidget " + (onboard ? 'DashboardWidget--onboard' : '')}>
            <img src={icon} alt={title} />
            <div className="DashboardWidget__title">{title}</div>
            <div className="DashboardWidget__subtitle">{subtitle}</div>
            <div className="DashboardWidget__text">{text}</div>
        </Link>
    )
}