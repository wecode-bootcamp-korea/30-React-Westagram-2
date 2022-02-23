import { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds';
import Aside from './Aside';
import './MainKyle.scss';

const MainKyle = () => {
  const [FeedsList, setFeedsList] = useState([]); //댓글 내용만 모아놓은 배열

  useEffect(() => {
    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET',
    })
      .then(respose => respose.json())
      .then(data => setFeedsList(data));
  }, []);

  // console.log(FeedsList);

  return (
    <div className="MainKyle">
      <Nav />
      <div>
        <main>
          {FeedsList.map(feed => {
            return <Feeds key={feed.id} name={feed.userName} />;
          })}
        </main>
        <Aside />
      </div>
    </div>
  );
};

export default MainKyle;
