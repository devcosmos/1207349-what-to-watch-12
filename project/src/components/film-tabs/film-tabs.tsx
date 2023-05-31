import { useState } from 'react';
import FilmOverview from '../film-overview/film-overview';
import FilmReviews from '../film-reviews/film-reviews';
import FilmDetails from '../film-details/film-details';
import { Film } from '../../types/films';
import { Tab } from '../../const';
import TabLink from '../tab-link/tab-link';
import { Comments } from '../../types/comments';

type FilmTabsProps = {
  film: Film;
  comments: Comments;
}

function FilmTabs({film, comments}: FilmTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(Tab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tab).map((tab) => (
            <TabLink
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </nav>

      {function () {
        switch (activeTab) {
          case Tab.Overview:
            return <FilmOverview film={film} />;
          case Tab.Details:
            return <FilmDetails film={film} />;
          case Tab.Reviews:
            return <FilmReviews comments={comments} />;
        }
      }()}
    </div>
  );
}

export default FilmTabs;
