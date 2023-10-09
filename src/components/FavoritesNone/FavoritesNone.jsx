import { useNavigate } from 'react-router-dom';
import noResultsFound from '../../images/backgrounds/No_results_found.jpg';
import { Button, Container, Text } from './FavoritesNone.styled';
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
            <Container>
                <img src={noResultsFound} alt="No results found" width="400" />
                <Text>Вибачте, але у вас немає улюблених товарів. <br/>Перейдіть до каталогу та додайте товари до улюбленого</Text>
                <Button onClick={() => navigate('/catalog')}>До каталогу</Button>
            </Container>
        }
        </>
    )
};