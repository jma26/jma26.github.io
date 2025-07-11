<script>
  import { Badge, Button } from "flowbite-svelte";
  import CheckItOutImage from '$lib/images/check-it-out.png';
</script>    
    
<section class="container flex flex-col w-full mx-auto my-16">
  <div class="backdrop-blur -mx-6 p-6 sticky top-0 z-10 lg:static">
    <h2 class="font-bold text-3xl md:4xl xl:text-5xl dark:text-white">Projects</h2>
  </div>
  <div class="flex flex-col gap-8">
    <article>
      <a href="https://jwu910.github.io/check-it-out/" target="_blank">
        <div class="flex flex-col gap-4 items-start md:flex-row">
          <figure class="basis-1/2">
            <img class="h-full w-full object-cover" src={CheckItOutImage} alt="Check it out card" />
          </figure>
          <div class="basis-1/2">
            <h3 class="font-semibold text-black dark:text-gray-400">Check it out</h3>
            <p class="mt-2 text-base">Simple landing page built with HTML, CSS for an open source project</p>
            <div class="flex flex-wrap gap-2 mt-4">
              <Badge border color="secondary" class="py-1 px-2">HTML</Badge>
              <Badge border color="secondary" class="py-1 px-2">SCSS/CSS</Badge>
            </div>
          </div>
        </div>
      </a>
    </article>
  </div>
  <Button class="my-8 place-self-start" href="/archive-projects" size="sm">View Full Project Archive</Button>
</section>