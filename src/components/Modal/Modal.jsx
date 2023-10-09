import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { selectCars } from "redux/selectors";
import { verifyAge } from "tools";

import { ReactComponent as CloseIcon } from '../../images/icons/close.svg';
import { DetailsItem, iconStyles } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ carId, onClose }) => {
    const cars = useSelector(selectCars);

    const {
        id,
        make,
        model,
        year,
        rentalPrice,
        address,
        type,
        accessories,
        mileage,
        img, fuelConsumption, engineSize, description, functionalities, rentalConditions
    } = cars.find(item => item.id === carId);

    const city = address.split(',')[1];
    const country = address.split(',')[2];
    const ageCondition = verifyAge(rentalConditions);

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'visible';
        };
    }, [onClose]);

    const handleClickBackdrop = e => {
        if (e.target === e.currentTarget) onClose();
    }; 
    
    return createPortal(
        <div style={{position: 'fixed', top: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(18, 20, 23, 0.5)', backdropFilter: 'blur(2px)'}} onClick={handleClickBackdrop}>
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: 14, backgroundColor: '#FFFFFF', width: 541,  maxHeight: 830, overflow: 'auto', padding: 34}}>
                <CloseIcon style={iconStyles} onClick={onClose}/>
                <img src={img} alt={make} loading="lazy"  width="469" height="314" style={{width: '100%', height: 314, display: 'block', objectFit: 'cover', borderRadius: 14}}/>
                <div style={{marginTop: 14, marginBottom: 24}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, paddingBottom: 8}}>
                        <h2 style={{fontWeight: 500, fontSize: 18, lineHeight: 1.33, color: '#121417'}}>{make} <span style={{color: '#3470FF'}}>{model}, </span>{year}</h2>
                    </div>
                    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                        <DetailsItem>{city}</DetailsItem>
                        <DetailsItem>{country}</DetailsItem>
                        <DetailsItem>Id: {id}</DetailsItem>
                        <DetailsItem>Year: {year}</DetailsItem>
                        <DetailsItem>Type: {type}</DetailsItem>
                    </ul>
                    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                        <DetailsItem>Fuel Consumption: {fuelConsumption}</DetailsItem>
                        <DetailsItem>Engine Size: {engineSize}</DetailsItem>
                    </ul>
                    <p style={{lineHeight: 1.43, marginTop: 14, width: 461}}>{description}</p>
                    <h3 style={{fontWeight: 400, fontSize: 14, lineHeight: 1.43, color: '#121417', marginTop: 24, marginBottom: 8}}>Accessories and functionalities:</h3>
                    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                        {accessories.map(item => (<DetailsItem key={item}>{item}</DetailsItem>))}
                    </ul>
                    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                        {functionalities.map(item => (<DetailsItem key={item}>{item}</DetailsItem>))}
                    </ul>
                    <h3 style={{fontWeight: 400, fontSize: 14, lineHeight: 1.43, color: '#121417', marginTop: 24, marginBottom: 8}}>Rental Conditions:</h3>
                    <ul style={{display: 'flex', flexWrap: 'wrap', gap: 8, fontFamily: 'Montserrat, sans-serif', fontSize: 12, letterSpacing: -0.24, width: 461}}>
                        <li style={{borderRadius: 35, color: '#363535', backgroundColor: '#F9F9F9', padding: '7px 14px'}}><p>{ageCondition.conditionText}<span style={{color: '#3470FF', fontWeight: 600}}> {ageCondition.minAge}</span></p></li>
                        <li style={{borderRadius: 35, color: '#363535', backgroundColor: '#F9F9F9', padding: '7px 14px'}}>{rentalConditions.split('\n')[1]}</li>
                        <li style={{borderRadius: 35, color: '#363535', backgroundColor: '#F9F9F9', padding: '7px 14px'}}>{rentalConditions.split('\n')[2]}</li>
                        <li style={{borderRadius: 35, color: '#363535', backgroundColor: '#F9F9F9', padding: '7px 14px'}}>Mileage: <span style={{color: '#121417', fontWeight: 600}}>{mileage.toLocaleString('en-US')}</span></li>
                        <li style={{borderRadius: 35, color: '#363535', backgroundColor: '#F9F9F9', padding: '7px 14px'}}>Price: <span style={{color: '#121417', fontWeight: 600}}>{rentalPrice}</span></li>
                    </ul>
                </div>
                <a href="tel:+380730000000" style={{width: 168, height: 44, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 12, backgroundColor: '#3470FF', color: '#FFFFFF', fontSize: 14, fontWeight: 600, lineHeight: 1.43, transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer'}}>Rental car</a>
            </div>
        </div>,
        modalRoot,
    );    
};