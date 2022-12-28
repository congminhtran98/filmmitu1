import React, { useMemo, useState } from 'react';
import RecentlySlider from '../Slider/RecentlySlider';
import SliderMovie from '../Slider/SliderMovie';
import SliderTv from '../Slider/SliderTv';
import { getMovieHistory } from '../../utils/localStro';
// import Title from '../../components/Shared/Title';
import Skeleton from '../Skeleton/Skeleton';

const baseUrl = process.env.REACT_APP_BASE_URL;

const Row = (setShowModal, type) => {
  const historyWatch = useMemo(getMovieHistory, []);
  const [movies, setMovies] = useState({
    loading: true,
    data: [],
  });
  return (
    <div className="container">
      {historyWatch.length > 0 ? <RecentlySlider data={historyWatch} /> : null}
      <div className="movie">
        <SliderMovie type="trending" />
        <SliderMovie type="popular" />
        <SliderMovie type="top_rated" />
      </div>
      <div className="tv">
        <SliderTv type="trending" />
        <SliderTv type="popular" />
        <SliderTv type="top_rated" />
      </div>
    </div>
  );
};

export default Row;
