"use strict";
class Instagram {
    constructor(camera, filter, burst) {
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = camera;
    }
}
class Youtube {
    constructor(mode, filter, burst, short) {
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = mode;
    }
    createStory() {
        return "jay";
    }
}
