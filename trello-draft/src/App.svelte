<script>

let draggedcard=null;
let draggedfrom=null;
let newText="";



let columns = {
		processing: [],
		todo: [],
		done: []
	};

function addCard(column){
	if(!newText.trim()) return;

	const card={
		id:Date.now(),
		text:newText
	};

	newText="";
	columns={
		...columns,
		[column]: [...columns[column], card]
	}
}

function movecard(card,from,to){

	if(!card || from === to) return;

	columns = {
  		...columns,
  		[from]: columns[from].filter(c => c !== card),
  		[to]: [...columns[to], card]
		};
	}
</script>

<main>
	<header>
			<h1>Trello Draft</h1>
	</header>
	
	<div class="box"></div>
	<div class="circle"></div>

		<div class="toolbar">
	<input type="text" bind:value={newText} placeholder="Enter card text" />
	<button on:click={() => addCard('todo')}>
  ➕
</button>
	</div>

	<div class="board">
<div class="list" on:dragover={(e) => e.preventDefault()}
	on:drop={() => movecard(draggedcard,draggedfrom,'processing')}>	

	<h3>PROCESSING</h3>
		{#each columns.processing as card}
			<div class="card"
			draggable="true"
			on:dragstart={() => {draggedcard=card
			draggedfrom='processing'}}>
			 {card.text}</div>
		{/each}
	</div>



	<div class="list" on:dragover={(e) => e.preventDefault()} 
			on:drop={() => movecard(draggedcard,draggedfrom,'todo')}>
	
	<h3>TO DO</h3>
		{#each columns.todo as card}
			<div class="card"
			draggable="true"	
			on:dragstart={() => {draggedcard=card
			draggedfrom='todo'}}>
			{card.text}</div>
		{/each}
	</div>
	



	<div class="list" on:dragover={(e) => e.preventDefault()} 
			on:drop={() => movecard(draggedcard,draggedfrom,'done')}>


	<h3>DONE</h3>
	{#each columns.done as card}
				<div 
			class="card"
			draggable="true"
			on:dragstart={() => {draggedcard=card
			draggedfrom='done'}} 
			>{card.text}</div>
		{/each}
	</div>
	</div>

</main>

<style>
	
	*{
		box-sizing: border-box;
		font-family: Arial, sans-serif;
		justify-content: center;
	}
	main {
		padding: 0;
		margin: 0;
	}

.toolbar {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0 40px 20px;
}

.toolbar input {
  width: 260px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1.5px solid #ccc;
}

.toolbar button {
  padding: 10px 14px;
  font-size: 22px;
  border-radius: 6px;
  border: none;
  background: #6c5ce7;
  color: white;
  cursor: pointer;
}



	.board {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem 2.5rem;
		overflow-x: auto;
	}

	.board input{
		width:200px;
	}

	.list {
		background-color: orange;
		border-radius: 3px;
		padding: 0.5rem;
		min-width: 200px;
		border: #062d53 1px solid;
		column-gap: 5.5rem;
	}

	.card {
		margin: 0.5rem;
		padding: 0.2cm;
		border: #ff3e00 1px solid;
		column-gap: 5.5rem;
		color: rgb(38, 61, 82);
		background-color: lavenderblush;
	}
.box{
	height:100px;
	width:100px;
	background-color:#ff3e00;
}

.circle{
	border-radius: 50%;
	height:100px;
	width:100px;
	background-color:#062d53;}
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