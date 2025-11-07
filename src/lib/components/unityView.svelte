<script lang="ts">
    import unityStore from "$stores/unityStore";
    import { onMount } from "svelte";
    
    
    
    
    // state
    let unityCanvas = $state<HTMLCanvasElement>();

    // 유니티 빌드 파일들 위치
    const path = "/unity";
        
    // config
    const config = {
        dataUrl: path + "/data.gz",
        frameworkUrl: path + "/framework.js.gz",
        codeUrl: path + "/wasm.gz",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Land",
        productVersion: "0.1",
        contextAttributes: { alpha: true }
    }


    /**
     * onMount()
     * unity loader.js 삽입 및 인스턴스 생성, 스토어 업데이트
    */
    onMount(() => {
        const script = document.createElement("script");
        script.src = `${path}/loader.js`;

        script.onload = async () => {
            try {
                const instance = await createUnityInstance(unityCanvas!, config);
                unityStore.setInstance(instance);
                console.log("%c ----- 유니티 로드 완료 -----", "color: #fff; background-color: #0ea500");

            } catch (error: any) {
                console.error("%c ----- 유니티 로드 실패 -----", "color: #fff; background-color: red");
            }
        }

        document.body.appendChild(script);
    });
</script>



<canvas id="unity-canvas" bind:this={unityCanvas}></canvas>



<style>
    #unity-canvas {
        width: 100%;
        height: 100%;
    }
</style>