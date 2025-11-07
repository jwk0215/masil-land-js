import unityStore from "$stores/unityStore"




export default function initWindowFunctions() {
    window.onUnityLoaded = () => {
        setTimeout(() => {
            unityStore.setLoadState(true);
        }, 500);
    }
}