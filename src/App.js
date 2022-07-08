import './App.css';
import './resources/styles/globalStyle/common.css'
import {Routes, Route} from 'react-router-dom';
import AdministrationPage from './components/AdministrationPage';
import LessonPage from './components/LessonPage';
import HomePage from './components/HomePage';
import NotFound from './pages/NotFound';
import ExamPage from './components/ExamPage';
import CoursePage from './components/CoursePage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/admin' element={<AdministrationPage/>} />
          <Route path='/login' element={localStorage.getItem("accessUserId") ? <HomePage/> : <LoginPage/>}/>
          <Route path="/course/:courseid" element={<CoursePage/>} />
          <Route path='/course/:courseid/lesson/:lessonid' element={<LessonPage/>} />
          <Route path="/*" component={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
