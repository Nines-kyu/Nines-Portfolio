import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='flex flex-col items-center text-white justify-center flex-grow p-6 bg-black'>
            <div className='flex grow w-full items-center justify-center text-black bg-white'>
                <p>Hi!</p>
            </div>
        </div>
    );
};

export default Home;