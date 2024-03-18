import './SideBarButton.css'; 

export default function SideBarButton(props) {

    return (
    <li key={props.item.id}>
        <button className="SideBarButton"onClick={(e) => props.handleClick(props.item.id)} >{props.item.name}</button>
    </li>
    );

}