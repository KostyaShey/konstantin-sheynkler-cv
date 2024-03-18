import './MainContent.css';  // import the css file
import '../ContentNavigation/ContentNavigation';
import ContentNavigation from '../ContentNavigation/ContentNavigation';
import { useContext } from 'react';
import { ViewContext } from '../../ViewedContext';

export default function MainContent(props) {

  const contentContext = useContext(ViewContext);

  return (
    <div className="main-content white_transparent">
      {props.viewedContent != 'Home' && <ContentNavigation viewedContent={props.viewedContent} setViewedContentCard={props.setViewedContentCard} navigationTags={props.data.map(item => item.navigationTag)}/>}
      <p>
        Currently viewed content: {ViewContext.navigationTag}
      </p>
      {props.viewedContent != 'Home'  &&
        <p>
          Currently viewed content card: {contentContext}
        </p>
      }
    </div>
  );
}