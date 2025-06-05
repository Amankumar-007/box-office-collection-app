import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    whileHover={{ scale: 1.03 }}
  >
    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{blog.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{blog.summary}</p>
      <a href={blog.link} className="text-blue-600 hover:underline text-sm">Read more</a>
    </div>
  </motion.div>
);

export default BlogCard;
