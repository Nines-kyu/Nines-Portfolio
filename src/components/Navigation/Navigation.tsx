import './Navigation.css'
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Navi-logo.svg'

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActivebutton] = useState('#')
    const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' && window.innerWidth > 768);
    const logoRef = useRef<HTMLImageElement>(null);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const buttonClasses = 'font-poppins text-2xl px-2 py-1 relative underline-hover';

    const buttons = (
        <>
            {[
                { label: 'Home', href: '/' },
                { label: 'Network', href: '/network'},
            ].map(({label, href}) => (
                <Link
                    key={label}
                    to={href}
                    onClick={() => setActivebutton(label)}
                    className={`${buttonClasses} ${location.pathname === href && activeButton === label ? 'active-underline' : ''}`}
                >
                    {label}
                </Link>
            ))}
        </>
    );

    return (
        <nav className='bg-black text-white fixed w-full border-b-4 border-[#FF914D] sticky'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-36 lg:px-7 mx-auto'>
                    <div className='flex flex-row w-full justify-between items-center'>
                        <div className='flex items-center space-x-4'>
                            <div className='w-24 md:w-32'>
                                <Link to="/">
                                    <img
                                        src={Logo}
                                        alt='Logo'
                                        ref={logoRef}
                                    />
                                </Link>
                            </div>
                            <div className='font-poppins sm:text-4xl md:text-3xl lg:text-5xl'>
                                <Link to='/'>Nines九</Link>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-baseline space-x-2'>
                                { buttons }
                            </div>
                        </div>
                    </div>
                    <div className='md:hidden px-7'>
                        <button onClick={() => setIsOpen(!isOpen)} type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {!isDesktop && isOpen && (
                <div className='flex flex-col items-center gap-y-2 px-4 sm:px-6 pb-2'>
                    { buttons }
                </div>
            )}
        </nav>
    );
};

export default Navigation
