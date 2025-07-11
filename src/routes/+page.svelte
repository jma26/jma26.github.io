<script>
  import Header from '$lib/components/Header.svelte';
  import Intro from '$lib/components/Intro.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import TechnicalSkills from '$lib/components/TechnicalSkills.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container flex flex-col justify-between mx-auto px-6 pt-12 w-full md:px-12 xl:flex-row lg:pt-0">
  <Header />
  <main class="pt-24 lg:py-24">
    <Intro />
    <Experience />
    <TechnicalSkills />
    <Projects />
    <Footer />
  </main>
</div>

