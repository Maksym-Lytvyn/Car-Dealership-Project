import noResultsFound from '../../images/backgrounds/No_results_found.jpg';
import { Container, Text } from './NotFiltred.styled';


export const NoFiltred = () => {
    return (
        <Container>
            <img src={noResultsFound} alt="No results found" width="400" />
            <Text>Вибачте, за вашим запитом немає результатів. <br/>Спробуйте інший запит</Text>
        </Container>
    )
};