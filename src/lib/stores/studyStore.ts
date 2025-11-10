import { writable } from "svelte/store";




interface StudyStoreType {
    mapState: boolean;
    studyType: string;
    studyState: boolean;
}

const initialStore: StudyStoreType = {
    mapState: false,
    studyType: '',
    studyState: false
};

function createStudyStore() {
    const { subscribe, update } = writable(initialStore);

    return {
        subscribe,
        setMapState: (state: boolean) => {
            update(store => {
                store.mapState = state;
                return store;
            });
        }
    }
}
export default createStudyStore();