//Script to log the start line trigger

static var startTime = 0;

function OnTriggerEnter(other: Collider)
{
	if(other.CompareTag("Boat"))
	{
		Debug.Log("Crossed the start line " + other.name);
		startTime = Time.time;
	}
}

