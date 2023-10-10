import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header
        style={{
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: 'rgba(18, 20, 23, 0.1)',
        }}
      >
        <div
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: 1200,
          }}
        >
          <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
            <Link to="/">
              RentCar
              <span style={{ color: '#0B44CD' }}>Easy</span>
            </Link>
            <Link to="/catalog">Каталог</Link>
            <Link to="/favorites">Улюблене</Link>
          </nav>
        </div>
      </header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
