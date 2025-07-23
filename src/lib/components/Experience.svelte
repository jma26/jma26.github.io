    <script>
      import { A, Badge, Timeline, TimelineItem } from 'flowbite-svelte';
      import { ArrowUpRightFromSquareOutline, CalendarMonthSolid } from 'flowbite-svelte-icons';
    </script>
    
    <section class="container flex flex-col w-full mx-auto my-16">
      <article class="flex-col flex-wrap">
        <div class="backdrop-blur mb-5 -mx-5 p-5 sticky top-0 z-10 lg:static xl:mb-0">
          <h2 class="text-white font-bold text-3xl md:4xl xl:text-5xl">Experience</h2>
        </div>
        <Timeline class="ml-4 text-white"order="vertical">
          <TimelineItem h3Class="mb-0 text-white" liClass="ms-8 relative" title="Web Developer · Lifetech Resources" date="2021 - June 2025">
            {#snippet orientationSlot()}
              <span class="bg-orange-600 absolute -start-11 h-6 w-6 rounded-full ring-6 ring-white top-1"></span>
            {/snippet}  
            <p class="my-4 text-white">Maintained distributor asset portal web applications and DTC eCommerce storefronts on Shopify. Worked closely with UI/UX designer and marketing manager in implementing new design systems for our existing DTC storefronts and email templates. Supported marketing initiatives by building out promotional landing pages and emails on CRM platforms (Mailchimp, Klaviyo).</p>
            <div class="flex flex-wrap gap-2">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">React</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Node.js</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Next.js</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Shopify Liquid</Badge>
            </div>
          </TimelineItem>
          <TimelineItem h3Class="mb-0 text-white" liClass="ms-8 relative" title="Web Developer · Spec-D Tuning" date="2019 - 2021">
            {#snippet orientationSlot()}
              <span class="bg-orange-600 absolute -start-11 h-6 w-6 rounded-full ring-6 ring-white top-1"></span>
            {/snippet}  
            <p class="my-4 text-white">Designed, built, and maintained eCommerce storefronts on BigCommerce. Managed the migration of company's legacy Yahoo eCommerce store to BigCommerce including complete end-to-end storefront setup. Managed PPC advertising campaigns on Google Ads to drive targeted traffic. Supported marketing initiatives as directed by marketing director.</p>
            <div class="flex flex-wrap gap-2">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">BigCommerce Stencil</Badge>
            </div>      
          </TimelineItem>
          <TimelineItem h3Class="mb-0 text-white" liClass="ms-8 relative" title="Web Developer Intern · Win-Kel" date="2018 - 2019">
            {#snippet orientationSlot()}
              <span class="bg-orange-600 absolute -start-11 h-6 w-6 rounded-full ring-6 ring-white top-1"></span>
            {/snippet}  
            <p class="my-4 text-white">Worked closely with cross-functional teams, including developers and product managers, in building new user-facing features. Developed and maintained company website.</p>
            <div class="flex flex-wrap gap-2">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">React</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Redux</Badge>
            </div>
          </TimelineItem>
        </Timeline>
        <A class="flex gap-2 mt-12 place-self-start text-white duration-300 active:text-orange-600 focus:text-orange-600 hover:text-orange-500" href="https://drive.google.com/file/d/1gn4XlHbV5IDnzp7dehyncUiAEzGoncw5/view?usp=sharing" target="_blank">View Resume <ArrowUpRightFromSquareOutline /></A>
      </article>
    </section>