import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../src/actions';

const Home = (props) => {
  useEffect(() => {
    fetchNews();
  }, []);

  const renderNews = () => {
    return props.news.map((news) => (
      <li key={news.objectID}>
        <span>{news.num_comments}</span>
        <span>{news.points}</span>
        <span>
          {news.title} by {news.author}
        </span>
      </li>
    ));
  };

  return (
    <div>
      Here is list of News
      <ul>{renderNews()}</ul>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchNews());
};

const mapStateToProps = (state) => {
  console.log(state.news);
  return { news: state.news.hits };
};

export default {
  component: connect(mapStateToProps, { fetchNews })(Home),
  loadData,
};
