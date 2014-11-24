//Script to log the start line trigger

static var startTime = 0;
var isStartLineCrossed = false;

function OnTriggerEnter(other: Collider)
{
	Debug.Log("Triggered");
	
//	if(other.CompareTag("Boat"))
//	{
		Debug.Log("Crossed the start line " + other.name);
		startTime = Time.time;
		isStartLineCrossed = true;

//	}
}

function OnGUI()
{

	
	if(isStartLineCrossed)
	{	
		GUI.skin.label.fontSize  = 20;
		GUI.contentColor = Color.black;
		//Debug.Log("Crossed the start line " + isStartLineCrossed);
 		GUI.Label(Rect(Screen.width/2 - 130 ,20,300,100), "Time: "+Mathf.Floor(Time.time - startTime)+" seconds");		
	    GUI.Label(Rect(Screen.width/2 - 290,20,300,100), "Coins: "+ CoinPickup.coinCount);		
	
	}
}
