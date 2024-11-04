import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Landing from './components/Landing';
import BorrowB from './components/BorrowB';
import History from './components/History';
import BookDetails from './components/BookDetails'; // Import the BookDetails component
import User from './components/User'; // Import User component
import LandingLayout from './components/Layout/LandingLayout'; // Ensure LandingLayout is properly imported
import Category from './components/Category'; // Import the Category component
import Notif from './components/Notif';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Landing />} />
          <Route path="BorrowB" element={<BorrowB />} />
          <Route path="History" element={<History />} />
          <Route path="books/:bookTitle" element={<BookDetails />} />
          <Route path="User" element={<User />} />
          <Route path="category/:categoryName" element={<Category />} /> {/* New route for categories */}
          <Route path="Notif" element={<Notif />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
