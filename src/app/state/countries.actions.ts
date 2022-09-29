import { createAction, props } from "@ngrx/store";
import { CountriesModel } from "../CountriesModel";

export const retrievedCountriesList = createAction(
    '[Countries List/ API] Retrieve Countries',
    props<{ countries: Array<CountriesModel>}>()    
)
