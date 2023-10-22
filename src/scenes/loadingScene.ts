import { Scene, GameObjects } from 'phaser';
import { getBaseUrl } from '../assetsHelper';

export class LoadingScene extends Scene {
  frog!: GameObjects.Sprite;

  constructor() {
    super('loading-scene');
  }

  preload() {
    this.load.baseURL = getBaseUrl();
    this.load.image('frog', 'sprites/frog.png');
  }

  create(): void {
    this.frog = this.add.sprite(100, 100, 'frog');
  }
}
