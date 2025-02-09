import { Route, Routes } from 'react-router-dom';
import CreatePages from './pages/CreatePages.jsx';
import HomePages from './pages/HomePages.jsx';
import Navbar from './components/Navbar.jsx';
import { ThemeProvider, useTheme } from './context/ThemeContext';  // Import ThemeProvider & useTheme

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen flex flex-col`}>
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/create' element={<CreatePages />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
