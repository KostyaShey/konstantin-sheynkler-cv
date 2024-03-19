import './SideBar.css';  
import SideBarButton from './SideBarButton/SideBarButton';

export default function SideBar(props) {

  const navigationElements = [
    {
      "id": "Home",
      "name":"Home"
    },
    {
      "id": "Projekte",
      "name":"Projekte"
    },
    {
      "id": "Berufserfahrung",
      "name":"Berufserfahrung"
    },
    {
      "id": "Ausbildung",
      "name":"Ausbildung"
    },
    {
      "id": "Kontakt",
      "name":"Kontakt"
    }
  ]

  function handleClick (idx) {
    props.setNavigationTag(idx); 
  }

  const getNavigetaionElements = elements => {
    let content = [];
    for (let idx in elements) {
      const item = elements[idx];
      content.push(<SideBarButton item={item} handleClick={handleClick}/>);
    }
    return content;
  };

  return (
    <div className="sidebar white_transparent">
      <p>
        Konstantin Sheynkler
      </p>
      <ul className="sidebarNav">{getNavigetaionElements(navigationElements)}</ul>
    </div>
  );
}