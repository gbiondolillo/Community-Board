// src/App.jsx
import React from 'react';
import TVShowCard from './TVShowCard';
import './App.css';
import './styles.css';

const App = () => {
  const tvShows = [
    {
      title: 'Breaking Bad',
      genre: 'Crime, Drama, Thriller',
      rating: 9.5,
      description: 'High school chemistry teacher turned methamphetamine manufacturer.',
      imageUrl: 'Breaking Bad.jpg',
      url: 'https://en.wikipedia.org/wiki/Breaking_Bad',
    },
    {
      title: 'Stranger Things',
      genre: 'Science Fiction, Horror, Drama',
      rating: 8.7,
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      imageUrl: 'Stranger Things.jpg',
      url: 'https://en.wikipedia.org/wiki/Stranger_Things',
    },
    {
      title: 'The Vampire Diaries',
      genre: 'Horror, Comedy, Drama, Romance, Supernatural',
      rating: 7.7,
      description: 'The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers. After centuries of quarreling, Stefan and Damon Salvatore return to their original town of Mystic Falls, Virginia.',
      imageUrl: 'The Vampire Diaries.jpg',
      url: 'https://en.wikipedia.org/wiki/The_Vampire_Diaries',
    },
    {
      title: 'One Tree Hill',
      genre: 'Drama, Romance, Soap Opera, Coming-of-age Story',
      rating: 7.8,
      description: 'In the fictional town Tree Hill in North Carolina and initially follows the lives of two half-brothers, Lucas and Nathan Scott, who compete for positions on their schools basketball team and the drama that ensues from the brothers romances.',
      imageUrl: 'One Tree Hill.jpg',
      url: 'https://en.wikipedia.org/wiki/One_Tree_Hill_(TV_series)',
    },
    {
      title: 'Friends',
      genre: 'Comedy, Romance, Sitcom',
      rating: 8.9,
      description: 'Comedy series about a tight-knit group of friends living in Manhattan. It also covers their interactions with their families, their lovers, and various colleagues over a period of several years.',
      imageUrl: 'Friends.jpg',
      url: 'https://en.wikipedia.org/wiki/Friends',
    },
    {
      title: 'The Office',
      genre: 'Comedy, Sitcom',
      rating: 9,
      description: 'A documentary on the daily lives of the employees of Dunder Mifflin, a paper company.',
      imageUrl: 'The Office.jpg',
      url: 'https://en.wikipedia.org/wiki/The_Office_(American_TV_series)',
    },
    {
      title: 'Black Mirror',
      genre: 'Drama, Sci-Fi, Thriller',
      rating: 8.7,
      description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
      imageUrl: 'Black Mirror.jpg',
      url: 'https://en.wikipedia.org/wiki/Black_Mirror',
    },
    {
      title: 'Gossip Girl',
      genre: 'Comedy, Romance, Drama',
      rating: 7.5,
      description: 'A group of hyperprivileged Manhattan private-school kids seem to get away with everything. Except an anonymous blogger is watching their every move.',
      imageUrl: 'Gossip Girl.jpg',
      url: 'https://en.wikipedia.org/wiki/Gossip_Girl',
    },
    {
      title: 'You',
      genre: 'Thriller, Drama, Mystery, Romance',
      rating: 7.7,
      description: 'A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.',
      imageUrl: 'You.jpg',
      url: 'https://en.wikipedia.org/wiki/You_(TV_series)',
    },
    {
      title: 'Manifest',
      genre: 'Drama, Mystery, Sci-Fi, Suspense',
      rating: 7.1,
      description: 'When a plane mysteriously lands years after takeoff, the people onboard return to a world that has moved on without them and face strange new realities.',
      imageUrl: 'Manifest.jpg',
      url: 'https://en.wikipedia.org/wiki/Manifest_(TV_series)',
    },
    // Add more TV shows here
  ];

  return (
    <div className='app'>
      <h1>TV Shows</h1>
      {tvShows.map((show, index) => (
        <TVShowCard key={index} {...show} />
      ))}
    </div>
  );
};

export default App;
