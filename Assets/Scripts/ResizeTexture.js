#pragma strict

function OnGUI()
{
	var size = Screen.height * 0.1;
	this.guiTexture.pixelInset.width = size;
	this.guiTexture.pixelInset.height = size;
}