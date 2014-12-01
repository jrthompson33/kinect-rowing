//Script to log the finish line trigger

static var totalTime = 0;
static var isFinishLineCrossed = false;

function OnTriggerEnter(other: Collider)
{
	totalTime = Time.time - CrossedStartLine.startTime;
	isFinishLineCrossed = true;
}

function OnGUI()
{
	//Display the time taken on screen
	if(isFinishLineCrossed)
	{
		var w = 0.8;
		var h = 0.2;
		
		var rect : Rect;
		
		rect.x = (Screen.width*(1-w))/2;
		rect.y = (Screen.height*(1-h))/2;
		rect.width = Screen.width*w;
		rect.height = Screen.height*h;
		
		var fontSize = Screen.width * 0.025;

		var style = GUI.skin.GetStyle("Label");
		style.alignment = TextAnchor.MiddleCenter;
		
		var secondsDisplay = ((totalTime % 60) > 10) ? "" + Mathf.Floor(totalTime % 60) : "0" + Mathf.Floor(totalTime % 60);
		var displayString = "Congrats! You finished in " + (Mathf.Floor(totalTime / 60))+":"+secondsDisplay+"! With " + CoinPickup.coinCount+" Points!";
		
		GUI.skin.label.fontSize  = fontSize;
		GUI.contentColor = Color.black;
		GUI.Label(rect, displayString, style);
	} 
	
}

