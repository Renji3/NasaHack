import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import * as GUI from '@babylonjs/gui';
import Orbit from './Orbit';

export default class Trash{
	constructor(scene, tle1, tle2, uid, obvervationDate, discoveryDate){
		this.tle1 = tle1;
		this.tle2 = tle2;
		// this.observer = observer;
		this.uid = obvervationDate;
		this.discoveryDate = discoveryDate;

		this.orbit = new Orbit(this.uid, this.tle1, this.tle2, new BABYLON.Color4(1,1,1,1),scene)
		this.orbit.update();
		this.trashSphere = scene.templateSphere.createInstance("instance" + uid);
		this.trashSphere.position = this.orbit.currentPosition;
	}

	setOrbitEnabled(enabled){
		this.orbit.setEnabled(enabled);
		console.log("###", this.orbit)
	}

	update(time){
		this.orbit.update(time)
		this.trashSphere.position = this.orbit.currentPosition;
	}
}