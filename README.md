
**Task List**
A training project for the SberUniversity advanced React course. A task list application built with FSD architecture and optimized using profiling and memoization techniques.

*Профилирование*
<br/>
Действия: смена фильтра, удаление карточки.
<br/>
До:
<img width="1920" height="1080" alt="2025-10-12_12-56-57" src="https://github.com/user-attachments/assets/feee19d1-3a9e-4a66-b11d-0ff7aa3a751d" />
После:
<img width="1751" height="876" alt="2025-10-04_23-14-20" src="https://github.com/user-attachments/assets/4736632b-22b3-47d3-966d-38e02d9160a9" />

 Из скриншота видим, что ререндер для TaskList был 3 раза: первичный, по причине изменений данных для всего списка карточек при их удалении, при смене фильтра.
 Дочерние компоненты мемоизированы, рендерится только FilterButton при смене фильтра, а также есть ререндер карточек при удалении, тк изменяется общий список.
 <br/>
 Профилировщик помог обнаружить лишние ререндеры в DeletedCard и FilterButton, которые были устранены.
