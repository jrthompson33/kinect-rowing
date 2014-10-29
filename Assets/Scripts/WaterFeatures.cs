using UnityEngine;
using System.Collections;

public class WaterFeatures : MonoBehaviour {

	public GameObject splash;

	// Use this for initialization
	void Start () {
	
	}

	void OnTriggerEnter(Collider collider) {
		if (collider.rigidbody != null) {
			//Instantiate (splash, collider.rigidbody.position, Quaternion.identity);
		}
	}

	void OnCollisionEnter(Collision collision) {
		foreach (ContactPoint contact in collision.contacts) {
			Instantiate(splash, contact.point, Quaternion.identity);
			Destroy (this);
			//Debug.DrawRay(contact.point, contact.normal, Color.white);
		}
	}
	
	// Update is called once per frame
	void FixedUpdate () {
		this.rigidbody.AddForce(new Vector3(0.0f, Physics.gravity.y, 0.0f) * 10);
	}
}
