<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
  import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<Footer class="container my-8 mx-auto p-0 shadow-none md:p-0 lg:my-0">
  <!-- <FooterLinkGroup class="flex text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="/">
      <EnvelopeSolid />
    </FooterLink>
    <FooterLink href="/">
      <GithubSolid />
    </FooterLink>
    <FooterLink href="/">
      <LinkedinSolid />
    </FooterLink>
  </FooterLinkGroup> -->
  <FooterCopyright href="/" by="Jesse Ma" copyrightMessage="— All Rights Reserved." year={new Date().getFullYear()} />
</Footer>