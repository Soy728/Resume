<script lang="ts">
	import { Clover, Leaf, Tree } from 'phosphor-svelte';
</script>

<div class="flex h-auto w-full flex-col gap-4">
	<div class="flex w-full items-center justify-center gap-5">
		<Leaf size={40} weight="duotone" class="animate-bounce text-lime-500" />
		<Clover
			size={40}
			weight="duotone"
			class="animate-bounce text-lime-500"
			style="animation-delay:0.2s;animation-fill-mode:both;"
		/>
		<Tree
			size={40}
			weight="duotone"
			class="animate-bounce text-lime-500"
			style="animation-delay:0.4s;animation-fill-mode:both;"
		/>
	</div>
	<span class="text-center text-5xl leading-normal font-bold">
		안녕하세요, <br /> 프론트엔드 개발자 <br />
		<span class="text-lime-500"> 이소희 </span>입니다.
	</span>
</div>
