    <script>
      import { Badge, Timeline, TimelineItem } from 'flowbite-svelte';
      import { ArrowUpRightFromSquareOutline, CalendarMonthSolid } from 'flowbite-svelte-icons';
    </script>
    
    <section class="container flex flex-col w-full mx-auto my-16">
      <article class="flex-col flex-wrap">
        <div class="backdrop-blur -mx-6 p-6 sticky top-0 z-10 lg:static">
          <h2 class="font-bold text-3xl md:4xl xl:text-5xl dark:text-white">Experience</h2>
        </div>
        <Timeline class="ml-4"order="vertical">
          <TimelineItem title="Web Developer · Lifetech Resources" date="2021 - June 2025">
            {#snippet orientationSlot()}
              <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
                <CalendarMonthSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
              </span>
            {/snippet}  
            <p class="mb-6">Maintained distributor asset portal web applications and DTC eCommerce storefronts on Shopify. Worked closely with UI/UX designer and marketing manager in implementing new design systems for our existing DTC storefronts and email templates. Supported marketing initiatives by building out promotional landing pages and emails on CRM platforms (Mailchimp, Klaviyo).</p>
            <div class="flex flex-wrap">
              <Badge border color="secondary" class="mx-1 py-1 px-2">HTML</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">SCSS/CSS</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">JavaScript</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">React</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">Node.js</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">Next.js</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">Shopify Liquid</Badge>
            </div>
          </TimelineItem>
          <TimelineItem title="Web Developer · Spec-D Tuning" date="2019 - 2021">
            {#snippet orientationSlot()}
              <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
                <CalendarMonthSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
              </span>
            {/snippet}  
            <p class="mb-6">Designed, built, and maintained eCommerce storefronts on BigCommerce. Managed the migration of company's legacy Yahoo eCommerce store to BigCommerce including complete end-to-end storefront setup. Managed PPC advertising campaigns on Google Ads to drive targeted traffic. Supported marketing initiatives as directed by marketing director.</p>
            <div class="flex flex-wrap">
              <Badge border color="secondary" class="mx-1 py-1 px-2">HTML</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">SCSS/CSS</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">JavaScript</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">BigCommerce Stencil</Badge>
            </div>      
          </TimelineItem>
          <TimelineItem title="Web Developer Intern · Win-Kel" date="2018 - 2019">
            {#snippet orientationSlot()}
              <span class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
                <CalendarMonthSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
              </span>
            {/snippet}  
            <p class="mb-6">Worked closely with cross-functional teams, including developers and product managers, in building new user-facing features. Developed and maintained company website.</p>
            <div class="flex flex-wrap">
              <Badge border color="secondary" class="mx-1 py-1 px-2">HTML</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">SCSS/CSS</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">JavaScript</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">React</Badge>
              <Badge border color="secondary" class="mx-1 py-1 px-2">Redux</Badge>
            </div>
          </TimelineItem>
        </Timeline>
        <a class="flex gap-2" href="/resume">View Resume <ArrowUpRightFromSquareOutline class="text-black" /></a>
      </article>
    </section>