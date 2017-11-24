'use strict';

var PlayScene = {
  create: function () {
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    var player = this.game.add.sprite(
    	this.game.world.centerX, this.game.world.centerY, 'player');
    player.anchor.setTo(0.5, 0.5);
    player.scale.setTo(0.1, 0.1);

  }

  update: function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        player.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player.y += 4;
    }

	}
};

module.exports = PlayScene;
