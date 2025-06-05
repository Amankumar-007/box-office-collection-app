import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import ReviewBox from '../components/ReviewBox';

const dummyPrediction = [
  { day: 'Day 1', prediction: 100000 },
  { day: 'Day 2', prediction: 120000 },
  { day: 'Day 3', prediction: 150000 },
  { day: 'Day 4', prediction: 180000 },
  { day: 'Day 5', prediction: 200000 },
];

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleAddReview = (review) => {
    setReviews([review, ...reviews]);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!movie) return <div className="text-center py-10 text-gray-400">Movie not found.</div>;

  return (
    <motion.div className="max-w-3xl mx-auto p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <img src={movie.poster} alt={movie.name} className="w-48 h-72 object-cover rounded shadow" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{movie.name} <span className="text-lg font-normal text-gray-500">({movie.year})</span></h1>
          <p className="text-sm text-gray-500 mb-2">{movie.language}</p>
          <p className="mb-4 text-gray-700 dark:text-gray-200">{movie.description}</p>
          <div className="flex flex-col gap-1 text-sm">
            <span>Daily: <span className="font-semibold">${movie.dailyCollection}</span></span>
            <span>Weekend: <span className="font-semibold">${movie.weekendCollection}</span></span>
            <span>Total: <span className="font-semibold">${movie.totalCollection}</span></span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Box Office Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={movie.trend}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="collection" fill="#2563eb" name="Collection" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mb-8">
        <h3 className="font-semibold mb-2">Prediction</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={dummyPrediction}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="prediction" fill="#f59e42" name="Prediction" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ReviewBox reviews={reviews} onAddReview={handleAddReview} />
    </motion.div>
  );
};

export default MovieDetail;
