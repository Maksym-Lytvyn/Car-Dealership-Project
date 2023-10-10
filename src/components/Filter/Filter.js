import { useRef } from "react";
import { useDispatch } from "react-redux";
import Notiflix from "notiflix";
import { getAllCars } from "redux/operations";
import { updateFilter } from "redux/filtersSlice";
import { SelectInput } from "components/Select/Select";
import { transformSelectData } from "tools";
import {
  InputMileageFrom,
  InputMileageTo,
} from "./Filter.styled";

const makes = [
    "Dacia",
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
    "Renault",
];
const optionsBrand = transformSelectData(makes);

const optionsPrice = Array.from({ length: 38 }, (_, index) => ({
  value: String((index + 3) * 10),
  label: String((index + 3) * 10),
}));

export const Filter = () => {
  const dispatch = useDispatch();
  const selectBrandRef = useRef(null);
  const selectPriceRef = useRef(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value.trim();
    const mileageFrom = form.elements.mileageFrom.value;
    const mileageTo = form.elements.mileageTo.value;
    const price = form.elements.price.value;

    if (
      brand === "" ||
      price === "" ||
      mileageFrom === "" ||
      mileageTo === ""
    ) {
      Notiflix.Notify.failure("Будь-ласка, введіть дані");
      return;
    }
    dispatch(updateFilter({ brand, price, mileageFrom, mileageTo }));
    dispatch(getAllCars());
    form.reset();
    selectBrandRef.current.clearValue();
    selectPriceRef.current.clearValue();
  };


  return (
    <div style={{paddingLeft: 15, paddingRight: 15, maxWidth: 1200, paddingTop: 80, marginLeft: 'auto', marginRight: 'auto'}}>
      <form style={{display: 'flex', gap: 18, alignItems: 'center', justifyContent: 'center', flexWrap: 'nowrap', flexDirection: 'row'}} onSubmit={handleSubmitForm}>
        <div style={{display: 'flex', gap: 18}}>
          <label style={{display: 'block', marginBottom: 8, color: '#8A8A89', fontSize: 14, position: 'relative'}}>
            Марка машини
            <div style={{width: 250}}>
              <SelectInput
                name={"brand"}
                options={optionsBrand}
                refProp={selectBrandRef}
                placeholder={"Введіть запит"}
              />
            </div>
          </label>
          <label style={{display: 'block', marginBottom: 8, color: '#8A8A89', fontSize: 14, position: 'relative'}}>
            Ціна / годину
            <div style={{width: 125}}>
              <SelectInput
                name={"price"}
                options={optionsPrice}
                refProp={selectPriceRef}
                placeholder={"До $"}
              />
            </div>
          </label>
        </div>
        <div style={{display: 'flex', position: 'relative', width: 320}}>
          <label style={{display: 'block', marginBottom: 8, color: '#8A8A89', fontSize: 14, position: 'relative'}}>
            Пробіг / км
            <p style={{position: 'absolute', top: 35, left: 22, color: '#000000', fontWeight: 500, lineHeight: 1.11, fontSize: 18}}>Від</p>
            <InputMileageFrom
              required
              type="number"
              name="mileageFrom"
              min="4000"
              max="6000"
              title="Enter a number from 4000 to 6000"
            />
          </label>
          <label style={{color: "white", fontSize: 14, position: 'relative', display: 'block', marginBottom: 8}}>
            Пробіг / км
            <p style={{position: 'absolute', top: 35, left: 22, color: '#000000', fontWeight: 500, lineHeight: 1.11, fontSize: 18}}>До</p>
            <InputMileageTo
              required
              type="number"
              name="mileageTo"
              min="4001"
              max="7000"
              title="Enter a number from 4001 to 7000"
            />
          </label>
        </div>

        <div style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center', marginTop: 4}}>
          <button style={{height: 48, minWidth: 136, marginTop: 10, borderRadius: 12, backgroundColor: '#3470FF', color: '#FFFFFF', fontSize: 14, fontWeight: 600, cursor: 'pointer'}} type="submit">Пошук</button>
        </div>
      </form>
    </div>
  );
};
