<script>
  import { Badge, Button } from "flowbite-svelte";
  import CheckItOutImage from '$lib/images/check-it-out.png';
  import CatasticMemeGeneratorImage from '$lib/images/catastic-meme-generator.png';
</script>    
    
<section id="projects" class="container flex flex-col w-full mx-auto my-16 relative">
  <span class="marker h-px top-[0vh] absolute w-px"></span>
  <div class="backdrop-blur -mx-5 p-5 sticky top-0 z-10 lg:static xl:mb-4">
    <h2 class="font-bold text-white text-3xl md:4xl xl:text-5xl">Projects</h2>
  </div>
  <div class="flex flex-col gap-8">
    <article>
      <a href="https://jwu910.github.io/check-it-out/" target="_blank">
        <div class="flex flex-col md:flex-row">
          <figure class="basis-1/2">
            <img class="h-full w-full object-cover" src={CheckItOutImage} alt="Check it out card" />
          </figure>
          <div class="basis-1/2 p-8">
            <h3 class="font-semibold text-white">Check it out</h3>
            <p class="mt-2 text-white">Simple landing page built with HTML, CSS for an open source project</p>
            <div class="flex flex-wrap gap-2 my-4">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
            </div>
          </div>
        </div>
      </a>
    </article>
    <article>
      <a href="https://jesseiscoding.com/Catastic-Image-Generator/" target="_blank">
        <div class="flex flex-col md:flex-row">
          <figure class="basis-1/2">
            <img class="h-full w-full object-cover" src={CatasticMemeGeneratorImage} alt="Catastic Meme Generator card" />
          </figure>
          <div class="basis-1/2 p-8">
            <h3 class="font-semibold text-white">Catastic Image Generator </h3>
            <p class="mt-2 text-white">Cat image generator utilziing CATAAS API (Cat as a service). Built with HTML, SCSS, JS</p>
            <div class="flex flex-wrap gap-2 my-4">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
            </div>
          </div>
        </div>
      </a>
    </article>    
  </div>
  <!-- <Button class="bg-orange-600 border-orange-600 mt-12 place-self-start duration-300 focus-within:ring-0 hover:bg-orange-500" href="/archive-projects" size="sm">View Full Project Archive</Button> -->
</section>