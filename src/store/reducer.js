// 手册太多不利于查找 ，因此把手册分成几个小手册

import { combineReducers } from "redux";
import { reducer as bandReducer } from "../components/band/store";
import { reducer as missionReducer } from "../components/VisitorMission/store"
import { reducer as resourceReducer } from '../pages/resource/store'
import { reducer as softwareReducer } from '../pages/software/store'
import { reducer as AdminReducer } from "../components/Admin/store"
import { reducer as SearchReducer } from "../components/Search/store"
import { reducer as StudentReducer } from "../components/StudentMission/store"
import { reducer as TeacherReducer } from "../components/TeacherMission/store"
import { reducer as CourseReducer } from "../components/TeacherCourse/store"


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
