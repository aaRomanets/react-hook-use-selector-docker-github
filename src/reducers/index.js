//вытаскиваем редюсер по текущему пользователю
import currentUser from './currentUser';
//вытаскиваем редюсер по счетчику
import counter from './counter';
import {combineReducers} from 'redux';

//составляем корневой редюсер
const rootReducer = combineReducers({
    //редюсер по текущему пользователю
    currentUser,
    //редюсер по счетчику
    counter
})

export default rootReducer;