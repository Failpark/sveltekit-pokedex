<script lang="ts">
  export let pokeman;
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/pokemon/${pokeman.id}`}
>
  <img class="h-30 w-30" src={pokeman.image} alt={pokeman.name} />
  <h2 class="uppercase text-xl">{pokeman.id}. {pokeman.name}</h2>
</a>
