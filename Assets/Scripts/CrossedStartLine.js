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
	GUI.skin.label.fontSize  = 30;

	if(isStartLineCrossed)
	{
		//Debug.Log("Crossed the start line " + isStartLineCrossed);
 		GUI.Label(Rect(Screen.width - 300 ,Screen.height - 60 ,300,100), "Time: "+Mathf.Floor(Time.time - startTime)+" seconds");		
	    GUI.Label(Rect(30 ,Screen.height - 60 ,300,100), "Coins Collected: "+ CoinPickup.coinCount);		

	
	}
}
