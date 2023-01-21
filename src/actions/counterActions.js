//запрос на увеличение значения счетчика
export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

//запрос на уменьшение значения счетчика
export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

const counterActions = {
    increment,
    decrement
};

//экспортируем составленные функции запросов, которые связаны с счетчиком
export default counterActions