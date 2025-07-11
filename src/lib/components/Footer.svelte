<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
  import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<Footer class="container mx-auto py-12 px-0 shadow-none md:px-0 lg:py-0">
  <FooterCopyright href="/" by="Jesse Ma" copyrightMessage="— All Rights Reserved." year={new Date().getFullYear()} />
</Footer>