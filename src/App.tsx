import HomePage from './components/HomePage';
import { CourseProvider } from './context/CourseContext';

function App() {
  return (
    <CourseProvider>
      <HomePage />
    </CourseProvider>
  );
}

export default App;
