<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-slate-900">
	{@render children()}
</div>
