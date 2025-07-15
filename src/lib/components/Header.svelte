<script>
  import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<header class="flex flex-col flex-wrap w-full justify-between mx-auto text-white xl:sticky lg:top-0 xl:max-h-screen lg:py-24">
  <div>
    <h1 class="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Jesse Ma</h1>
    <p class="font-light text-left mt-2 text-white md:text-lg lg:text-xl sm:px-0 lg:px-0 xl:px-0">Full Stack Web Developer | eCommerce Specialist.</p>
    <p class="text-left max-w-md my-6 text-white md:text-lg lg:text-xl sm:px-0">Full stack web developer from OC | LA California. <br class="hidden md:block"/>I build pixel-perfect online experiences and apps for companies large and small.</p>
  </div>
  <ul class="flex gap-4">
    <li class="duration-300 active:text-orange-600 focus:text-orange-600 hover:text-orange-500">
      <a href="https://www.linkedin.com/in/jesse-ma/" target="_blank"><LinkedinSolid /></a>
    </li>
    <li class="duration-300 active:text-orange-600 focus:text-orange-600 hover:text-orange-500">
      <a href="https://github.com/jma26" target="_blank"><GithubSolid /></a>
    </li>
    <li class="duration-300 active:text-orange-600 focus:text-orange-600 hover:text-orange-500">
      <a href="mailto:jma26code@gmail.com"><EnvelopeSolid /></a>
    </li>
  </ul>
</header>