controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Minecraft_Player.y += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Minecraft_Player.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Minecraft_Player.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Minecraft_Player.y += 10
})
let Minecraft_Player: Sprite = null
scene.setBackgroundImage(assets.image`minecraft floor`)
Minecraft_Player = sprites.create(assets.image`minecraft 1`, SpriteKind.Player)
Minecraft_Player.setPosition(19, 49)
