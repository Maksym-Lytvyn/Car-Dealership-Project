import { CarsListItem } from 'components/CarListItem';


export const CarsList = ({cars}) => {
    return (
        <div style={{maxWidth: '100%', paddingLeft: 15, paddingRight: 15, marginLeft: 'auto', marginRight: 'auto'}}>
        <ul style={{display: 'flex', flexWrap: 'wrap', rowGap: 50, columnGap: 29, paddingTop: 50, paddingBottom: 50}}>
            {cars.map(({  id, make, model, year, rentalPrice, address, rentalCompany, type, accessories, mileage, img }) => (
                <CarsListItem
                    key={id}
                    id={id}
                    make={make}
                    model={model}
                    year={year}
                    rentalPrice={rentalPrice}
                    address={address}
                    rentalCompany={rentalCompany}
                    type={type}
                    accessories={accessories}
                    mileage={mileage}
                    img={img}
                />
            ))}
        </ul>
        </div>
    );
};