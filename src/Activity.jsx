import React, { useState, useEffect } from 'react';
import { categories, activities } from './ActivityData';
import './Activity.css';

const ActivityCard = ({ activity, layout }) => (
  <div className={`activity-card ${layout}`}>
    <div className="image-container">
      <img src={activity.image} alt={activity.title} loading="lazy" />
      {layout === 'grid' && (
        <div className="activity-meta">
          <span className="category">
            <PentagonIcon />
            {activity.category}
          </span>
          {/* <span className="date">
            <CalendarIcon />
            {activity.date}
          </span> */}
        </div>
      )}
    </div>
    <div className="activity-content">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      {layout === 'row' && (
        <div className="activity-meta">
          <span className="category">
            <PentagonIcon />
            {activity.category}
          </span>
          <span className="date">
            <CalendarIcon />
            {activity.date}
          </span>
        </div>
      )}
    </div>
  </div>
);

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    
    let pages = [];
    
    // Always show first page
    pages.push(1);
    
    if (currentPage <= 3) {
      // Near the start
      pages.push(2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Near the end
      pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      // In the middle
      pages.push(
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
      );
    }
    
    return pages;
  };

  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      <button 
        className="pagination-btn pagination-btn-prev" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <div className="pagination-numbers">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span 
              key={`ellipsis-${index}`} 
              className="pagination-ellipsis"
              aria-hidden="true"
            >
              •••
            </span>
          ) : (
            <button
              key={page}
              className={`pagination-btn number-btn ${currentPage === page ? 'active' : ''}`}
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
        className="pagination-btn pagination-btn-next" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

const GridIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="4" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="10" width="18" height="4" stroke="currentColor" strokeWidth="2"/>
    <rect x="3" y="17" width="18" height="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PentagonIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5.00004L9.1 9.10004C8.97778 9.27782 8.81944 9.41671 8.625 9.51671C8.43056 9.61671 8.22222 9.66671 8 9.66671H1.33333C0.966667 9.66671 0.652778 9.53615 0.391667 9.27504C0.130556 9.01393 0 8.70004 0 8.33337V1.66671C0 1.30004 0.130556 0.986152 0.391667 0.725041C0.652778 0.46393 0.966667 0.333374 1.33333 0.333374H8C8.22222 0.333374 8.43056 0.383374 8.625 0.483374C8.81944 0.583374 8.97778 0.722263 9.1 0.900041L12 5.00004ZM10.3667 5.00004L8 1.66671H1.33333V8.33337H8L10.3667 5.00004Z" fill="white"/>
</svg>

);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);

function Activity() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredActivities, setFilteredActivities] = useState(activities);
  const [layout, setLayout] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const itemsPerPage = layout === 'grid' ? 6 : 4;

  useEffect(() => {
    let sorted;
    if (activeCategory === 'All') {
      sorted = [...activities];
    } else {
      sorted = activities.filter((activity) => activity.category === activeCategory);
    }
    // Reverse the order of activities
    sorted = sorted.reverse();
    setFilteredActivities(sorted);
    setCurrentPage(1);
  }, [activeCategory]);

  const toggleLayout = () => {
    setLayout(layout === 'grid' ? 'row' : 'grid');
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="activities" className="activities-container">
      <div className="header-section">
        <div className="header-content">
          <h2>Activities</h2>
          <p className="subtitle">
            Below are a few activities performed by NSS cell of IIT Guwahati over the past weeks.
          </p>
        </div>
      </div>

      <div className="controls-container">
        {/* Desktop category buttons */}
        <div className="category-buttons desktop-only">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile category dropdown */}
        <div className="category-dropdown mobile-only">
          <button 
            className="dropdown-toggle"
            onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
          >
            {activeCategory} <span className="arrow">▼</span>
          </button>
          {isCategoryDropdownOpen && (
            <div className="dropdown-menu">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`dropdown-item ${activeCategory === category ? 'active' : ''}`}
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

        <div className="view-controls">
          <button 
            className={`layout-toggle-btn ${layout === 'grid' ? 'active' : ''}`}
            onClick={() => setLayout('grid')}
            title="Grid View"
          >
            <GridIcon />
          </button>
          <button 
            className={`layout-toggle-btn ${layout === 'row' ? 'active' : ''}`}
            onClick={() => setLayout('row')}
            title="List View"
          >
            <ListIcon />
          </button>
        </div>
      </div>

      <div className={`activities-layout ${layout}`}>
        {currentItems.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} layout={layout} />
        ))}
      </div>

      {filteredActivities.length > itemsPerPage && (
        <Pagination
          totalItems={filteredActivities.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default Activity;
