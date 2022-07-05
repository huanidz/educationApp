import './App.css';
import './resources/styles/globalStyle/common.css'
import {Routes, Route} from 'react-router-dom';
import AdministrationPage from './components/AdministrationPage';
import LessonPage from './components/LessonPage';
import HomePage from './components/HomePage';
import NotFound from './pages/NotFound';
import ExamPage from './components/ExamPage';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/course/:courseid/lesson/:lessonid' element={<LessonPage/>} />
          <Route path='/course/:courseid/lesson/:lessonid/exam' element={<ExamPage/>} />
          <Route path="/*" component={<NotFound/>} />
        </Routes>
    </div>
  );
}

export default App;
