

import { Effect } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function ReactApp() {
  const headerText: any = [{ text: "Twitter" }, { text: "Facebook" }, { text: "WhatsApp" }];
  let tabInstance: TabComponent;
  let previousInstance: DropDownListComponent;
  let nextInstance: DropDownListComponent;
  let animationData: string[] = ['SlideLeftIn', 'SlideRightIn', 'FadeIn', 'FadeOut', 'FadeZoomIn', 'FadeZoomOut', 'ZoomIn', 'ZoomOut', 'None'];
  React.useEffect(() => {
    previousAnimationChange = previousAnimationChange;
    nextAnimationChange = nextAnimationChange;

  }, []);

  function content0() {
    return <div>
      Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets". Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25 offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting 340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.
    </div>;
  }
  function content1() {
    return <div>
      Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.The founders had initially limited the website membership to Harvard students, but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support for students at various other universities and later to high-school students.
    </div>;
  }
  function content2() {
    return <div>
      WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model. It uses the Internet to send text messages, images, video, user location and audio media messages to other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10] making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.
    </div>;
  }
  let previousAnimationChange = (): void => {
    tabInstance.animation.previous = { effect: previousInstance.value as Effect };
  }
  let nextAnimationChange = (): void => {
    tabInstance.animation.next = { effect: nextInstance.value as Effect };
  }
  const wrapStyle = { padding: '25px 0 0' };
  return (
    <div style={wrapStyle}>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Previous Animation </label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DropDownListComponent ref={previous => previousInstance = previous!} index={0} change={previousAnimationChange} dataSource={animationData} popupHeight="250px" placeholder="Select Previous animation" />
        </div>
      </div>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Next Animation </label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DropDownListComponent ref={next => nextInstance = next!} index={0} change={nextAnimationChange} dataSource={animationData} popupHeight="250px" placeholder="Select Next animation" />
        </div>
      </div>
      <TabComponent ref={tab => tabInstance = tab!}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={content0} />
          <TabItemDirective header={headerText[1]} content={content1} />
          <TabItemDirective header={headerText[2]} content={content2} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);



