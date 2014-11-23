//Script to log the finish line trigger

var totalTime = 0;
var isFinishLineCrossed = false;

function OnTriggerEnter(other: Collider)
{
		Debug.Log("Finish line collider");
//	if(other.CompareTag("Boat"))
//	{
		Debug.Log("Crossed the finish line " + other.name);
		totalTime = Time.time - CrossedStartLine.startTime;
		Debug.Log("Crossed the finish line " + Mathf.Floor(totalTime));
		isFinishLineCrossed = true;
	//}	
}

function OnGUI()
{
	//Display the time taken on screen
	if(isFinishLineCrossed)
	{
	   GUI.skin.label.fontSize  = 50;
 	   GUI.Label(Rect((Screen.width - 1100)/2 ,Screen.height/2 ,Screen.width,Screen.height/2), "Congratulations, you won the game in " + Mathf.Floor(totalTime) + " seconds!!! And with " + CoinPickup.coinCount+" points");	
	} 
	
}

