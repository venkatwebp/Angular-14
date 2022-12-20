export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public id: number;

    constructor(name: string, desc: string, imagePath: string, id: number){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.id = id;
    }
}