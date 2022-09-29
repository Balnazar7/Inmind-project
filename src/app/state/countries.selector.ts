import { createFeatureSelector } from "@ngrx/store";
import { CountriesModel } from "../CountriesModel";

export const selectCountries = createFeatureSelector<Array<CountriesModel>>('countries');