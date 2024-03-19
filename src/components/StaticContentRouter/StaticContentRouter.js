import { NavigationTag } from '../../ViewContext';
import { useContext } from "react";
export default function StaticContentRouter() {

    const navigationTag = useContext(NavigationTag);
  
    return (
      <div className="StaticContentRouter">
       
      </div>
    );
  }