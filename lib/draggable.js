/**
 * @author npaessel
 */


// connect two entities
function connector (page, enta, entb) {
	enta.page = page
	entb.page = page
	if (!enta.connections) {
		enta.connections = new Array()
	}
	if (!entb.connections) {
		entb.connection = new Array()
	}
	etna.connections.push(entb)
	entb.connections.push(enta)
}

function draggable(entity) {

	entity.select = function () { 
  		entity.selected = true; 
		entity.animate({"stroke-width": 5}, 200);
	};
	
	entity.deselect = function () { 
  		entity.selected = false; 
		entity.animate({"stroke-width": 2}, 200);
	};
	
	
	entity.node.onmousedown = function (e) { 
  		entity.select() 
		entity.lastX = e.pageX;
		entity.lastY = e.pageY;
	};

	entity.node.onmouseup = function (e) { 
		entity.deselect()
		entity.lastX = e.pageX;
		entity.lastY = e.pageY;
	};
	
	entity.node.onmouseout= function (e) { 
		entity.deselect()
	};
	
	entity.node.onmousemove = function (e) { 
		if(entity.selected) {
			var dx = e.pageX -entity.lastX;
			var dy = e.pageY -entity.lastY;
			entity.translate(dx,dy);
			//reporter.innerHTML = "x: " + entity.lastX + "<br/>y: " + entity.lastY;
			if (entity.connections != null) {
				
			}
		}
		entity.lastX = e.pageX;
		entity.lastY = e.pageY;
	};
}