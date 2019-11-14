// 手册太多不利于查找 ，因此把手册分成几个小手册

import { combineReducers } from "redux";
import bandReducer from "../reducers/band";
import missionReducer from "../reducers/vistorMission"
import resourceReducer from '../reducers/resourse'
import softwareReducer from '../reducers/software'
import AdminReducer from "../reducers/admin"
import SearchReducer from "../reducers/search"
import StudentReducer from "../reducers/stuMission"
import TeacherReducer from "../reducers/teaMission"
import CourseReducer from "../reducers/teaCourse"


const reducer = combineReducers({

    band: bandReducer,
    mission: missionReducer,
    software: softwareReducer,
    resource: resourceReducer,
    admin: AdminReducer,
    search: SearchReducer,
    student: StudentReducer,
    teacher: TeacherReducer,
    course: CourseReducer

});
export default reducer;
