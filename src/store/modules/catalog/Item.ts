export default class Item {
    id: string;
    depthLevel: string;
    name: string;
    parentId: string;

    constructor(id: string, depthLevel: string, name: string, parentId: string) {
        this.id = id;
        this.depthLevel = depthLevel;
        this.name = name;
        this.parentId = parentId;
    }
}