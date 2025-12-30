<script>
	import CompA from './components/CompA.svelte';
const popup = document.querySelector('#popup');
//showpop=false;
let draggedcard=null;
let columns = {
		processing: [],	
		todo: [],
		done: []
	};

function addCardtoprocessing(){
	columns.processing=[...columns.processing,`card${columns.processing.length+1}`];
}

function movecard(card,from,to){
		columns[from]= columns[from].filter(c => c !== card);
		columns[to]=[...columns[to],card];
	}
</script>

<main>
	<CompA />
	<header>
			<h1>Trello Draft</h1>
	</header>
	<div class="board">

	<button on:click={() => {addCardtoprocessing()}}>add new card in processing</button>
	
<div class="list" on:dragover={(e) => e.preventDefault()} 			

	<h3>PROCESSING</h3>
		{#each columns.processing as list}
			<div class="card"
			draggable="true"
			on:dragstart={() => draggedcard=list}
			> {list}</div>
		{/each}
	</div>

	<div class="list" on:dragover={(e) => e.preventDefault()} 
			on:drop={() => movecard(draggedcard)}>

	<h3>TO DO</h3>
		{#each columns.todo as list}
			<div class="card"
			draggable="true"
			on:dragstart={() => console.log("drag started")}
			>{list
			}</div>
		{/each}
	</div>

	<div class="list">
	<h3>DONE</h3>
	{#each columns.done as list}
				<div 
			class="card"
			draggable="true"
			on:dragover={(e) => e.preventDefault()} 
			on:drop={() => console.log("drop started")}
			>{list
			}</div>
		{/each}
	</div>
	</div>

<!-- <button on:click={() => {showpop} = true}>Open</button>
{#if showpop}
	<h1>hello</h1>
	<button on:click={() => showpop = false}>X</button>
{/if} * -->


</main>

<style>
	main {
		padding: 0;
		margin: 0;
	}

	.board {
		display: inline-flex;
		gap: 1rem;
		padding: 1rem;
		overflow-x: auto;
	}

	.list {
		background-color: orange;
		border-radius: 3px;
		padding: 0.5rem;
		min-width: 200px;
		border: #062d53 1px solid;
	}

	.card {
		margin: 0.5rem;
		padding: 0.2cm;
		border: #ff3e00 1px solid;
		column-gap: 5.5rem;
		color: rgb(38, 61, 82);
		background-color: lavenderblush;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>