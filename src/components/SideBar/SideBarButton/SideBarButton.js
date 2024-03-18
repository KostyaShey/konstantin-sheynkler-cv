import './SideBarButton.css'; 

export default function SideBarButton(props) {

    return (
    <li>
        <button className="SideBarButton" onClick={(e) => props.handleClick(props.item.id)} key={props.item.id}>{props.item.name}</button>
    </li>
    );

}