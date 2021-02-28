import SideBar from "./components/SideBar";
import "./BaseLayout.css";

export default function BaseLayout({ children, menu }) {
    return (
        <div className="BaseLayout">
            {menu &&
                <div className="BaseLayout__sidebar">
                    <SideBar>
                        {menu}
                    </SideBar>
                </div>
            }
            <div className="BaseLayout__content">
                {children}
            </div>
        </div>
    )
}