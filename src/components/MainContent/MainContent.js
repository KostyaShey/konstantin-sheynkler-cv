import './MainContent.css';  // import the css file
import '../ContentNavigation/ContentNavigation';
import ContentNavigation from '../ContentNavigation/ContentNavigation';
import { useContext } from 'react';
import { NavigationTag, ContentTag } from '../../ViewContext';

export default function MainContent(props) {

  const navigationTag = useContext(NavigationTag);
  const contentTag = useContext(ContentTag);

  return (
    <div className="main-content white_transparent">
      {navigationTag != 'Home' && <ContentNavigation setContentTag={props.setContentTag} navigationTags={props.data.map(item => item.navigationTag)}/>}
      <p>
        Currently viewed content: {navigationTag}
      </p>
      {navigationTag != 'Home'  &&
        <p>
          Currently viewed content card: {contentTag}
        </p>
      }
    </div>
  );
}