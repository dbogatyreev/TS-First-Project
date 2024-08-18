import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UserPage from './Component/UserPage';
import TodosPage from './Component/TodosPage';
import UserItemPage from './Component/UserItemPage';
import TodoItemPage from './Component/TodoItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/users" style={{ marginRight: '10px' }}>Пользователи</NavLink>
          <NavLink to="/todos">Список дел</NavLink>
        </nav>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todo/:id" element={<TodoItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
