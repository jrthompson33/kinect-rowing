using UnityEngine;
using System.Collections;

public class BoatController : MonoBehaviour {
	
	public GameObject kayaker;
	private Animator animator;
	
	public Boundary boundary;
	public float speed;
	public float turn;
	public float adjust;
	
	[System.Serializable]
	public class Boundary {
		public float xMin, xMax, zMin, zMax;
	}
	
	void Start () 
	{
		animator = kayaker.GetComponent<Animator>();
		Debug.Log("Direction starts at " + animator.GetInteger("Direction"));
	}
	
	void Update() 
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		
		if (animator) {
			//set event parameters based on user input
			if(moveHorizontal > 0.7f) {
				animator.SetInteger("Direction", 1);
			} else if (moveHorizontal < -0.7f) {
				animator.SetInteger("Direction", -1);
			} else {
				animator.SetInteger("Direction", 0);
			}
		}  
		Debug.Log ("Horizontal is " + moveHorizontal);
	}
	
	// Executed once per physics step
	void FixedUpdate()
	{
		float moveHorizontal = Input.GetAxis ("Horizontal");
		//		float moveVertical = Input.GetAxis ("Vertical");
		
		if (moveHorizontal != 0) 
		{
			// Rotate by -1 to start because for some reason the boats mesh causes it go side-ways
			transform.Rotate(this.transform.up, adjust);
			this.rigidbody.AddForce(this.transform.forward * speed, ForceMode.Force);
			transform.Rotate(this.transform.up, moveHorizontal * turn);
		}
		
		float x = Mathf.Clamp(rigidbody.position.x, boundary.xMin, boundary.xMax);
		float y = rigidbody.position.y;
		float z = Mathf.Clamp(rigidbody.position.z, boundary.zMin, boundary.zMax);
	}
}
