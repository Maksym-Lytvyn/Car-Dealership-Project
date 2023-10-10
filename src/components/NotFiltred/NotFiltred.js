import noResultsFound from '../../images/themes/No_results_found.jpg';


export const NoFiltred = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingLeft: 25, paddingRight: 25, paddingBottom: 50, marginLeft: 'auto', marginRight: 'auto', maxWidth: 1200}}>
            <img src={noResultsFound} alt="No results found" width="400" />
            <p style={{marginTop: 50, marginBottom: 25, color: '#121417', textAlign: 'center', fontSize: 16}}>Вибачте, за вашим запитом немає результатів. <br/>Спробуйте інший запит</p>
        </div>
    )
};