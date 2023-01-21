//составляем информацию о текущем пользователе
const currentUser = (state = {}, action) => {
    switch (action.type) {
        //составляем информацию о текущем пользователе, которую передаем в хранилище store при его авторизации
        case "SET_USER":
            return {
                ...state,
                //полученная информация о текущем пользователе
                user: action.payload,
                //флаг авторизации текущего пользователя положительный
                loggedIn: true
            }
        //из хранилища store вычищаем информацию о текущем пользователе при отмене его авторизации
        case "LOG_OUT":
            return {
                ...state,
                //информации о текущем авторизованном пользователе нет
                user: {},
                //флаг авторизации текущего пользователя отрицательный
                loggedIn: false
            }
        default:
            return state;
    }
}

//составленную информацию о текущем пользователе по конкретным меткам отправляем в хранилище store
export default currentUser;