import { Link } from 'react-router-dom';
import CarHomepage from '../assets/Car-Homepage.jpg';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${CarHomepage})`,
        fontSize: 40,
        color: '#010101',
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 style={{ color: 'black', padding: '20px', textAlign: 'center'}}>Home</h1>
      <Link to="/catalog">Move to catalog</Link>
    </div>
  );
};

export default Home;
