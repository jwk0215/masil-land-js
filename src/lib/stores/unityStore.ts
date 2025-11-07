import { writable } from "svelte/store";




type UnityStoreType = {
    instance: UnityInstance | null;
    loadState: boolean;
}

const initialStore: UnityStoreType = {
    instance: null,
    loadState: false
}

function createUnityStore() {
    const { subscribe, update } = writable(initialStore);

    return {
        subscribe,
        setInstance: (instance: UnityInstance) => {
            update(store => {
                store.instance = instance;
                return store;
            });
        },
        setLoadState: (state: boolean) => {
            update(store => {
                store.loadState = state;
                return store;
            });
        }
    }
}
export default createUnityStore();