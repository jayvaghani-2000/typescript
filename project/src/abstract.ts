abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract func1(): void;
}

// const jayPic = new TakePhoto("Jay", "one ");

class InstagramA extends TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    super(cameraMode, filter);
  }
  func1(): boolean {
    return true;
  }
}
