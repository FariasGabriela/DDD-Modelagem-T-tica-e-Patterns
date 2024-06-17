class Customer {

    _id: string;
    _name: string;
    _address: string;
    _active: boolean = true;


    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;

        this.validate();
    }

    active() {
        this._active = true;
    }

    desactive() {
        this._active = false;
    }

    validate() {
        if (this._name.length == 0) {
            throw new Error("Name is required");
        }
    }
}