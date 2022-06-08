import {NameSpace} from '../../const/store';
import {State} from '../../types/state';
import { GuitarsData } from '../../types/card-data';

export const getGuitars = (state: State): GuitarsData => state[NameSpace.data].guitars;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
