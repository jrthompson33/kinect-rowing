#pragma strict

static var coinCount = 0;

function OnTriggerEnter (info : Collider) 
{
	if(info.tag == "Player")
	{
		Destroy(gameObject);
		coinCount += 1; 
		Debug.Log("Coin collected.Current count " + coinCount);

	}
}