export class Category {
    id: number;
    title: string;
    completedCount: number;
    uncompletedCount: number;

    // ? означает необязательный для передачи параметр
    constructor(id: number, title: string, completedCount?: number | any,
                uncompletedCount?: number | any) {
        this.id = id;
        this.title = title;
        this.completedCount = completedCount;
        this.uncompletedCount = uncompletedCount;
    }
}
