-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 25 2020 г., 07:36
-- Версия сервера: 8.0.15
-- Версия PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bd_vuz`
--

-- --------------------------------------------------------

--
-- Структура таблицы `direction`
--

CREATE TABLE `direction` (
  `id_direction` int(11) NOT NULL,
  `id_faculty_vk` int(11) NOT NULL,
  `direction_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `direction`
--

INSERT INTO `direction` (`id_direction`, `id_faculty_vk`, `direction_name`) VALUES
(1, 1, '09.03.01 Информатика и вычислительная техника'),
(2, 1, '09.03.04 Программная инженерия'),
(3, 2, '18.05.01 Химическая технология энергонасыщенных материалов и изделий'),
(4, 2, '24.05.02 Проектирование авиационных и ракетных двигателей'),
(8, 2, 'asdadadsadasd');

-- --------------------------------------------------------

--
-- Структура таблицы `discipline`
--

CREATE TABLE `discipline` (
  `id_discipline` int(11) NOT NULL,
  `id_direction_vk` int(11) NOT NULL,
  `discipline_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `discipline`
--

INSERT INTO `discipline` (`id_discipline`, `id_direction_vk`, `discipline_name`) VALUES
(1, 1, 'Математика'),
(2, 1, 'Философия'),
(3, 2, 'Математика'),
(4, 2, 'Философия'),
(5, 3, 'Математика'),
(6, 3, 'Философия'),
(7, 4, 'Математика'),
(8, 4, 'Философия'),
(11, 1, 'Рус'),
(12, 1, 'kekeks');

-- --------------------------------------------------------

--
-- Структура таблицы `faculty`
--

CREATE TABLE `faculty` (
  `id_faculty` int(11) NOT NULL,
  `faculty_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `faculty`
--

INSERT INTO `faculty` (`id_faculty`, `faculty_name`) VALUES
(1, 'Электрокекнически'),
(2, 'Аэрокосмический');

-- --------------------------------------------------------

--
-- Структура таблицы `result`
--

CREATE TABLE `result` (
  `id_result` int(11) NOT NULL,
  `id_student_vk` int(11) NOT NULL,
  `id_trial_vk` int(11) NOT NULL,
  `rating` int(1) NOT NULL,
  `writing_date` date NOT NULL,
  `attempt_number` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `result`
--

INSERT INTO `result` (`id_result`, `id_student_vk`, `id_trial_vk`, `rating`, `writing_date`, `attempt_number`) VALUES
(1, 1, 1, 4, '2019-12-28', 1),
(2, 1, 2, 4, '2020-06-15', 2),
(3, 1, 3, 5, '2019-12-29', 2),
(4, 1, 4, 5, '2020-06-15', 1),
(5, 2, 1, 3, '2019-12-28', 1),
(6, 2, 2, 3, '2020-06-15', 1),
(7, 2, 3, 3, '2019-12-29', 1),
(8, 2, 4, 3, '2020-06-15', 1),
(9, 5, 5, 5, '2020-06-15', 5),
(10, 7, 13, 1, '2000-01-01', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `student`
--

CREATE TABLE `student` (
  `id_student` int(11) NOT NULL,
  `id_group_vk` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `second_name` varchar(255) NOT NULL,
  `patronymic` varchar(255) NOT NULL,
  `gradebook_number` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `sex` tinyint(1) NOT NULL,
  `passport` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `student`
--

INSERT INTO `student` (`id_student`, `id_group_vk`, `first_name`, `second_name`, `patronymic`, `gradebook_number`, `birth_date`, `sex`, `passport`) VALUES
(1, 1, 'Ольга', 'Веретенова', 'Олеговна', '2020-ЭТФ-001', '1999-01-02', 0, '5719799524'),
(2, 1, 'Евгений', 'Селиверстов', 'Игоревич', '2020-ЭТФ-002', '1999-01-10', 1, '5719889564'),
(3, 2, 'Маргарита', 'Аптышева', 'Сергеевна', '2020-ЭТФ-003', '1999-02-02', 0, '5719778952'),
(4, 2, 'Василий', 'Шарашкин', 'Петрович', '2020-ЭТФ-004', '1999-02-20', 1, '571974585'),
(5, 3, 'Мария', 'Кузнецова', 'Дмитриевна', '2020-АКФ-001', '1999-03-15', 0, '5719795854'),
(6, 3, 'Сергей', 'Васнецов', 'Иванович', '2020-АКФ-001', '1999-03-16', 1, '5719963258'),
(7, 4, 'Валерий', 'Ололоев', 'Григориевич', '2020-АКФ-002', '1999-08-20', 1, '5719123654'),
(8, 4, 'Павел', 'Баранов', 'Сергеевич', '2020-АКФ-003', '1999-09-20', 1, '5719456987'),
(9, 5, 'Аркадий', 'Деревянкин', 'Валерьевич', '2020-АКФ-004', '1999-10-20', 1, '5719789654'),
(10, 5, 'Василиса', 'Гусева', 'Павловна', '2020-АКФ-005', '1999-12-20', 0, '5719785214'),
(11, 1, 'йцук', 'йцук', 'йцук', 'йцук', '1999-01-02', 1, 'йцук'),
(12, 1, 'qwer', 'asd', 'qwer', '1234', '2001-11-11', 0, '1234');

-- --------------------------------------------------------

--
-- Структура таблицы `st_group`
--

CREATE TABLE `st_group` (
  `id_group` int(11) NOT NULL,
  `id_direction_vk` int(11) NOT NULL,
  `group_name` varchar(255) NOT NULL,
  `receipt_year` int(4) NOT NULL,
  `learning_model` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `st_group`
--

INSERT INTO `st_group` (`id_group`, `id_direction_vk`, `group_name`, `receipt_year`, `learning_model`) VALUES
(1, 1, 'ИВТ-20-1б', 2020, 1),
(2, 2, 'РИС-20-1б', 2020, 2),
(3, 3, 'ТПМП-20-1б', 2020, 3),
(4, 4, 'АД-20-1б', 2020, 4),
(5, 4, 'РД-20-1б', 2020, 2),
(6, 1, 'asdc', 2001, 2),
(7, 1, 'sadsad', 2001, 1),
(8, 1, 'qwerqwreqwer', 2020, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `trial`
--

CREATE TABLE `trial` (
  `id_trial` int(11) NOT NULL,
  `id_discipline_vk` int(11) NOT NULL,
  `trial_type` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `trial`
--

INSERT INTO `trial` (`id_trial`, `id_discipline_vk`, `trial_type`) VALUES
(1, 1, 1),
(2, 1, 3),
(3, 2, 1),
(4, 2, 3),
(5, 3, 1),
(6, 3, 2),
(7, 4, 1),
(8, 4, 3),
(9, 5, 1),
(10, 5, 4),
(11, 6, 1),
(12, 6, 4),
(13, 7, 1),
(14, 7, 3),
(15, 8, 1),
(16, 8, 4);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `direction`
--
ALTER TABLE `direction`
  ADD PRIMARY KEY (`id_direction`);

--
-- Индексы таблицы `discipline`
--
ALTER TABLE `discipline`
  ADD PRIMARY KEY (`id_discipline`);

--
-- Индексы таблицы `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`id_faculty`);

--
-- Индексы таблицы `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id_result`);

--
-- Индексы таблицы `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id_student`);

--
-- Индексы таблицы `st_group`
--
ALTER TABLE `st_group`
  ADD PRIMARY KEY (`id_group`);

--
-- Индексы таблицы `trial`
--
ALTER TABLE `trial`
  ADD PRIMARY KEY (`id_trial`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `direction`
--
ALTER TABLE `direction`
  MODIFY `id_direction` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `discipline`
--
ALTER TABLE `discipline`
  MODIFY `id_discipline` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `faculty`
--
ALTER TABLE `faculty`
  MODIFY `id_faculty` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `result`
--
ALTER TABLE `result`
  MODIFY `id_result` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `student`
--
ALTER TABLE `student`
  MODIFY `id_student` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `st_group`
--
ALTER TABLE `st_group`
  MODIFY `id_group` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `trial`
--
ALTER TABLE `trial`
  MODIFY `id_trial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
