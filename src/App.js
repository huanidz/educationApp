import './App.css';
import './resources/styles/globalStyle/common.css'
import {Routes, Route, Link, Router, Switch} from 'react-router-dom';
import AdministrationPage from './components/AdministrationPage';
import LessonPage from './components/LessonPage';
import HomePage from './components/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/course/:courseid/lesson/:lessonid' element={<LessonPage/>} />
          <Route path="/*" component={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
