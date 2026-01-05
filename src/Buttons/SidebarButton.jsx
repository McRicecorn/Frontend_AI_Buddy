import "./SidebarButton.css";

export const SidebarButton = ({ onClick}) => {
    return (
        <button className="sidebar-button" onClick={onClick}>  
        Sidebar 
        </button>
    );
        
}