#pragma strict

function OnTriggerEnter (info : Collider) 
{
	if(info.tag == "Player")
	{
		Destroy(gameObject);
	}
}