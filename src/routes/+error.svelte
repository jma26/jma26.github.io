<script>
  import { Button } from "flowbite-svelte";
	import { page } from '$app/state';
</script>

<div class="flex flex-col items-center justify-center h-screen px-6 text-center w-full md:px-12 lg:py-24">
  <h1 class="text-6xl font-extrabold text-white tracking-tight leading-none md:text-9xl">
    {#if page.status === 404}
      4 😮 4
    {:else}
      {page.status}
    {/if}
  </h1>
  <p class="my-8 text-lg text-white tracking-tight">The page you were looking for was moved or doesn't exist.</p>
  <Button class="bg-orange-600 border-orange-600 mx-auto place-self-start duration-300 focus-within:ring-0 hover:bg-orange-500" href="/" size="sm">Go Back</Button>
</div>