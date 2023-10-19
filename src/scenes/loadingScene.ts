import { Scene, GameObjects } from 'phaser';

export class LoadingScene extends Scene {
  private frog!: GameObjects.Sprite;

  constructor() {
    super('loading-scene');
  }

  preload() {
    if (process.env.NODE_ENV === 'development') {
      this.load.baseURL = 'src/assets/';
    } else {
      this.load.baseURL = 'dist/assets/';
    }

    this.load.image('frog', 'sprites/frog.png');
  }

  create(): void {
    this.frog = this.add.sprite(100, 100, 'frog');
  }
}
