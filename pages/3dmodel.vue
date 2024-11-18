<script setup>
	import { TresCanvas } from "@tresjs/core";
	import { OrbitControls } from "@tresjs/cientos";
	import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";

	const gl = {
		clearColor: "#82DBC5",
		shadows: true,
		alpha: true,
		shadowMapType: BasicShadowMap,
		outputColorSpace: SRGBColorSpace,
		toneMapping: NoToneMapping,
		windowSize: false,
	};
</script>
<template>
	<div>
		<ULandingSection
			headline="Pro"
			title="The freedom to build anything"
			description="Nuxt UI Pro ships with an extensive set of advanced components that cover a wide range of use-cases."
			align="center"
		>
			<TresCanvas
				v-bind="gl"
				preset="realistic"
				style="max-height: 800px"
			>
				<TresPerspectiveCamera
					:position="[11, -1, 11]"
					:look-at="[0, 20, 0]"
				/>
				<OrbitControls />
				<Suspense>
					<ActualModel />
				</Suspense>
				<TresDirectionalLight
				
					:intensity="10"
					cast-shadow
				/>
				<TresAmbientLight
					color=""
					:intensity="1"
				/>
			</TresCanvas>
		</ULandingSection>

		<ULandingCTA
			title="Supercharged GitHub experience"
			description="Work in real-time with your team on open-source and private repositories, all in one place. Working on GitHub issues and notifications has never been that fun."
			align=""
			:card="false"
		>
			<div class="sketchfab-embed-wrapper">
				<iframe
					title="Aku Aku"
					frameborder="0"
					allowfullscreen
					mozallowfullscreen="true"
					webkitallowfullscreen="true"
					allow="autoplay; fullscreen; xr-spatial-tracking"
					xr-spatial-tracking
					execution-while-out-of-viewport
					execution-while-not-rendered
					web-share
					width="800"
					height="800"
					src="https://sketchfab.com/models/7dfcb6edf10b4098bbb965c56fd3055c/embed"
				>
				</iframe>
				<p
					style="
						font-size: 13px;
						font-weight: normal;
						margin: 5px;
						color: #4a4a4a;
					"
				>
					<a
						href="https://sketchfab.com/3d-models/aku-aku-7dfcb6edf10b4098bbb965c56fd3055c?utm_medium=embed&utm_campaign=share-popup&utm_content=7dfcb6edf10b4098bbb965c56fd3055c"
						target="_blank"
						rel="nofollow"
						style="font-weight: bold; color: #1caad9"
					>
						Aku Aku
					</a>
					by
					<a
						href="https://sketchfab.com/alvaro.saburido?utm_medium=embed&utm_campaign=share-popup&utm_content=7dfcb6edf10b4098bbb965c56fd3055c"
						target="_blank"
						rel="nofollow"
						style="font-weight: bold; color: #1caad9"
					>
						alvaro.saburido
					</a>
					on
					<a
						href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=7dfcb6edf10b4098bbb965c56fd3055c"
						target="_blank"
						rel="nofollow"
						style="font-weight: bold; color: #1caad9"
						>Sketchfab</a
					>
				</p>
			</div>
		</ULandingCTA>
	</div>
</template>
