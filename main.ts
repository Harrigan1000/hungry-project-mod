// Changes the flag to True
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    inHungry = !(inHungry)
    likeGermanFood = !(likeGermanFood)
})
let likeGermanFood = false
let inHungry = false
scene.setBackgroundColor(5)
let Monkey = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
// Initializes our Boolean flag to False
inHungry = false
likeGermanFood = true
// Constrantly checks the state of the isHungry flag
game.onUpdateInterval(500, function () {
    if (inHungry) {
        Monkey.sayText("I'm hungry!")
    } else {
        Monkey.sayText("I'm not hungry!")
    }
    if (likeGermanFood) {
        scene.setBackgroundColor(5)
        Monkey.sayText("I like German Food")
    } else {
        Monkey.sayText("I don't like German Food")
        scene.setBackgroundColor(4)
    }
})
