
// все возможные параметры поиска категорий
export class CategorySearchValues {
    title: string | any= null;
}

// все возможные параметры поиска приоритетов
export class PrioritySearchValues {
    title: string  | any= null;
}

// все возможные параметры поиска категорий
export class TaskSearchValues {

    // начальные значения по-умолчанию
    title = '';
    completed: number | any = null;
    priorityId: number | any = null;
    categoryId: number | any = null;
    pageNumber = 0; // 1-я страница (значение по-умолчанию)
    pageSize = 5; // сколько элементов на странице (значение по-умолчанию)

    // сортировка
    sortColumn = 'title';
    sortDirection = 'asc';

}
