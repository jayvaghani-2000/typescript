interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): string;
}

class Instagram implements TakePhoto {
  cameraMode: string;
  constructor(camera: string, public filter: string, public burst: number) {
    this.cameraMode = camera;
  }
}

class Youtube implements TakePhoto, Story {
  cameraMode: string;
  constructor(
    mode: string,
    public filter: string,
    public burst: number,
    short: string
  ) {
    this.cameraMode = mode;
  }
  createStory(): string {
    return "jay";
  }
}
