<script>
  import Header from '$lib/components/Header.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import TechnicalSkills from '$lib/components/TechnicalSkills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  let activeSection = '';
  const sections = ['about', 'experience', 'projects'];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  })
</script>

<div class="container flex flex-col justify-between mx-auto px-6 pt-12 w-full md:px-12 lg:pt-0 xl:flex-row">
  <Header {activeSection} />
  <main class="pt-24 lg:py-24">
    <Intro />
    <Experience />
    <TechnicalSkills />
    <Projects />
    <Footer />
  </main>
</div>

