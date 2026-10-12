# Вычислитель отличий (JS)

[![hexlet-check](https://github.com/OttIvan/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/OttIvan/frontend-project-46/actions)

Узнаете, как создавать cli приложения, парсить и форматировать данные в json, yaml. Научитесь проектировать архитектуру приложений. А также писать unit-тесты.

Учебный проект Хекслета: https://ru.hexlet.io/programs/frontend
Как это должно работать: https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii

## Стек

- JavaScript

## Установка

Клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/OttIvan/frontend-project-46.git
cd frontend-project-46
npm install
```

## Использование

Сравнение двух JSON-файлов:

```bash
gendiff file1.json file2.json
```

Пример результата:

```text
{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
```

Справка по команде:

```bash
gendiff --help
```

---

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
