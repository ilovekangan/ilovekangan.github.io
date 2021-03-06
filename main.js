var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var grid = []

var square = 10;
var width = 1000;
var height = 700;

var up = [-1,0];
var down = [1,0];
var left = [0,-1];
var right = [0,1];
var directions = [up, down, left, right];
for (var i = 0; i < height/square; i ++) {
	var current = []
	for (var j = 0; j < width/square; j ++) {
		current.push(0);
	}
	grid.push(current);
}

class people {
	constructor(xyi, goali) {
		this.xy = xyi;
		this.goal = goali;	
	}
	
	move (dir) {
		
		var dest = [this.xy[0] + dir[0], this.xy[1] + dir[1]]
		if (dest[0] < 0 || dest[0] >= height/square || dest[1] < 0 || dest[1] >= width/square) {
			return false;
			
		}
		if (grid[dest[0]][dest[1]]) {
			return false;
		}
	
		grid[dest[0]][dest[1]] = 1;
		grid[this.xy[0]][this.xy[1]] = 0;
		
		
		this.xy[0] = dest[0];
		this.xy[1] = dest[1];
		
		return true;
	}
	
	moveSide () {
		if (this.xy[1] == this.goal[1]) {
			return false;
			
		} else if (this.xy[1]  >  this.goal[1]) {
			if (this.move(left)) {
				
				return true;
			}
		} else if (this.xy[1] < this.goal[1]) {
			if (this.move(right)) {
				
				return true;
			}
		}
		
	}
	moveVert () {
		if (this.xy[0] == this.goal[0]) {
			return false;
			
		} else if (this.xy[0]  >  this.goal[0]) {
			if (this.move(up)) {
				
				return true;
			}
			
			
		} else if (this.xy[0] < this.goal[0]) {
			
			if (this.move(down)) {
				return true;
			}
		
		}
		
	}
	
	turn () {
		var moved = false;
		if (Math.random() < 0.5) {
			
			if (!this.moveSide()) {
				if (this.moveVert()) {
					moved = true;
				};
				
			} else {
				
				moved = true;
			}
			
		} else {
			
			if (!this.moveVert()) {
				if (this.moveSide()) {
					moved = true;
				};
				
			} else {
				moved = true;
			}
			
		}
		if (!moved && (this.xy[0] != this.goal[0] ||this.xy[1] != this.goal[1] )) {
		
			for (var i = 0; i < 5; i ++) {
				if (this.move(directions[parseInt(Math.random() * 4)])) {
					
					return;
				}
				
			}
			
		}
		
	}
}

function draw() {
	for (var i = 0; i < height/square; i ++) {
		for (var j = 0; j < width/square; j ++) {
			
			ctx.beginPath();
			ctx.lineWidth = 1;
				ctx.fillStyle = "white";
				
			ctx.stroke();
			if (grid[i][j] == 1) {
				ctx.fillStyle = "black";
				ctx.fillRect(j * square, i * square,  square, square);
			}
			
		}
		
		
	}
	
	
	
}

var month = [[6,5], [7,5], [8,5], [9,5], [10,5], [11,5], [12,5], [13,5], [14,5], [15,5], [16,5], [17,5], [18,5], [19,5], [20,5], [21,5], [22,5], [23,5], [24,5], [25,5], [26,5], [16,6], [16,7], [16,8], [16,9], [16,11], [16,10], [16,12], [6,13], [7,13], [8,13], [9,13], [10,13], [11,13], [12,13], [13,13], [14,13], [15,13], [16,13], [17,13], [18,13], [19,13], [20,13], [21,13], [22,13], [23,13], [24,13], [25,13], [26,13], [6,16], [7,16], [8,16], [9,16], [10,16], [11,16], [12,16], [13,16], [14,16], [15,16], [16,16], [17,16], [18,16], [19,16], [20,16], [21,16], [22,16], [23,16], [24,16], [25,16], [26,16], [6,17], [6,18], [6,19], [6,20], [6,21], [6,22], [6,23], [6,24], [7,24], [8,24], [9,24], [10,24], [11,24], [12,24], [13,24], [14,24], [15,24], [16,24], [17,24], [18,24], [19,24], [20,24], [21,24], [22,24], [23,24], [24,24], [25,24], [26,24], [16,17], [16,18], [16,19], [16,20], [16,21], [16,22], [16,23], [6,27], [7,27], [8,27], [9,27], [10,27], [11,27], [12,27], [13,27], [15,27], [14,27], [16,27], [17,27], [19,27], [18,27], [20,27], [21,27], [22,27], [23,27], [24,27], [25,27], [26,27], [6,28], [6,29], [6,30], [6,31], [6,32], [6,33], [6,34], [6,35], [7,35], [8,35], [9,35], [10,35], [11,35], [12,35], [13,35], [14,35], [15,35], [16,35], [16,34], [16,33], [16,32], [16,31], [16,30], [16,29], [16,28], [6,38], [7,38], [8,38], [9,38], [10,38], [11,38], [12,38], [13,38], [14,38], [15,38], [16,38], [17,38], [18,38], [19,38], [20,38], [21,38], [22,38], [23,38], [24,38], [25,38], [26,38], [6,39], [6,40], [6,41], [6,42], [6,43], [6,44], [6,45], [6,46], [7,46], [8,46], [9,46], [10,46], [11,46], [12,46], [13,46], [14,46], [15,46], [16,46], [16,45], [16,44], [16,43], [16,42], [16,41], [16,40], [16,39], [6,49], [7,50], [8,51], [9,51], [10,52], [11,53], [12,53], [13,54], [14,54], [15,55], [16,56], [15,57], [14,58], [13,58], [12,59], [11,59], [10,60], [9,61], [8,61], [7,62], [6,63], [17,56], [18,56], [19,56], [20,56], [21,56], [22,56], [23,56], [24,56], [25,56], [26,56], [6,82], [6,81], [6,80], [6,79], [6,78], [6,83], [6,84], [6,85], [6,86], [6,87], [6,77], [6,76], [7,76], [8,76], [9,76], [10,76], [11,76], [12,76], [13,76], [14,76], [15,76], [16,76], [17,76], [18,76], [19,76], [20,76], [21,76], [22,76], [23,76], [24,76], [25,76], [26,76], [26,77], [26,78], [26,79], [26,80], [26,81], [7,87], [8,87], [9,87], [10,87], [11,87], [12,87], [13,87], [14,87], [15,87], [16,87], [17,87], [18,87], [19,87], [20,87], [21,87], [22,87], [23,87], [24,87], [25,87], [26,87], [26,86], [26,85], [26,84],  [26,83], [26,82], [16,77], [16,78], [16,79], [16,80], [16,81], [16,82], [16,83], [16,84], [16,85], [16,86], [30,5], [31,5], [32,5], [33,5], [34,5], [35,5], [36,5], [37,5], [38,5], [39,5], [40,5], [41,5], [42,5], [43,5], [44,5], [45,5], [46,5], [47,5], [48,5], [49,5], [30,6], [31,7], [32,8], [33,8], [34,9], [35,9], [36,10], [37,10], [38,11], [39,11], [40,12], [39,13], [38,13], [37,14], [36,14], [35,15], [34,15], [33,16], [32,16], [31,17], [30,18], [30,19], [31,19], [32,19], [33,19], [34,19], [35,19], [36,19], [37,19], [38,19], [39,19], [40,19], [41,19], [42,19], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [49,19], [30,22], [31,22], [32,22], [33,22], [34,22], [35,22], [36,22], [37,22], [38,22], [39,22], [40,22], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [30,23], [30,24], [30,25], [30,26], [30,27], [30,28], [30,29], [30,30], [31,30], [32,30], [33,30], [34,30], [35,30], [36,30], [37,30], [38,30], [39,30], [40,30], [41,30], [42,30], [43,30], [44,30], [45,30], [46,30], [47,30], [48,30], [49,30], [49,29], [49,28], [49,27], [49,26], [49,25], [49,24], [49,23],  [30,33], [31,33], [32,33], [33,33], [34,33], [35,33], [36,33], [37,33], [38,33], [39,33], [40,33], [41,33], [42,33], [43,33], [44,33], [45,33], [46,33], [47,33], [48,33], [49,33], [30,34], [31,35], [32,36], [33,37], [34,37], [35,37], [36,38], [37,38], [38,38], [39,39], [40,39], [41,40], [42,40], [43,40], [44,41], [45,41], [46,42], [47,42], [48,43], [49,44], [48,44], [47,44], [46,44], [45,44], [44,44], [43,44], [42,44], [41,44], [40,44], [39,44], [38,44], [37,44], [36,44], [35,44], [34,44], [33,44], [32,44], [31,44], [30,44], [30,47], [30,48], [30,49], [30,50], [30,51], [30,52], [30,53], [30,54], [30,55], [30,56], [30,57], [31,52], [32,52], [33,52], [34,52], [35,52], [36,52], [37,52], [38,52], [39,52], [40,52], [42,52], [41,52], [43,52], [44,52], [45,52], [46,52], [47,52], [49,52], [48,52], [30,60], [31,60], [32,60], [33,60], [34,60], [35,60], [36,60], [37,60], [38,60], [39,60], [41,60], [40,60], [42,60], [43,60], [44,60], [45,60], [46,60], [47,60], [48,60], [49,60], [39,61], [39,62], [39,63], [39,64], [39,65], [39,66], [39,67], [30,68], [31,68], [32,68], [33,68], [34,68], [36,68], [35,68], [37,68], [38,68], [39,68], [40,68], [41,68], [42,68], [43,68], [44,68], [45,68], [46,68], [47,68], [48,68], [49,68], [30,71], [31,71], [32,71], [33,71], [30,72], [30,73], [30,74], [30,75], [30,76], [30,77], [30,78], [30,79], [30,80], [34,71], [35,71], [36,71], [37,71], [38,71], [39,71], [39,72], [39,74], [39,73], [39,75], [39,76], [39,77], [39,78], [39,79], [39,80], [30,81], [39,81], [40,81], [41,81], [42,81], [43,81], [44,81], [45,81], [46,81], [47,81], [48,81], [49,81], [49,80], [49,79], [49,78], [49,77], [49,76], [49,75], [49,74], [49,73], [49,72], [49,71], [30,86], [31,86], [32,86], [33,86], [34,86], [35,86], [36,86], [37,86], [38,86], [39,86], [40,86], [41,86], [42,86], [43,86], [44,86], [45,86], [46,86], [49,86]]

var ilove = [[54,5],[53,94],[53,71],[53,48],[53,5],[52,93],[52,71],[52,49],[52,47],[52,5],[51,92],[51,71],[51,50],[51,46],[51,5],[50,91],[50,71],[50,51],[50,45],[50,5],[49,90],[49,71],[49,52],[49,44],[49,5],[48,89],[48,71],[48,53],[48,43],[48,5],[47,88],[47,71],[47,54],[47,42],[47,5],[46,87],[46,71],[46,55],[46,41],[46,5],[45,86],[45,71],[45,56],[45,40],[45,5],[44,85],[44,71],[44,57],[44,39],[44,5],[43,84],[43,71],[43,58],[43,38],[43,5],[42,83],[42,71],[42,59],[42,37],[42,5],[41,82],[41,71],[41,60],[41,36],[41,5],[40,81],[40,71],[40,61],[40,35],[40,5],[39,80],[39,71],[39,61],[39,35],[39,5],[38,79],[38,71],[38,61],[38,35],[38,5],[37,78],[37,71],[37,62],[37,34],[37,5],[36,77],[36,76],[36,71],[36,62],[36,34],[36,5],[35,75],[35,71],[35,62],[35,33],[35,5],[34,74],[34,71],[34,63],[34,33],[34,5],[33,73],[33,71],[33,63],[33,32],[33,5],[32,72],[32,71],[32,63],[32,32],[32,5],[31,73],[31,71],[31,64],[31,31],[31,5],[30,74],[30,71],[30,64],[30,30],[30,26],[30,25],[30,24],[30,23],[30,22],[30,21],[30,20],[30,19],[30,18],[30,17],[30,16],[30,15],[30,14],[30,13],[30,12],[30,11],[30,10],[30,9],[30,8],[30,7],[30,6],[30,5],[29,75],[29,71],[29,65],[29,30],[29,26],[29,5],[28,77],[28,76],[28,71],[28,66],[28,30],[28,26],[28,5],[27,78],[27,71],[27,66],[27,30],[27,26],[27,5],[26,79],[26,71],[26,66],[26,30],[26,26],[26,5],[25,80],[25,71],[25,66],[25,49],[25,30],[25,26],[25,5],[24,81],[24,71],[24,66],[24,50],[24,48],[24,31],[24,26],[24,5],[23,82],[23,71],[23,65],[23,51],[23,47],[23,31],[23,26],[23,5],[22,83],[22,71],[22,65],[22,51],[22,46],[22,31],[22,26],[22,5],[21,84],[21,71],[21,65],[21,52],[21,46],[21,31],[21,26],[21,5],[20,85],[20,71],[20,65],[20,52],[20,45],[20,31],[20,26],[20,5],[19,86],[19,71],[19,65],[19,53],[19,44],[19,31],[19,26],[19,5],[18,87],[18,71],[18,65],[18,53],[18,43],[18,31],[18,26],[18,5],[17,88],[17,71],[17,65],[17,53],[17,43],[17,31],[17,26],[17,5],[16,89],[16,71],[16,65],[16,54],[16,43],[16,32],[16,31],[16,26],[16,5],[15,90],[15,71],[15,64],[15,54],[15,42],[15,33],[15,26],[15,5],[14,91],[14,71],[14,63],[14,62],[14,55],[14,54],[14,41],[14,35],[14,34],[14,26],[14,5],[13,92],[13,71],[13,61],[13,60],[13,59],[13,58],[13,57],[13,56],[13,40],[13,39],[13,38],[13,37],[13,36],[13,26],[13,5],[12,93],[12,71],[12,26],[12,5],[11,94],[11,71],[11,26],[11,25],[11,24],[11,23],[11,22],[11,21],[11,20],[11,19],[11,18],[11,17],[11,16],[11,15],[11,14],[11,13],[11,12],[11,11],[11,10],[11,9],[11,8],[11,7],[11,6],[11,5]]



month.sort(s);

ilove.reverse();
var ash = ilove.slice();
var everyone = []
var frameTime = 0;
//grid[0][0] = 1; 

var kangan = new people([0,0],[5,5]);

var available = [];

draw();
/*
for (var i = 0; i < 309; i++) {
	grid[ilove[i][0]][ilove[i][1]]=1;
}
*/
function main() {
	frameTime += 1;
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,width, height);
	//kangan.turn();
	for (var i = 0; i < everyone.length; i++) {
		everyone[i].turn();
		
	}
	draw();
	if (frameTime % 1 == 0) {
		spawn();
		
	}
}

function s(a,b) {
	if (a[0] == b[0]) {
		
		if (a[1] > b[1]) {
			return 1;
		} else if (a[1] < b[1]) {
			return -1;
		}
			
		return 0;
	} else if (a[0] > b[0]) {
		return 1;
	} else if (a[0] < b[0]) {
		return -1;
	}
	return 0;
}

function spawn() { 
	var i = parseInt(height /square) -1;
	var j = parseInt((width /square)/2) + 40 ;
	
	if (grid[i][j] == 0 && ilove.length > 0) {
		grid[i][j] = 1;
		
		var rand = parseInt(0);
		var temp = new people([i,j],ilove[rand]);
		ilove.splice(rand, 1);
		
		everyone.push(temp);
	}
	
}

canvas.onclick = function(event) {
	var x = event.clientX;
	var y = event.clientY;
	
	var j = parseInt((x  ) /square) ;
	var i = parseInt((y)/square) ;
	grid[i][j] = 1;
	available.push([i,j]);
	console.log(parseInt(x/square).toString() + " " + parseInt(y/square).toString());
	
}

window.setInterval(main, 10)
