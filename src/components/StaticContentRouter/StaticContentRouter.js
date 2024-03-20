import { NavigationTag } from '../../ViewContext';
import { useContext } from "react";
import Home from '../Home/Home'
import Contact from '../Contact/Contact';


export default function StaticContentRouter() {

    const navigationTag = useContext(NavigationTag);
  
    switch (navigationTag) {
      case 'Home':
          return <Home />;
      case 'Kontakt':
          return <Contact />;
      default:
          return (<div>
              wrong path
          </div>)
  }
  }