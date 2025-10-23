// src/pages/ActivitiesPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, activities } from '../ActivityData'; // Path is correct
// We no longer need to import '../Activity.css'

// --- SVG Icons (No changes needed) ---
const PentagonIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.00004L9.1 9.10004C8.97778 9.27782 8.81944 9.41671 8.625 9.51671C8.43056 9.61671 8.22222 9.66671 8 9.66671H1.33333C0.966667 9.66671 0.652778 9.53615 0.391667 9.27504C0.130556 9.01393 0 8.70004 0 8.33337V1.66671C0 1.30004 0.130556 0.986152 0.391667 0.725041C0.652778 0.46393 0.966667 0.333374 1.33333 0.333374H8C8.22222 0.333374 8.43056 0.383374 8.625 0.483374C8.81944 0.583374 8.97778 0.722263 9.1 0.900041L12 5.00004ZM10.3667 5.00004L8 1.66671H1.33333V8.33337H8L10.3667 5.00004Z" fill="currentColor"/>
</svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);
const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" rx="1"/>
  </svg>
);
const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// --- End of SVG Icons ---


// --- Activity Card Component (Tailwind Refactor) ---
const ActivityCard = ({ activity, layout }) => {
  const isGridLayout = layout === 'grid';

  return (
    <div className={`group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl ${isGridLayout ? 'flex flex-col' : 'flex flex-col sm:flex-row'}`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden ${isGridLayout ? 'h-52 w-full' : 'w-full sm:w-1/3 h-52 sm:h-auto flex-shrink-0'}`}>
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {isGridLayout && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent flex justify-between items-center">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
              <PentagonIcon />
              {activity.category}
            </span>
            {/* Removed date from grid view */}
          </div>
        )}
      </div>
      {/* Text Content */}
      <div className={`p-5 flex flex-col flex-grow ${isGridLayout ? '' : 'sm:w-2/3'}`}>
        <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
          {activity.title}
        </h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{activity.description}</p>
        {!isGridLayout && (
          <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
              <PentagonIcon />
              {activity.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
              <CalendarIcon />
              {activity.date}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Pagination Component (Tailwind Refactor) ---
const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    let pages = [1];
    if (currentPage <= 3) {
      pages.push(2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8 py-4" role="navigation" aria-label="Pagination">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="flex items-center justify-center w-10 h-10 text-gray-500" aria-hidden="true">
              •••
            </span>
          ) : (
            <button
              key={page}
              className={`flex items-center justify-center w-10 h-10 rounded-md border transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 border-blue-600 text-white font-semibold'
                  : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => onPageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        ))}
      </div>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};
// --- End of components ---


function ActivitiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [layout, setLayout] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const itemsPerPage = layout === 'grid' ? 9 : 5; // Increased items per page

  const navigate = useNavigate();

  useEffect(() => {
    let sorted;
    if (activeCategory === 'All') {
      sorted = [...activities];
    } else {
      sorted = activities.filter((activity) => activity.category === activeCategory);
    }
    sorted = sorted.reverse(); // Keep newest first
    setFilteredActivities(sorted);
    setCurrentPage(1); // Reset page on filter change
  }, [activeCategory]);

  // Adjust itemsPerPage when layout changes
  useEffect(() => {
    setCurrentPage(1); // Reset page on layout change
  }, [layout]);

  const toggleLayout = () => {
    setLayout(layout === 'grid' ? 'row' : 'grid');
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the activities container smoothly
    document.getElementById('activities-page-container')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Main container
    <div id="activities-page-container" className="bg-slate-50 min-h-screen">
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-0 text-center">Activities</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 bg-white p-3 rounded-lg shadow-sm">
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile Category Dropdown */}
          <div className="relative w-full md:hidden">
            <button
              className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
            >
              <span>{activeCategory}</span>
              <ChevronDownIcon />
            </button>
            {isCategoryDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`w-full text-left px-4 py-2 text-sm ${activeCategory === category ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsCategoryDropdownOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:block h-6 w-px bg-gray-300 mx-2"></div>

          <div className="flex gap-1 bg-gray-100 p-1 rounded-md">
            <button
              className={`p-2 rounded transition-colors ${layout === 'grid' ? 'bg-white text-blue-600 shadow' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setLayout('grid')}
              title="Grid View"
              aria-pressed={layout === 'grid'}
            >
              <GridIcon />
            </button>
            <button
              className={`p-2 rounded transition-colors ${layout === 'row' ? 'bg-white text-blue-600 shadow' : 'text-gray-500 hover:text-gray-800'}`}
              onClick={() => setLayout('row')}
              title="List View"
              aria-pressed={layout === 'row'}
            >
              <ListIcon />
            </button>
          </div>
        </div>

        {/* Activities Grid/List */}
        <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6'}>
          {currentItems.length > 0 ? (
             currentItems.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} layout={layout} />
            ))
           ) : (
            <p className="text-center text-gray-500 col-span-full">No activities found for this category.</p>
           )}
        </div>

        {/* Pagination */}
        {filteredActivities.length > itemsPerPage && (
          <Pagination
            totalItems={filteredActivities.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

export default ActivitiesPage;

