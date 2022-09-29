import { Action, createReducer, on } from "@ngrx/store";
import { CountriesModel } from "../CountriesModel";
import * as actions from './countries.actions'
import { State } from './app.state'

export const initialState: ReadonlyArray<CountriesModel> = [];

export const countriesReducer = createReducer (
    initialState,
    on(actions.retrievedCountriesList, (state, {countries}) => countries)
);
