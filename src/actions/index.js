//вытаскиваем функции действий, связанных с счетчиком
import  {increment, decrement} from "./counterActions";
//вытаскиваем функции действий, связанных с текущим пользователем
import {setUser, logOut} from "./userActions";

//экспортируем все действия
const allActions = 
{
    counterActions : {increment, decrement},
    userActions : {setUser, logOut}
}

export default allActions;