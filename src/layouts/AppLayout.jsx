import SideBar from "./components/SideBar";
import "./AppLayout.css";

export default function AppLayout({ children, menu }) {
    return (
        <div className="AppLayout">
            {menu &&
                <div className="AppLayout__sidebar">
                    <SideBar>
                        {menu}
                    </SideBar>
                </div>
            }
            <div className="AppLayout__content">
                {children}
            </div>
        </div>
    )
}