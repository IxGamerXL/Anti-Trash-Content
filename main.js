Vars.content.blocks().each(e => {
	var Trash = false; // Variable Reset
	
	// Function that makes finding trash easier
	function wl(b){
		if(e == b) Trash = true;
	}
	
	wl(Blocks.conveyor);
	wl(Blocks.titaniumConveyor);
	wl(Blocks.router);
	wl(Blocks.duo);
	wl(Blocks.differentialGenerator);
	
	if(Trash) e.buildVisibility = BuildVisibility.hidden; //Trash Disposer
})