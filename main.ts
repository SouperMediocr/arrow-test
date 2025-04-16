browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    while (browserEvents.MouseLeft.isPressed()) {
        if (charge < 150) {
            charge += 1
            chargebar.value = charge
            chargebar.max = 150
        }
        pause(1)
    }
    NotLaunched = false
    spriteutils.setVelocityAtAngle(arrow, spriteutils.angleFrom(arrow, cursor), charge + 50)
    chargebar.setFlag(SpriteFlag.Invisible, true)
    charge = 0
    arrow.ay = 125
    pauseUntil(() => spriteutils.isDestroyed(arrow))
    arrow = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . c . . . . . . 1 . . . 
        . . . . . . b d d d d d 1 1 . . 
        . . . . . c . . . . . . 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    NotLaunched = true
    chargebar = statusbars.create(10, 2, StatusBarKind.Energy)
    chargebar.attachToSprite(arrow)
    chargebar.setOffsetPadding(0, 5)
    arrow.setFlag(SpriteFlag.AutoDestroy, true)
    arrow.setPosition(80, 60)
})
browserEvents.onMouseMove(function (x, y) {
    cursor.setPosition(x, y)
})
let angle = 0
let LeftMbHeld = false
let charge = 0
let chargebar: StatusBarSprite = null
let arrow: Dart = null
let cursor: Sprite = null
let NotLaunched = false
NotLaunched = true
cursor = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
arrow = darts.create(img`
    c . . . . . . 1 . 
    . b d d d d d 1 1 
    c . . . . . . 1 . 
    `, SpriteKind.Player)
chargebar = statusbars.create(10, 2, StatusBarKind.Energy)
chargebar.attachToSprite(arrow)
chargebar.setOffsetPadding(0, 5)
arrow.setFlag(SpriteFlag.AutoDestroy, true)
let rotations_array = scaling.createRotations(arrow.image, 360)
arrow.setPosition(80, 60)
forever(function () {
	
})
forever(function () {
    if (browserEvents.MouseLeft.isPressed()) {
        LeftMbHeld = true
    } else {
        LeftMbHeld = false
    }
})
forever(function () {
    if (NotLaunched) {
        angle = Math.round(spriteutils.radiansToDegrees(spriteutils.angleFrom(arrow, cursor)))
    } else {
        angle = Math.round(spriteutils.radiansToDegrees(spriteutils.heading(arrow)))
    }
    if (angle < 0) {
        angle += 360
    }
    arrow.setImage(rotations_array[angle])
})
