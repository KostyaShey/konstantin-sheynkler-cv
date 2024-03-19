import ContentNavigation from '../ContentNavigation/ContentNavigation';

export default function DynamicContentViewer (props) {

    return (
      <div className="DynamicContentViewer">
        <ContentNavigation setContentTag={props.setContentTag} />
      </div>
    );
  }