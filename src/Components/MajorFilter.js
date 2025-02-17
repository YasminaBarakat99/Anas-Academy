import React, { useEffect, useState } from 'react';
import '../Styles/MajorFilter.css';
import Card from './Card';

function MajorFilter() {
  const [selectedMajor, setSelectedMajor] = useState('');
  const [visibleCards, setVisibleCards] = useState(6);
  const [majors, setMajors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchMajors = async () => {
      try {
        const response = await fetch('https://lms.anasacademy.uk/api/development/courses', {
          method: 'GET',
          headers: {
            'x-api-key': '1234', // Replace with your valid API key
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log('Fetched Data:', data);

        const fetchedMajors = {};
        data.data.categories.forEach((category) => {
          fetchedMajors[category.title] = category.courses.map((course) => ({
            title: course.title,
            status: course.status === 'active' ? 'open' : 'closed',
            description: course.description,
            price: course.price,
            duration: course.duration,
            startDate: course?.['start_date'],
            requirements: course.requirements,
            applyingLink: course.applying_link,
          }));
        });

        setMajors(fetchedMajors);
        setSelectedMajor(Object.keys(fetchedMajors)[0]);
      } catch (error) {
        console.error('Error fetching majors and courses:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMajors();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionSelect = (major) => {
    setSelectedMajor(major);
    setVisibleCards(6);
    setIsDropdownOpen(false);
  };

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCards(6);
  };

  const selectedCourses = (majors[selectedMajor] || [])
  .filter((course) => !course.title.includes('ACP') && !course.title.includes('CDTP'))
  .sort((a, b) => {
    // Prioritize courses with 'open' status
    if (a.status === 'open' && b.status !== 'open') return -1;
    if (a.status !== 'open' && b.status === 'open') return 1;

    // Parse the start dates for sorting
    const parseDate = (date) => {
      if (!date) return Infinity; // Push courses without a start date to the end
      const [day, month, year] = date.split(' ');
      const monthNames = {
        يناير: 0, فبراير: 1, مارس: 2, أبريل: 3, مايو: 4,
        يونيو: 5, يوليو: 6, أغسطس: 7, سبتمبر: 8,
        أكتوبر: 9, نوفمبر: 10, ديسمبر: 11,
      };
      return new Date(year, monthNames[month], day).getTime();
    };

    return parseDate(a.startDate) - parseDate(b.startDate);
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='major-filter-container'>
      <div className='filter-container'>
        <h5 className='choose-major-desc'>    .أختر التخصص من القائمة أدناه واستعرض الدورات التدريبية التي تناسب احتياجك المهني لتحقيق طموحك   </h5>
        <h4 className='choose-major-title'>أختر التخصص</h4>
        <div className='custom-dropdown'>
          <div className='selected-option' onClick={toggleDropdown}>
            {selectedMajor || 'أختر التخصص'}
          </div>
          {isDropdownOpen && (
            <ul className='dropdown-options'>
              {Object.keys(majors)
                  .filter((major) => !['الدورات التأهيلية للشهادات الاحترافية', 'الورش التدريبية'].includes(major)) 
                  .map((major, index) => (
                    <li
                      key={index}
                      className="dropdown-option"
                      onClick={() => handleOptionSelect(major)}
                    >
                  {major}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <h2 className='major-title'>{selectedMajor}</h2>

      <div className='cards-container'>
        {selectedCourses.map((course, index) => {
          if (index < visibleCards) {
            return (
              <Card 
                key={index} 
                title={course.title} 
                status={course.status} 
                description={course.description}
                price={course.price}
                duration={course.duration}
                startDate={course.startDate}  
                requirements={course.requirements}  
                link={course.applyingLink}          
              />
            );
          }
          return null;
        })}
      </div>

      <div className='show-more-container'>
        {visibleCards < selectedCourses.length && (
          <button className='show-more-button' onClick={handleShowMore}>
            عرض المزيد
          </button>
        )}
        {visibleCards > 6 && (
          <button className='show-less-button' onClick={handleShowLess}>
            عرض أقل
          </button>
        )}
      </div>
    </div>
  );
}

export default MajorFilter;
