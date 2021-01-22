scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.setPosition(1, 12)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingOak, function (sprite, location) {
    info.setScore(1)
    tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000001000000000202010101010101000100000001000101010101010000000000000100000000000001010200010100010101010101010100010102000100000000000000000100000101020001010102020201010001000101010200000001020202000000000000010102000100010202020001010101010101020001000100000000000000000101010000010000000101010102020000010100000102020202020202010101000101000201020101010101010100000001010002010100000000000001000202010100000000000002020200010000030101010101010101010101010101010101`, img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 . . . . . . . 2 . . . . . . 2 
        2 2 2 2 2 . 2 . . . 2 . 2 2 2 2 
        2 2 . . . . . . 2 . . . . . . 2 
        2 . . 2 2 . 2 2 2 2 2 2 2 2 . 2 
        2 . . 2 . . . . . . . . 2 . . 2 
        2 . . 2 2 2 . . . 2 2 . 2 . 2 2 
        2 . . . . 2 . . . . . . . . . 2 
        2 . . 2 . 2 . . . . 2 2 2 2 2 2 
        2 . . 2 . 2 . . . . . . . . 2 2 
        2 . . 2 . . . 2 2 2 2 . . . . 2 
        2 . . 2 . . . . . . . 2 2 2 . 2 
        2 . . 2 . 2 2 2 2 2 2 2 . . . 2 
        2 . . 2 2 . . . . . . 2 . . . 2 
        2 . . . . . . . . . . 2 . . . 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, [myTiles.transparency16,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava1,sprites.castle.saplingOak], TileScale.Sixteen))
    info.setLife(3)
    mySprite.setPosition(2, 12)
})
let mySprite: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020000020202000000000101010000000000000101020000000000000000000202020202020200020202020102020200000000020302000001010202020202000202000200020000000002000000020000000002000202020200020002000202020002000000000000000000020000010200020001000002020202020202000202000200020200020000000000020000000002000000000200020202000202020202020200000200000202020002020202000000000000000001010200000000000000020202020202020202020201010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
    2 . . . . . . . . . . . . . . . 
    2 . . . . . . . . . 2 2 2 2 2 2 
    2 . 2 2 2 2 . 2 2 2 . . . . 2 . 
    2 . . . . 2 2 2 2 2 . 2 2 . 2 . 
    2 . . . . 2 . . . 2 . . . . 2 . 
    2 2 2 2 . 2 . 2 . 2 2 2 . 2 . . 
    . . . . . . . 2 . . . 2 . 2 . . 
    . . 2 2 2 2 2 2 2 . 2 2 . 2 . 2 
    2 . 2 . . . . . 2 . . . . 2 . . 
    . . 2 . 2 2 2 . 2 2 2 2 2 2 2 . 
    . 2 . . 2 2 2 . 2 2 2 2 . . . . 
    . . . . . . 2 . . . . . . . 2 2 
    2 2 2 2 2 2 2 2 2 . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.castle.saplingOak], TileScale.Sixteen))
mySprite = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(1, 12)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
