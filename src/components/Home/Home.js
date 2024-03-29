import './Home.css';
import { useContext } from 'react';
import { NavigationTag} from '../../ViewContext';

export default function Home() {

  const navigationTag = useContext(NavigationTag);

  return (
    <div className="Home">
      <p>
        Currently viewed content: {navigationTag}
      </p>
    </div>
  );
}