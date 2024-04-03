// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    // ↙️ cюди вводимо назву файлу з сontainer
    res.render('index', {
      // вказуємо назву контейнера
      name: 'index',
      // вказуємо назву компонентів
      component: [],
  
      // вказуємо назву сторінки
      title: 'Index page',
      // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout
  
      // вказуємо дані,
      data: {},
    })
    // ↑↑ сюди вводимо JSON дані
  })

  router.get('/home', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    // ↙️ cюди вводимо назву файлу з сontainer
    res.render('home', {
      // вказуємо назву контейнера
      name: 'home',
      // вказуємо назву компонентів
      component: [],
  
      // вказуємо назву сторінки
      title: 'Home page',
      // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout
  
      // вказуємо дані,
      data: {},
    })
    // ↑↑ сюди вводимо JSON дані
  })

  const auth = require('./auth')
  // Об'єднайте файли роутів за потреби
  router.use('/', auth)


// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
