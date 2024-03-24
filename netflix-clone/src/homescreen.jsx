import React from 'react';
import Nav from './nav';
import Banner from './Banner';
import "./homescreen.css";
import requests from './requests';
import Row from './Row';

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />

        <Row title='NETFLIX ORIGINALS' fetchURL = {requests.fetchNetflixOriginals} isLargeRow />
        <Row title='TRENDING NOW' fetchURL = {requests.fetchTrending} />
        <Row title='TOP RATED' fetchURL = {requests.fetchTopRated} />
        <Row title='ACTION MOVIES' fetchURL = {requests.fetchActionMovies} />
        <Row title='COMEDY' fetchURL = {requests.fetchComedyMovies} />
        <Row title='HORROR' fetchURL = {requests.fetchHorrorMovies} />
        <Row title='ROMANCE' fetchURL = {requests.fetchRomanceMovies} />
        <Row title='DOCUMENTARIES' fetchURL = {requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen;