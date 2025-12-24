    <script>
      import { A, Badge, Timeline, TimelineItem } from 'flowbite-svelte';
      import { ArrowUpRightFromSquareOutline, CalendarMonthSolid } from 'flowbite-svelte-icons';
    </script>
    
    <section id="experience" class="container flex flex-col w-full mx-auto my-16">
      <article class="flex-col flex-wrap">
        <div class="backdrop-blur -mx-5 p-5 sticky top-0 z-10 lg:static xl:mb-4">
          <h2 class="text-white font-bold text-3xl md:4xl xl:text-5xl">Experience</h2>
        </div>
        <Timeline class="ml-4 text-white"order="vertical">
          <TimelineItem h3Class="mb-0 text-white" liClass="ms-8 relative" title="Web Developer · Lifetech Resources" date="2021 - June 2025">
            {#snippet orientationSlot()}
              <span class="bg-orange-600 absolute -start-11 h-6 w-6 rounded-full ring-6 ring-white top-1"></span>
            {/snippet}
            <ul class="list-disc ml-4 my-4 text-white">
              <li>Collaborated with UI/UX and marketing teams in implementing a new design system across multiple Shopify storefronts, improving design consistency and user engagement metrics</li> 
              <li>Developed RESTful APIs connecting Shopify to Mailchimp and other platforms, enabling automated marketing workflows and real-time customer data synchronization</li>
              <li>Built and maintained MERN stack web applications critical for distributor access to marketing assets</li>
              <li>Developed and optimized Shopify themes and landing pages using Liquid, HTML, CSS, JavaScript</li>
              <li>Architected and executed the migration of the company website from PHP Laravel to WordPress, implementing custom theme development, plugin integration, and complete data migration, resulting in a more maintainable and manageable platform for non-technical staff</li>
              <li>Identified areas of improvements in site performance with analytic tools (Lighthouse/Clarity), reducing average page load times and increasing conversion rates</li>
              <li>Integrated and managed Shopify apps and vendor tools like ReCharge, Klaviyo, Mailchimp, and Yotpo to enhance site functionality and retention</li>
            </ul>
            <p class="my-4 text-white">
            </p>
            <div class="flex flex-wrap gap-2">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">MongoDB</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Express.js</Badge>
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
            <ul class="list-disc ml-4 my-4 text-white">
              <li>Directed the end-to-end migration of legacy eCommerce storefronts to BigCommerce, including custom Stencil theme development, data migration, and integration of third-party marketing and analytic tools, resulting in an increase in conversion rates</li> 
              <li>Leveraged analytic tools to identify and resolve site performance issues</li>
              <li>Collaborated with marketing teams to launch targeted landing pages and PPC campaigns, boosting ad ROI and user engagement</li>
              <li>Managed and updated product listings, including adding new products, optimizing descriptions, images, and metadata to ensure accurate data and enhanced product discoverability</li>
            </ul>
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
            <ul class="list-disc ml-4 my-4 text-white">
              <li>Collaborated with cross-functional teams of designers and developers to implement core platform features in alignment with business initiatives</li> 
            </ul>
            <div class="flex flex-wrap gap-2">
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">HTML</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">SCSS/CSS</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">JavaScript</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">React.js</Badge>
              <Badge border class="bg-orange-600 border-orange-600 py-1 px-2 text-white">Redux</Badge>
            </div>
          </TimelineItem>
        </Timeline>
        <A class="flex gap-2 mt-12 place-self-start text-white duration-300 active:text-orange-600 focus:text-orange-600 hover:text-orange-500" href="https://drive.google.com/file/d/17Ke6um6-cdgnQztISq7P8lGON_txNtID/view?usp=sharing" target="_blank">View Resume <ArrowUpRightFromSquareOutline /></A>
      </article>
    </section>