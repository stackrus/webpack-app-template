# Шаблон для инициализации проектов с помощью Webpack 

## Webpack        
— это инструмент, позволяющий скомпилировать, например, JavaScript модули в единый JS-файл. Webpack также известен как сборщик модулей.
При большом количестве файлов он создает один объемный файл (или несколько файлов) для запуска вашего приложения.
Он также способен выполнять множество иных операций:

1. помогает собрать воедино ваши ресурсы  
2. следит за изменениями и повторно выполняет задачи
3. может выполнить транспиляцию JavaScript следующего поколения до более старого стандарта JavaScript (ES5) с помощью Babel, что позволит использовать новейшие функции JavaScript, не беспокоясь о том, поддерживает их браузер или нет
4. может выполнить транспиляцию CoffeeScript в JavaScript
5. может конвертировать встроенные изображения в data:URI
6. позволяет использовать require() для CSS файлов
7. может запустить webpack-dev-server (в нём встроен локальный сервер и livereload (“живая перезагрузка браузера”)) - *в данном шаблоне по умолчанию запускается с помощью скрипта* **npm start**
8. может работать с Hot Module Replacement (замена горячего модуля)
9. может разделить выходной файл (output file) на несколько файлов, чтобы избежать медленной загрузки страницы из-за большого размера JS-файла
10. может выполнить Tree Shaking
11. Webpack не ограничивается одним лишь фронтендом, его также успешно применяют в бэкенд разработке на Node.js.

  У Webpack есть предшественники, у которых он перенял многие идеи. Основное различие заключается в том, что те инструменты известны как task runners (такс-раннеры), в то время как Webpack ничто иное, как сборщик модулей.

  Webpack — это более целенаправленный инструмент. Вам достаточно указать точку входа в ваше приложение (это может быть даже HTML-файл с тегами <script>), а webpack проанализирует файлы и объединит их в один выходной JavaScript-файл, содержащий все необходимое для запуска приложения.

 
   
  
