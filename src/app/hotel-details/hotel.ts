export class HotelViewModel {
    id: number | undefined;
    name: string | undefined;
    city: string | undefined;

    constructor(params: {id?: number, name?: string, city?: string} = {}){
        this.id = params.id;
        this.name = params.name;
        this.city = params.city;
    }

}
