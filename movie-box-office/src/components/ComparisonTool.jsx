import React from 'react';
import { motion } from 'framer-motion';

const ComparisonTool = ({ movies, onCompare }) => {
  const [selected, setSelected] = React.useState([null, null]);

  const handleSelect = (idx, id) => {
    const updated = [...selected];
    updated[idx] = id;
    setSelected(updated);
  };

  return (
    <motion.div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-xl font-bold mb-4">Compare Movies</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {[0, 1].map(idx => (
          <select
            key={idx}
            className="border rounded px-3 py-2 w-full"
            value={selected[idx] || ''}
            onChange={e => handleSelect(idx, e.target.value)}
          >
            <option value="">Select Movie {idx + 1}</option>
            {movies.map(m => (
              <option key={m.id} value={m.id}>{m.name} ({m.year})</option>
            ))}
          </select>
        ))}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => onCompare(selected)}
        disabled={!selected[0] || !selected[1] || selected[0] === selected[1]}
      >
        Compare
      </button>
    </motion.div>
  );
};

export default ComparisonTool;
