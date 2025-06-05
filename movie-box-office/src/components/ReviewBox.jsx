import React from 'react';
import { motion } from 'framer-motion';

const ReviewBox = ({ reviews, onAddReview }) => {
  const [text, setText] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && rating) {
      onAddReview({ text, rating, date: new Date().toISOString() });
      setText('');
      setRating(0);
    }
  };

  return (
    <div className="my-6">
      <h4 className="font-semibold mb-2">User Reviews</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <textarea
          className="border rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={2}
          placeholder="Write a review..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="flex items-center gap-2">
          {[1,2,3,4,5].map(star => (
            <motion.span
              key={star}
              className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              whileTap={{ scale: 1.2 }}
              onClick={() => setRating(star)}
            >★</motion.span>
          ))}
          <button type="submit" className="ml-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Submit</button>
        </div>
      </form>
      <div className="space-y-3">
        {reviews && reviews.length > 0 ? reviews.map((r, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded p-3">
            <div className="flex items-center gap-2 mb-1">
              {[1,2,3,4,5].map(star => (
                <span key={star} className={`text-lg ${star <= r.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
              ))}
              <span className="text-xs text-gray-500 ml-2">{new Date(r.date).toLocaleDateString()}</span>
            </div>
            <div className="text-sm text-gray-800 dark:text-gray-100">{r.text}</div>
          </div>
        )) : <div className="text-gray-400 text-sm">No reviews yet.</div>}
      </div>
    </div>
  );
};

export default ReviewBox;
