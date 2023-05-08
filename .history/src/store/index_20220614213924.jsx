import { makeAutoObservable } from "mobx";

class RootStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
}