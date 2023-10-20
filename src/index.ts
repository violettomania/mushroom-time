import Phaser from 'phaser';
import { Game, Types } from 'phaser';
import { LoadingScene } from './scenes/loadingScene';

const gameConfig: Types.Core.GameConfig = {
  title: 'Mushroom Time',
  type: Phaser.WEBGL,
  parent: 'game',
  backgroundColor: '#351f1b',
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  callbacks: {
    postBoot: () => {
      sizeChanged();
    },
  },
  canvasStyle: `display: block; width: 100%; height: 100%;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [LoadingScene],
};

const game = new Game(gameConfig);

const sizeChanged = () => {
  if (game.isBooted) {
    setTimeout(() => {
      game.scale.resize(window.innerWidth, window.innerHeight);
      game.canvas.setAttribute(
        'style',
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`
      );
    }, 100);
  }
};

window.onresize = () => sizeChanged();
