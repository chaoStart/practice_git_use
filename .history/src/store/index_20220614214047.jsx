import { makeAutoObservable } from "mobx";
import { createContext } from 'react'
class RootStore {
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
}

const store = new RootStore();
const Context = createContext(store);