import React from 'react';
import SlideCarousel from './slide';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://covers.openlibrary.org/w/id/8148592-M.jpg',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://covers.openlibrary.org/w/id/1333613-M.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },{
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },{
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },{
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },{
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },{
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/w/id/7222246-M.jpg',
  },
];

const Test = () => {
  return (
    <div>
      <SlideCarousel bookList={books} />
    </div>
  );
};

export default Test;
