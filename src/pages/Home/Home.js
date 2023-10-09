import { Link } from "react-router-dom";
import CarHomepage from '../../assets/Car-Homepage.jpg';

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
      <h1 style={{ color: '#0B44CD', padding: 20, textAlign: 'center'}}>Вже готові до замовлення?</h1>
      <Link to="/catalog">Перейти до каталогу</Link>
    </div>
  );
};

export default Home;
