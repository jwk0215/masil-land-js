// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Window {
		// 유니티 로드 완료 시 실행될 함수
		onUnityLoaded: () => void;

		// 씬 로드 완료 시 실행될 함수
		sceneLoaded: () => void;

		// 유니티에서 포탈에 접촉 시 실행될 함수
		portalEnter: (targetPortalName: string) => void;
	}
	

	// UNITY INSTANCE
	interface UnityInstance {
		SendMessage(gameObject: string, methodName: string, value?: string): void;
        SetFullscreen(flag: boolean): void;
        Quit(): Promise<void>;
	}


	// CREATE UNITY INSTANCE FUNCTION
	declare function createUnityInstance(
        canvas: HTMLCanvasElement,
        config: {
			dataUrl: string;
			frameworkUrl: string;
			codeUrl: string;
		},
		onProgress?: (progress: number) => void,
    ): Promise<UnityInstance>;
	
	
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
