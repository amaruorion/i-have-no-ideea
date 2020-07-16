namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 f f f f f f f f f f f f f f 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
	
})
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`140009000b0c1b0c19190c0c0c0e202020202020202020201404040404040404040f202020202020202020201404040404040404040f202020202020202020201a040404040404040418202020202020202020231a040404040404040418202020202020202020201404040404040404040f202020202020202020201404040404040404040f2020202020202020202015121212171712121210202020202020202020201f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f1f00`,
            img`
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 . . . . . . . . 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass3,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouth,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.floorLight2,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder,myTiles.tile1,sprites.dungeon.floorLight3],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp)) {
        tiles.setTileAt(tiles.getTileLocation(2, 0), sprites.dungeon.greenSwitchDown)
        tiles.setWallAt(tiles.getTileLocation(9, 3), false)
        tiles.setWallAt(tiles.getTileLocation(9, 4), false)
        tiles.setTileAt(tiles.getTileLocation(9, 3), sprites.dungeon.darkGroundCenter)
        tiles.setTileAt(tiles.getTileLocation(9, 4), sprites.dungeon.darkGroundCenter)
    }
})
