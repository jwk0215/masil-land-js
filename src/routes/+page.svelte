<script lang="ts">
    import UnityView from "$components/unityView.svelte";
    import unityStore from "$stores/unityStore";
    import { onMount } from "svelte";




    onMount(() => {
        window.onUnityLoaded = () => {
            setTimeout(() => {
                unityStore.setLoadState(true);
            }, 500);
        }
    
        window.sceneLoaded = () => {
            setTimeout(() => {
                unityStore.setLoadState(true);
            }, 500);
        }
    
        window.portalEnter = (targetPortalName: string) => {
            unityStore.setLoadState(false);
            $unityStore.instance?.SendMessage("Manager", "ChangeScene", `${targetPortalName}|Home`);
        }
    });
</script>



<UnityView />