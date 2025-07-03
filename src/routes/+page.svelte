<script>
	import { Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import HeroHeader from '$lib/components/HeroHeader.svelte';
</script>

<section class="w-full justify-between px-2 py-2.5">
  <div class="container flex flex-wrap items-center mx-auto lg:p-4 lg:grid lg:grid-cols-4">
    <div class="lg:col-span-2 lg:row-span-1">
      <h1 class="mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Jesse Ma</h1>
      <p class="font-light text-left max-w-2xl mb-4 md:text-lg lg:text-xl dark:text-gray-400 sm:px-0 lg:px-0 xl:px-0">Full Stack Web Developer | eCommerce Specialist</p>
      <p class="text-left max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 sm:px-0">I'm a full stack web developer with experience in Full stack web developer with a diverse skillset in web and ecommerce development including email coding. Proven track record of delivering custom, scalable web applications and eCommerce solutions. Proficient in various programming languages, frameworks, and databases. Strong commitment to delivering high-quality results.</p>
      <div class="flex">
          <a href="/"><Button size="xl" color="red" class="mr-3 inline-flex items-center justify-center">Get started<ArrowRightOutline size="md" class="-mr-1 ml-2" /></Button> </a>
          <a href="/"><Button color="light" size="xl" class="inline-flex items-center justify-center">Speak to Sales</Button> </a>
      </div>
    </div>
    <div class="hidden lg:col-span-2 lg:row-span-1 lg:mt-0 lg:flex">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
    </div>
  </div>
</section>
<section class="w-full px-2 py-2.5">
  <div class="container flex flex-wrap justify-between mx-auto lg:p-4">
    <article class="flex-col flex-wrap">
      <h2 class="font-bold mb-6 text-3xl md:4xl xl:text-5xl dark:text-white">Experience</h2>
    </article>
    <article class="flex-col flex-wrap">
      <h2 class="font-bold mb-6 text-3xl md:4xl xl:text-5xl dark:text-white">Technical Skills</h2>
      <Accordion>
        <AccordionItem>
          {#snippet header()}Frameworks / Libraries{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">get started</a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}Languages{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}Tools{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}Databases{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}CSS Libraries{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}CMS{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}CRM{/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </article>
  </div>
</section>