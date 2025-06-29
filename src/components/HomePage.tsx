import React, { useState, useEffect } from 'react';
import Sidebar from './HomePage/Sidebar';
import Header from './HomePage/Header';
import Dashboard from './HomePage/Dashboard';
import ProfileCard from './HomePage/ProfileCard';
import InfoAccordion from './HomePage/InfoAccordion';
import QuickActions from './HomePage/QuickActions';
import Footer from './HomePage/Footer';
import PopupModal from './common/PopupModal';
import { PopupProvider } from '../context/PopupContext';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../hooks/useTheme';

const HomePage: React.FC = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Check screen size and update responsive states
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setIsMobile(width < 768);
            setIsSmallScreen(width < 1320);
            setIsSidebarHidden(width < 1280 || height < 600);
            
            // Auto-close sidebar on larger screens
            if (width >= 768) {
                setSidebarOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <PopupProvider>
            <div className={`flex w-full h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#faf9f6]'} transition-colors duration-300 ${isSmallScreen ? 'overflow-auto' : 'overflow-hidden'}`}>
                {/* Sidebar - Hidden on mobile and when screen is small */}
                {!isMobile && !isSidebarHidden && <Sidebar darkMode={darkMode} />}

                {/* Mobile Sidebar Overlay */}
                {isMobile && sidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Mobile Sidebar */}
                {isMobile && (
                    <div className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                        <Sidebar darkMode={darkMode} />
                    </div>
                )}

                {/* Small Screen Sidebar Overlay */}
                {isSidebarHidden && sidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Small Screen Sidebar */}
                {isSidebarHidden && (
                    <div className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                        <Sidebar darkMode={darkMode} />
                    </div>
                )}

                {/* Main Content */}
                <main className={`flex-1 flex flex-col ${isSmallScreen ? 'min-h-screen' : 'h-full'}`}>
                    <Header darkMode={darkMode} showHamburger={isSidebarHidden} onHamburgerClick={toggleSidebar}>
                    </Header>

                    {/* Content Area */}
                    <div className={`flex flex-1 flex-col gap-4 mx-8 ${isSmallScreen ? 'pb-8' : 'min-h-0'}`}>
                        {/* Right Sidebar - Above Dashboard for small screens */}
                        {isSmallScreen && (
                            <aside className={`w-full flex flex-col gap-4 ${darkMode ? 'bg-gray-800' : 'bg-[#f3eedd]'} rounded-2xl p-4 transition-colors duration-300`}>
                                <ProfileCard darkMode={darkMode} />
                                <InfoAccordion darkMode={darkMode} />
                                <QuickActions darkMode={darkMode} />
                            </aside>
                        )}
                        
                        <Dashboard darkMode={darkMode} />
                    </div>

                    <Footer darkMode={darkMode} />
                </main>

                {/* Right Sidebar - Original layout for large screens */}
                {!isSmallScreen && (
                    <aside className={`w-80 flex flex-col gap-4 m-4 ${darkMode ? 'bg-gray-800' : 'bg-[#f3eedd]'} rounded-2xl p-4 transition-colors duration-300`}>
                        <ProfileCard darkMode={darkMode} />
                        <InfoAccordion darkMode={darkMode} />
                        <QuickActions darkMode={darkMode} />
                    </aside>
                )}

                {/* Dark Mode Toggle Button - Responsive positioning */}
                <IconButton 
                    onClick={toggleDarkMode}
                    sx={{ 
                        position: 'fixed',
                        bottom: { xs: 8, sm: 16 },
                        right: { xs: 8, sm: 16 },
                        zIndex: 50,
                        width: { xs: 48, sm: 56 }, 
                        height: { xs: 48, sm: 56 },
                        backgroundColor: darkMode ? '#ffffff' : '#374151',
                        color: darkMode ? '#374151' : '#ffffff',
                        boxShadow: 3,
                        '&:hover': {
                            backgroundColor: darkMode ? '#f3f4f6' : '#4B5563',
                            boxShadow: 4,
                            transform: 'scale(1.05)'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    {darkMode ? <WbSunnyIcon /> : <DarkModeIcon />}
                </IconButton>
            </div>
            <PopupModal />
        </PopupProvider>
    );
};

export default HomePage; 