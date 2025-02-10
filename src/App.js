import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CoursesScreen from './Screens/CoursesScreen';
import PreparationsCoursesScreen from './Screens/PreparationsCoursesScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<CoursesScreen />} />
        <Route path="/preparation-courses" element={<PreparationsCoursesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;