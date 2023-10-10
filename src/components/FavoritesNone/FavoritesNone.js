import { useNavigate } from 'react-router-dom';
import noResultsFound from '../../images/themes/No_results_found.jpg';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Spinner } from 'components/Spinner';

export const NoFavorites = () => {
    const navigate = useNavigate();
    const loading = useSelector(selectIsLoading);

    return (
        <>
        {loading ? <Spinner />
            : 
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px 25px', marginLeft: 'auto', marginRight: 'auto', maxWidth: 1200}}>
                <img src={noResultsFound} alt="No results found" width="400" />
                <p style={{marginTop: 50, marginBottom: 25, color: '#121417', textAlign: 'center', fontSize: 16}}>Вибачте, але у вас немає улюблених товарів. <br/>Перейдіть до каталогу та додайте товари до улюбленого</p>
                <button style={{width: 270, height: 44, marginBottom: 50, borderRadius: 12, backgroundColor: '#3470FF', color: '#FFFFFF', fontSize: 14, fontWeight: 600, lineHeight: 1.43, cursor: 'pointer', transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)'}} onClick={() => navigate('/catalog')}>До каталогу</button>
            </div>
        }
        </>
    )
};