import './MainContent.css';  // import the css file
import StaticContentRouter from '../StaticContentRouter/StaticContentRouter'
import DynamicContentViewer from '../DynamicContentViewer/DynamicContentViewer';
import { useContext } from 'react';
import { NavigationTag, ContentTag, Data } from '../../ViewContext';

export default function MainContent(props) {

  const navigationTag = useContext(NavigationTag);
  const navigationTags = useContext(Data)[navigationTag];
  const contentTag = useContext(ContentTag);
  

  return (
    <div className="main-content white_transparent">
      {navigationTags != 0 ? <DynamicContentViewer setContentTag={props.setContentTag} /> : <StaticContentRouter />}
      <p>
        Currently viewed content: {navigationTag}
      </p>
      {navigationTags != 0  &&
        <p>
          Currently viewed content card: {contentTag}
        </p>
      }
    </div>
  );
}