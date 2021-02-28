import "./TechniqueWidget.css"
import { Link } from "wouter";

export default function TechniqueWidget({ styles="", action, handleOnClick, href, icon, title, subtitle, achievements = 0}) {
    return (
        <Link onClick={()=>{handleOnClick(action)}} href={href} style={styles} className="TechniqueWidget">
            <div className="TechniqueWidget__fade"/>
            <div className="TechniqueWidget__head">
                <img src={icon} alt={title}/>
                <div className="TechniqueWidget__achievements">
                    <span>{achievements}</span>
                    Достижений
                </div>
            </div>
            <div className="TechniqueWidget__title">{title}</div>
            <div className="TechniqueWidget__subtitle">{subtitle}</div>
        </Link>
    )
}