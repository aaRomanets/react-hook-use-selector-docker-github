//запрос на авторизацию текущего пользователя
export const setUser = (userObj) => {
    return {
        //метка запроса на авторизацию текущего пользователя
        type: "SET_USER",
        //информация об авторизуемом пользователе
        payload: userObj
    }
}

//запрос на снятие авторизации с текущего пользователя
export const logOut = () => {
    return {
        //метка запроса на снятие авторизации с текущего пользователя, если он был авторизован
        type: "LOG_OUT"
    }
}

//экспортируем функции составленных запросов
const userActions = {
    setUser,
    logOut
};

export default userActions;