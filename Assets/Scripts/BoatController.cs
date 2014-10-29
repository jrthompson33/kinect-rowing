using UnityEngine;
using System.Collections;

public class BoatController : MonoBehaviour {
	
	public Boundary boundary;
	public float speed;
	public float tilt;
	
	[System.Serializable]
	public class Boundary {
		public float xMin, xMax, zMin, zMax;
	}
	
	// Executed once per physics step
	void FixedUpdate()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		float moveVertical = Input.GetAxis ("Vertical");
		
		Vector3 move = new Vector3 (moveHorizontal, 0.0f, moveVertical);
		rigidbody.velocity += move * speed;
		
		float x = Mathf.Clamp(rigidbody.position.x, boundary.xMin, boundary.xMax);
		float y = rigidbody.position.y;
		float z = Mathf.Clamp(rigidbody.position.z, boundary.zMin, boundary.zMax);

		//TODO see if you can change it so that we rotate the direction of the boat before we move in that direction
		
		rigidbody.position = new Vector3 (x, y, z);
	}
}
