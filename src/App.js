import './App.css';
import './resources/styles/globalStyle/common.css'
import {Routes, Route, Link, Router, Switch} from 'react-router-dom';
import AdministrationPage from './components/AdministrationPage';
import LessonPage from './components/LessonPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
        <LessonPage/>

        <Routes>
          
        </Routes>
    </div>
  );
}

export default App;
