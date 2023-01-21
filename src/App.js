import React, {useEffect, useMemo} from 'react';
//вытаскиваем хуки useSelector и useDispatch
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
//вытаскиваем все функции запросов связанных с счетчиком и с текущим пользователем
import allActions from './actions';

//страница иллюстрации хука useSelector
const App = () => {
  //информацию о счетчике вытаскиваем с помощью хука useSelector    
  const counter = useSelector(state => state.counter);
  //информацию о текущем пользователе вытаскиваем с помощью хука useSelector  
  const currentUser = useSelector(state => state.currentUser);

  //вытаскиваем компонент dispatch из хука useDispatch
  const dispatch = useDispatch();

  //задаем имя текущего пользователя
  const user = useMemo(() => "Rey", []);

  useEffect(() => {
    //прежде всего, проводим авторизацию текущего пользователя
    dispatch(allActions.userActions.setUser(user))
  }, [dispatch, user])

  return (
    <div className="App">
      {
        //случай когда текущий пользователь авторизован
        currentUser.loggedIn ?
        <>
          {/*Выводим имя текущего пользователя */}
          <h1>Hello, {currentUser.user.name}</h1>
          {/*Кнопка снятия авторизации с текущего пользователя */}
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </>
        :
        //случай когда текущий пользователь авторизован
        <>
          <h1>Login</h1>
          Х
          {/*Кнопка запуска процесса по авторизации текущего пользователя */}
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Rei</button>
        </>
      }
      {/*Текущее значение счетчика */}
      <h1>Counter: {counter}</h1>
      {/*Кнопка увеличения значения счетчика на единицу */}
      <button onClick={() => dispatch(allActions.counterActions.increment())}>Increase Counter</button>
      {/*Кнопка уменьшения значения счетчика на единицу */}
      <button onClick={() => dispatch(allActions.counterActions.decrement())}>Decrease Counter</button>
    </div>
  )
}

export default App;