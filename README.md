# Вычислитель отличий (JS)

[![CI](https://github.com/OttIvan/frontend-project-46/actions/workflows/ci.yml/badge.svg)](https://github.com/OttIvan/frontend-project-46/actions/workflows/ci.yml)

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

По умолчанию `gendiff` выводит различия в формате `stylish`. Сравнение двух JSON-файлов:

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

Для вложенных объектов вывод показывает изменения на каждом уровне. Сравнение двух YAML-файлов с явным выбором формата:

```bash
node gendiff.js --format stylish __fixtures__/file1.yml __fixtures__/file2.yaml
```

Файлы JSON и YAML можно сравнивать между собой.

Справка по команде:

```bash
gendiff --help
```

### Демонстрация работы

Запись работы программы с помощью asciinema:

[![Демонстрация gendiff](https://asciinema.org/a/Kp9FjLKo4p8hCspD.svg)](https://asciinema.org/a/Kp9FjLKo4p8hCspD)

[Скачать запись сравнения YAML (asciinema)](docs/gendiff-yaml.cast). Команда для воспроизведения записи:

```bash
asciinema play docs/gendiff-yaml.cast
```

[Скачать запись сравнения вложенных файлов в формате stylish](docs/gendiff-stylish.cast). Команда для воспроизведения:

```bash
asciinema play docs/gendiff-stylish.cast
```

---

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
