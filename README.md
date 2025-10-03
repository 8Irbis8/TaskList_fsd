# TaskList_fsd

**Task List**
A training project for the SberUniversity advanced React course. A task list application built with FSD architecture and optimized using profiling and memoization techniques.

Профилирование
Действия: смена фильтра, удаление карточки.
 Из скриншота видим, что ререндер был только в компоненте TaskList по причине изменений данных для всего списка карточек при их удалении и в FilterButton при смене фильтра.
 Профилировщик помог обнаружить лишний ререндер в DeletedCard, который был устранен
