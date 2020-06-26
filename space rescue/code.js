var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8788220f-ca36-4c61-9f1c-63ce710251eb","851f53f3-4f56-45ae-8f45-47baae4e9041","f619ca71-d6c8-48ab-90e2-571db5b2f2d7","65025733-e4cb-4507-bc0f-e26091b7e8b5","440a3fcd-b64e-4740-ac11-21972f5bced6","7522bb80-d245-43f0-88ac-b82c13120a07","451a39cc-c02f-4985-bb5c-1b31c0118b75","efdfc96f-2c57-428b-a29f-86338ec6b9e8","7c007c5b-85b7-416b-a41b-4e1f3c772111","272b0e21-da75-4912-a583-265c11a06c98"],"propsByKey":{"8788220f-ca36-4c61-9f1c-63ce710251eb":{"name":"css.jpg_1","sourceUrl":null,"frameSize":{"x":120,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"pB3QjdqUlM6RlXcCDtuGSSLzgz87gbjF","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":62},"rootRelativePath":"assets/8788220f-ca36-4c61-9f1c-63ce710251eb.png"},"851f53f3-4f56-45ae-8f45-47baae4e9041":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":300,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"iCN2xavAjwssTSJVgWrlw0Tx47UFLMzO","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":150},"rootRelativePath":"assets/851f53f3-4f56-45ae-8f45-47baae4e9041.png"},"f619ca71-d6c8-48ab-90e2-571db5b2f2d7":{"name":"space_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"GLx8rtYOXvzEi9L4fvjaqqmrK_okuzjh","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f619ca71-d6c8-48ab-90e2-571db5b2f2d7.png"},"65025733-e4cb-4507-bc0f-e26091b7e8b5":{"name":"space_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":5,"looping":true,"frameDelay":12,"version":"0sGf.hOXKn4WBgvvxa9HLvEXSMnfdAzW","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":1200},"rootRelativePath":"assets/65025733-e4cb-4507-bc0f-e26091b7e8b5.png"},"440a3fcd-b64e-4740-ac11-21972f5bced6":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":150,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"zIZpCPwkw7pMeX.S5xAHSLS80zx3v8J1","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":50},"rootRelativePath":"assets/440a3fcd-b64e-4740-ac11-21972f5bced6.png"},"7522bb80-d245-43f0-88ac-b82c13120a07":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":50,"y":6},"frameCount":1,"looping":true,"frameDelay":12,"version":"n05l2bDmcTYKxoYhGMWR.wlndDVyZeX4","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":6},"rootRelativePath":"assets/7522bb80-d245-43f0-88ac-b82c13120a07.png"},"451a39cc-c02f-4985-bb5c-1b31c0118b75":{"name":"spaceship.jpg_1","sourceUrl":null,"frameSize":{"x":140,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"cPVnSuQNUtbYyPEoytnvEHq2NlnE.acu","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":100},"rootRelativePath":"assets/451a39cc-c02f-4985-bb5c-1b31c0118b75.png"},"efdfc96f-2c57-428b-a29f-86338ec6b9e8":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"6R7ZzJjOWOQHkP9VVKATnNtl4OOS22qh","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/efdfc96f-2c57-428b-a29f-86338ec6b9e8.png"},"7c007c5b-85b7-416b-a41b-4e1f3c772111":{"name":"no","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"8YelFp7j88VV5bTc4WKd0.5yWiXnSw8K","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7c007c5b-85b7-416b-a41b-4e1f3c772111.png"},"272b0e21-da75-4912-a583-265c11a06c98":{"name":"bameover.jpg_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"32syTzBlS9paV2NUiAxsvsuVOdy2c3Nq","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/272b0e21-da75-4912-a583-265c11a06c98.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("space_1");
var bullet = createSprite(5555555, 200);
bullet.setAnimation("animation_3");
var banner = createSprite(200, 230);
banner.setAnimation("css.jpg_1");
banner.width = banner.width+100;
banner.height = banner.height+60;
var bannerHead = createSprite(200, 55);
bannerHead.setAnimation("animation_1");
var playButton = createSprite(200, 340);
playButton.setAnimation("animation_2");
var player = createSprite(333333333333333333333333333333333332, 200);
player.setAnimation("css.jpg_1");
var space1 = createSprite(480, 200);
space1.setAnimation("animation_4");
var space2 = createSprite(460, 100);
space2.setAnimation("animation_4");
var space3 = createSprite(460, 300);
space3.setAnimation("animation_4");
var spaceShip = createSprite(500, randomNumber(10, 390));
spaceShip.setAnimation("spaceship.jpg_1");
var ani = createSprite(200, 200);
ani.setAnimation("no");
var score = 0;
var lives = 20;
var fire = 50;
textSize(22);
fill("225");
function draw() {
  if (mousePressedOver(playButton)) {
    bg.setAnimation("space_1_copy_1");
    banner.visible = false;
    bannerHead.visible = false;
    playButton.visible = false;
  }
  createEdgeSprites();
  if (keyDown("enter")) {
    bg.setAnimation("space_1");
    player.x = 40;
    bullet.x = 40;
    space1.velocityX = -5;
    space2.velocityX = -7;
    space3.velocityX = -3;
    spaceShip.velocityX = -4;
  }
  if (keyDown("up")) {
    player.velocityY = -18;
    bullet.velocityY = -18;
  }
  if (keyWentUp("up")) {
    bullet.velocityY = 0;
    player.velocityY = 0;
  }
   if (keyDown("down")) {
    player.velocityY =18;
    bullet.velocityY = 18;
  }
  if (keyWentUp("down")) {
    bullet.velocityY = 0;
    player.velocityY = 0;
  }
  if (keyDown("space")) {
    bullet.velocityX = 67;
    fire = fire-1;
  }
  if (bullet.isTouching(spaceShip)) {
    bullet.x = 40;
    bullet.y = player.y;
    spaceShip.x = 500;
    spaceShip.y = randomNumber(10, 390);
    bullet.velocityX = 0;
    score = score + 5;
  }
    if (bullet.isTouching(edges)) {
    bullet.x = 40;
    bullet.y = player.y;
   bullet.velocityX = 0;
  }
  if (player.isTouching(space1) ){
    space1.x = 500;
    score = score + 1;
    fire = fire+1;
   space1.y = randomNumber(10, 390);
  }
   if (player.isTouching(space2) ){
    space2.x = 500;
     score = score + 1;
    fire = fire+1;
   space2.y = randomNumber(10, 390);
  }
   if (player.isTouching(space3) ){
    space3.x = 500;
    score = score + 1;
    fire = fire+1;
    space3.y = randomNumber(10, 390);
  }
  if (spaceShip.isTouching(player)) {
    lives = lives - 1;
    spaceShip.x = 480;
    spaceShip.y = randomNumber(10, 390);
  }
  if (space1.isTouching(leftEdge)) {
    space1.x = 450;
    
   
  }
  if (spaceShip.isTouching(leftEdge)) {
    spaceShip.x = 450;
    spaceShip.y = randomNumber(10, 390);
  }
  
  if (spaceShip.isTouching(leftEdge)) {
    spaceShip.x = 450;
    spaceShip.y = randomNumber(10, 390);
  }
 
  if (spaceShip.isTouching(leftEdge)) {
    spaceShip.x = 450;
    spaceShip.y = randomNumber(10, 390);
  }
  if (lives==0) {
    ani.setAnimation("bameover.jpg_1");
  }  
  
  drawSprites();
  if (fire<=0) {
  bullet.y = 500;
text("bullets are finished", 200, 200);
  }
  text("score"+score, 0, 15);
  text("lives"+lives, 100, 15);
  text("fire"+fire, 200, 15);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
