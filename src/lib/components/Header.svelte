<script>
  import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<header class="flex flex-col flex-wrap w-full justify-between mx-auto lg:sticky lg:top-0 lg:max-h-screen lg:py-24">
  <div>
    <h1 class="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Jesse Ma</h1>
    <p class="font-light text-left mt-2 md:text-lg lg:text-xl dark:text-gray-400 sm:px-0 lg:px-0 xl:px-0">Full Stack Web Developer | eCommerce Specialist</p>
    <p class="text-left max-w-md my-4 md:text-lg lg:text-xl dark:text-gray-400 sm:px-0">Full stack web developer from OC | LA California. <br />I build pixel-perfect online experiences and apps for companies large and small.</p>
  </div>
  <ul class="flex gap-4">
    <li>
      <a href="/"><LinkedinSolid /></a>
    </li>
    <li>
      <a href="/"><GithubSolid /></a>
    </li>
    <li>
      <a href="/"><EnvelopeSolid /></a>
    </li>
  </ul>
</header>