import './App.css';
import './resources/styles/globalStyle/common.css'
import {Routes, Route} from 'react-router-dom';
import AdministrationPage from './components/AdministrationPage';
import LessonPage from './components/LessonPage';
import HomePage from './components/HomePage';
import NotFound from './pages/NotFound';
import CoursePage from './components/CoursePage';
import LoginPage from './components/LoginPage';
import Index from './components/groupChat/Index'
import SignUpPage from './components/SignUpPage';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/chat' element={<Index/>} />

          <Route path='/admin' element={<AdministrationPage/>} />
          <Route path='/login' element={localStorage.getItem("accessUserId") ? <HomePage/> : <LoginPage/>}/>
          <Route path='/signup' element={localStorage.getItem("accessUserId") ? <HomePage/> : <SignUpPage/>}/>
          <Route path="/course/:courseid" element={<CoursePage/>} />
          <Route path='/course/:courseid/lesson/:lessonid' element={localStorage.getItem("accessUserId") ? <LessonPage/> : <LoginPage/>} />
          <Route path="/*" component={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
