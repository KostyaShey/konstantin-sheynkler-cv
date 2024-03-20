import './Contact.css';
import { useContext } from 'react';
import { NavigationTag} from '../../ViewContext';

export default function Contact() {

  const navigationTag = useContext(NavigationTag);

  return (
    <div className="Contact">
      <p>
        Currently viewed content: {navigationTag}
      </p>
    </div>
  );
}