#pragma strict

var speed : float = 0.2;
function Update () {
	
	if (Input.GetKey("w")){
		this.transform.position.z += this.speed;
		}
	
	if (Input.GetKey("s")){
		this.transform.position.x -= this.speed;
		}
	
	if (Input.GetKey("a")){
		this.transform.position.z -= this.speed;
		}
		
	if (Input.GetKey("d")){
		this.transform.position.x += this.speed;
		}


}