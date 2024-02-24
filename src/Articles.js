import React, { useState, useEffect } from 'react';
/**
 * 1. Create a React component that displays a list of articles passed as an array prop.
 * 2. Each article has a title, numberOfViews and dateOfPublish fields.
 * 3. The component should include a radio group that allows the user to sort the articles by "Most Recent" or "Most Viewed".
 * 4. If two articles have the same date of publish, the sorting algorithm should then place the most viewed article ahead.
 * 5. Make sure all the tests pass by opening the `Tests` tab.
 */
const ArticleList = ({ articles }) => {
  console.log(articles);
  useEffect(() => {
    setArticlesData(articles);
  }, [articles]);
  const [isMostRecentClicked, setIsMostRecentClicked] = useState(false);
  const [isMostViewedClicked, setisMostViewedClicked] = useState(false);
  const [articlesData, setArticlesData] = useState();
  const recentHandler = () => {
    setIsMostRecentClicked((prevState) => !prevState);
    sortByViews();
  };
  const sortByViews = () => {
    const sortByViewsData = [...articlesData].sort((a, b) => {
      return b.noOfViews - a.noOfViews;
    });
    setArticlesData(sortByViewsData);
  };
  const ViewdHandler = () => {
    setisMostViewedClicked((prevState) => !prevState);
    console.log('recent handler clicked');
    sortByDate();
  };
  const sortByDate = () => {};
  return (
    <div>
      <h2>Article List</h2>
      <div>
        Sort by
        <label>
          <input
            type="radio"
            value={isMostRecentClicked}
            data-testid="sort-recent-radio"
            onClick={() => {
              recentHandler();
            }}
          />
          Most Recent
        </label>
        <label>
          <input
            type="radio"
            value={isMostViewedClicked}
            onClick={() => {
              ViewdHandler();
            }}
            data-testid="sort-views-radio"
          />
          Most Viewed
        </label>
      </div>
      <br />
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>No. of Views</th>
            <th>Date of Publish</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Article Title</td>
            <td>No of views</td>
            <td>Published At</td>
          </tr>
          {articlesData?.map((articles) => (
            <tr key={articles.id}>
              <td>{articles.title}</td>
              <td>{articles.noOfViews}</td>
              <td>{articles.dateOfPublish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;

/**
 * Hint:
 * 1. The radio inputs should have the test ids as `sort-recent-radio` and `sort-views-radio`. These are already provided and not to be removed.
 * 2. Not using `React.useEffect` will earn you more points.
 */
