import "./SideBarButton.css";
import { Link } from "wouter";

export default function SideBarButton(props) {
    return (
        <>
            {'href' in props ? (
                <Link href={props.href} id={props.action} onClick={()=>props.handleOnClick(props.action)} className="SideBarButton">
                    {'icon' in props && (
                        <img src={props.icon} alt="SideBarButtonIcon"/>
                    )}
                    {props.children}
                </Link>
            ) : (
                <button className="SideBarButton" onClick={'onClick' in props ? props.onClick : () => {}}>
                    {'icon' in props && (
                        <img src={props.icon} alt="SideBarButtonIcon"/>
                    )}
                    {props.children}
                </button>
            )}
        </>
    )
}