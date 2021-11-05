//Block Remover
Vars.content.blocks().each(e => {
	var Trash = false; // Variable Reset
	
	// Function that makes finding trash easier
	function wl(b){
		if(e == b) Trash = true;
	}
	
	wl(Blocks.conveyor);
	wl(Blocks.titaniumConveyor);
	wl(Blocks.router);
	wl(Blocks.distributor);
	
	wl(Blocks.duo);
	wl(Blocks.scorch);
	
	wl(Blocks.conduit);
	wl(Blocks.pulseConduit);
	
	wl(Blocks.solarPanel);
	wl(Blocks.largeSolarPanel);
	wl(Blocks.differentialGenerator);
	
	wl(Blocks.pulverizer);
	wl(Blocks.melter);
	wl(Blocks.disassembler);
	
	if(Trash) e.buildVisibility = BuildVisibility.hidden; //Trash Disposer
})

Item.scrap = null;
UnitTypes.crawler = null;
UnitTypes.atrax = null;
UnitTypes.spircot = null;