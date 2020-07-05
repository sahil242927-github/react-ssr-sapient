import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNews, prevAction, nextAction } from '../src/actions';

const styles = {
  tableHeader: {
    width: '50%',
    margin: 'auto',
  },
  buttonContainer: {
    margin: '10px',
    textAlign: 'right',
  },
};

const Home = ({ news, currentPage, prevAction, nextAction }) => {
  useEffect(() => {
    fetchNews();
  }, []);

  const renderNews = () => {
    const tableBody = news.map((news) => (
      <tr key={news.objectID}>
        <th scope='row'>1</th>
        <td>{news.num_comments}</td>
        <td>{news.points}</td>
        <td>
          {news.title} by {news.author}
        </td>
      </tr>
    ));

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Comments</th>
            <th scope='col'>Vote Count</th>
            <th scope='col'>upVote</th>
            <th scope='col'>New Details</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    );
  };

  return (
    <div style={styles.tableHeader}>
      Here is list of News
      {renderNews()}
      <div style={styles.buttonContainer}>
        <button
          type='button'
          className='btn btn-primary mr-1'
          onClick={() => prevAction()}
        >
          Prev
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => nextAction()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchNews(store.getState().currentPage));
};

const mapStateToProps = (state) => {
  return { news: state.news.hits, currentPage: state.currentPage };
};

export default {
  component: connect(mapStateToProps, { fetchNews, prevAction, nextAction })(
    Home
  ),
  loadData,
};
