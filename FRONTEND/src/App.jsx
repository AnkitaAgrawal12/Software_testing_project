import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import MainPage from './Pages/MainPage';
import HomePage from './Pages/HomePage';
import NewPost from './Pages/NewPost';
import ContactPage from './Pages/ContactPage';
import BlogPage from './Pages/BlogPage';
import Edit from './Pages/Edit';
import ArticlePage from './Pages/ArticlePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/articlepage" element={<ArticlePage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/view/:postId" element={<BlogPage />} />
          <Route path="/updatepost/:postId" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
