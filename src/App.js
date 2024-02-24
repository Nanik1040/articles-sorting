import React from 'react';
import './style.css';
import ArticleList from './Articles';

const articles = [
  {
    id: 1,
    title: 'The Benefits of Regular Exercise',
    noOfViews: 1200,
    dateOfPublish: '2022-03-22',
  },
  {
    id: 2,
    title: '10 Easy Ways to Boost Your Energy Levels',
    noOfViews: 2400,
    dateOfPublish: '2021-11-08',
  },
  {
    id: 3,
    title: 'How to Stay Productive When Working From Home',
    noOfViews: 3200,
    dateOfPublish: '2022-01-15',
  },
  {
    id: 4,
    title: 'The Top 5 Strategies for a Successful Job Interview',
    noOfViews: 1800,
    dateOfPublish: '2022-03-22',
  },
  {
    id: 5,
    title: 'Why Sleep is Essential for Good Health',
    noOfViews: 5000,
    dateOfPublish: '2022-02-10',
  },
];

export default function App() {
  return <ArticleList articles={articles} />;
}
