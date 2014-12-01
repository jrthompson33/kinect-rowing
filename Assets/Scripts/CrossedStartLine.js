//Script to log the start line trigger

static var startTime = 0;
static var isStartLineCrossed = false;

var coinGui : GUITexture;
var timerGui : GUITexture;


function OnTriggerEnter(other: Collider)
{
	startTime = Time.time;
	isStartLineCrossed = true;
}

function OnGUI()
{
	var currTime = Time.time - startTime;
	
	if(CrossedFinishLine.isFinishLineCrossed){
		currTime = CrossedFinishLine.totalTime;
	}

	if(isStartLineCrossed)
	{	
		var padding = Screen.width * 0.015;
		var fontSize = Screen.width * 0.025;
		var textureSize = Screen.height * 0.1;
		//coin Texture
		var cLeft = (0.01 * Screen.width) + textureSize + padding;
		var cTop = (0.125 * Screen.height) - (textureSize / 2) - (fontSize / 2);
		var cWidth = Screen.width * 0.2;
		var cHeight = fontSize * 2;
		
		var tLeft = (0.25 * Screen.width) + textureSize + padding;
		var tTop = (0.125 * Screen.height) - (textureSize / 2) - (fontSize / 2);
		var tWidth = Screen.width * 0.3;
		var tHeight = fontSize * 2;
			
		
		var seconds = ((currTime % 60) > 10) ? "" + Mathf.Floor(currTime % 60) : "0" + Mathf.Floor(currTime % 60);
		
		GUI.skin.label.fontSize  = fontSize;
		GUI.contentColor = Color.black;
		
 		GUI.Label(Rect(tLeft,tTop,tWidth,tHeight), "Time: "+Mathf.Floor((currTime) / 60)+":"+seconds+"");		
	    GUI.Label(Rect(cLeft,cTop,cWidth,cHeight), "Coins: "+ CoinPickup.coinCount);
	}
}
