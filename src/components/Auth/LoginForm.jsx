import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://connections-api.herokuapp.com/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Сохраните токен JWT в localStorage
        localStorage.setItem('token', data.token);

        // Перенаправьте пользователя на другую страницу
        window.location.href = '/contacts';
      } else {
        // Обработка ошибки входа
        // Выведите сообщение об ошибке или выполните другие действия
      }
    } catch (error) {
      // Обработка ошибок сети или других ошибок
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
