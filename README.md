# Кастомная тема для Slidev

Эта тема включает в себя:
- Пользовательские компоненты
- Кастомные инструменты
- Специальные стили и макеты

## Установка

Сам Slidev yстанавливается стандартно
в консоли из папки проекта запустите
```bash
npm init slidev@latest
```
подробнее на https://sli.dev/guide/

## Настройка

1) Отредактируйте `package.json`:
```json
{
  "name": "slidev",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "slidev build",
    "dev": "slidev --open",
    "dev:chrome": "BROWSER='google chrome' slidev --open",
    "export": "slidev export",
    "docs": "slidev docs/docs.md --open"
  },
  "dependencies": {
    "@slidev/cli": "^51.4.0",
    "@slidev/types": "^51.4.0",
    "@vueuse/core": "^13.0.0",
    "codemirror-theme-vars": "^0.1.1",
    "prism-theme-vars": "^0.2.4",
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "slidev-theme-custom": "https://github.com/xeno-sama/slidev_theme.git"
  }
}
```

2) запустите в консоли
```bash
cp -r node_modules/slidev-theme-custom/docs/ docs
```
это скопирует документацию из кастомной темы в ваш проект в папку docs

3) запустите в консоли
```bash
npm install 
```
чтобы скачать тему из ГИТа

# Документация
просмотреть можно через команду
```bash
npm run docs
```