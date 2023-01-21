//определеям значения счетчиков
const counter = (state = 1, action) => {
    switch (action.type) {
        //увеличенное на единицу значение счетчика отправляем в хранилище store
        case "INCREMENT":            
            return state+1;
        //уменьшенное на единицу значение счетчика отправляем в хранилище store  
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}

//новую информацию о состоянии счетчика отправляем в хранилище store
export default counter;