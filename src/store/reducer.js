// 手册太多不利于查找 ，因此把手册分成几个小手册

import { combineReducers } from "redux";
import { reducer as bandReducer } from "../components/band/store";
import { reducer as missionReducer } from "../pages/mission/store"
import { reducer as resourceReducer } from '../pages/resource/store'
import { reducer as softwareReducer } from '../pages/software/store'


const reducer = combineReducers({

    band: bandReducer,
    mission: missionReducer,
    software: softwareReducer,
    resource: resourceReducer

});
export default reducer;
