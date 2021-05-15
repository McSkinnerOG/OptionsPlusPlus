/*
 ____ ____ ____ ____ ____ ____ ____ ____ ____ 
||V |||A |||L |||I |||D |||U |||S |||E |||R ||
||__|||__|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|

*/
function addWeaponsToMainMenuScene() {

  const m4Entity = new pc.Entity();
  m4Entity.setName('M4');
  m4Entity.setLocalPosition(-0.1, 0, 0.02);
  m4Entity.setLocalScale(21, 21, 21);
  m4Entity.addComponent('model', {
    enabled: true,
    type: 'asset',
    asset: 36716849,
    materialAsset: null,
    castShadows: true,
    castShadowsLightmap: true,
    receiveShadows: true,
    lightmapped: false,
    lightmapSizeMultiplier: 1,
    castShadowsLightMap: true,
    lightMapped: false,
    lightMapSizeMultiplier: 1,
    isStatic: false,
    layers: [0],
    batchGroupId: null,
  });
  m4Entity.tags.add('Weapon');

  // LMG
  const lmgEntity = new pc.Entity();
  lmgEntity.setName('LMG');
  lmgEntity.setLocalPosition(-0.1, 0, 0.02);
  lmgEntity.setLocalScale(21, 21, 21);
  lmgEntity.addComponent('model', {
    enabled: true,
    type: 'asset',
    asset: 36716852,
    materialAsset: null,
    castShadows: true,
    castShadowsLightmap: true,
    receiveShadows: true,
    lightmapped: false,
    lightmapSizeMultiplier: 1,
    castShadowsLightMap: true,
    lightMapped: false,
    lightMapSizeMultiplier: 1,
    isStatic: false,
    layers: [0],
    batchGroupId: null,
  });
  lmgEntity.tags.add('Weapon');

  // Desert-Eagle
  const desertEntity = new pc.Entity();
  desertEntity.setName('Desert-Eagle');
  desertEntity.setLocalPosition(-0.1, 0, 0.02);
  desertEntity.setLocalScale(21, 21, 21);
  desertEntity.addComponent('model', {
    enabled: true,
    type: 'asset',
    asset: 36716855,
    materialAsset: null,
    castShadows: true,
    castShadowsLightmap: true,
    receiveShadows: true,
    lightmapped: false,
    lightmapSizeMultiplier: 1,
    castShadowsLightMap: true,
    lightMapped: false,
    lightMapSizeMultiplier: 1,
    isStatic: false,
    layers: [0],
    batchGroupId: null,
  });
  desertEntity.tags.add('Weapon');
}
addWeaponsToMainMenuScene();



if (!localStorage.getItem("MAG_FIX")) {localStorage.setItem("MAG_FIX", true);}
if (!localStorage.getItem("HIDE_FLASH")) {localStorage.setItem("HIDE_FLASH", true);}
if (!localStorage.getItem("HIDE_RELOADS")) {localStorage.setItem("HIDE_RELOADS", true);}
if (!localStorage.getItem("RIGHT_HANDED")) {localStorage.setItem("RIGHT_HANDED", true);}
if (!localStorage.getItem("UI_SCOPE_BORDER")) {localStorage.setItem("UI_SCOPE_BORDER", true);}

let gunConfigSettings = new window.settings();
gunConfigSettings.createSettings("Guns Config");
gunConfigSettings.addSettings({
  name: "MAG_FIX",
  type: "checkbox",
  text: "Enable Mag-Fix																																													*Only for Custom Model Mods*",
});
gunConfigSettings.addSettings({
  name: "HIDE_FLASH",
  type: "checkbox",
  text: "Enable Gun Muzzle Flash.",
});
gunConfigSettings.addSettings({
  name: "HIDE_RELOADS",
  type: "checkbox",
  text: "Hide Gun Reloading",
});
gunConfigSettings.addSettings({
  name: "RIGHT_HANDED",
  type: "checkbox",
  text: "Make Weapons Right-Handed",
});
gunConfigSettings.addSettings({
  name: "UI_SCOPE_BORDER",
  type: "checkbox",
  text: "Enable Scope Borders",
});

if (!localStorage.getItem("FOV_SNIPER")) {localStorage.setItem("FOV_SNIPER", true);}
if (!localStorage.getItem("FOV_SCAR")) {localStorage.setItem("FOV_SCAR", true);}
if (!localStorage.getItem("FOV_SMG")) {localStorage.setItem("FOV_SMG", true);}
if (!localStorage.getItem("FOV_SHOTGUN")) {localStorage.setItem("FOV_SHOTGUN", true);}
if (!localStorage.getItem("FOV_PISTOL")) {localStorage.setItem("FOV_PISTOL", true);}
if (!localStorage.getItem("FOV_LMG")) {localStorage.setItem("FOV_LMG", true);}
if (!localStorage.getItem("FOV_M4")) {localStorage.setItem("FOV_M4", true);}
if (!localStorage.getItem("FOV_RPG")) {localStorage.setItem("FOV_RPG", true);}
if (!localStorage.getItem("FOV_KNIFE")) {localStorage.setItem("FOV_KNIFE", true);}
let gunFOVSettings = new window.settings();
gunFOVSettings.createSettings("Gun-FOV");
gunFOVSettings.addSettings({
  name: "FOV_SNIPER",
  type: "slider",
  text: "Sniper-FOV 		 		 		 					*default 30*",
  defaultValue:30,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_SCAR",
  type: "slider",
  text: "Scar-FOV 		 		 		 								*default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_SMG",
  type: "slider",
  text: "Smg-FOV 		 		 		 								*default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_SHOTGUN",
  type: "slider",
  text: "Shitgun-FOV 		 		 		 		*default 30*",
  defaultValue:30,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_PISTOL",
  type: "slider",
  text: "Pistol-FOV 		 		 		 					 *default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_LMG",
  type: "slider",
  text: "LMG-FOV 		 		 		 								*default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_M4",
  type: "slider",
  text: "M4-FOV 		 		 		 										 *default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_RPG",
  type: "slider",
  text: "RPG-FOV 		 		 		 								*default 45*",
  defaultValue:45,
  min:10,
  max:125,
});
gunFOVSettings.addSettings({
  name: "FOV_KNIFE",
  type: "slider",
  text: "KNIFE-FOV 		 		 		 								*default 45*",
  defaultValue:45,
  min:10,
  max:125,
});

if (!localStorage.getItem("PLAYER_SPRAYS")) {localStorage.setItem("PLAYER_SPRAYS", true);}
if (!localStorage.getItem("KILL_SPHERE")) {localStorage.setItem("KILL_SPHERE", true);}
if (!localStorage.getItem("KILL_SKULL")) {localStorage.setItem("KILL_SKULL", true);}
if (!localStorage.getItem("GARBAGE_ENTITY")) {localStorage.setItem("GARBAGE_ENTITY", true);}


let visualSettings = new window.settings();
visualSettings.createSettings("Visuals");
visualSettings.addSettings({
  name: "PLAYER_SPRAYS",
  type: "checkbox",
  text: "Enable Player Spray Cosmetics Ingame.",
});
visualSettings.addSettings({
  name: "KILL_SPHERE",
  type: "checkbox",
  text: "Enable strange death sphere thing.",
});
visualSettings.addSettings({
  name: "KILL_SKULL",
  type: "checkbox",
  text: "Enable Floating skull animation.",
});
visualSettings.addSettings({
  name: "GARBAGE_ENTITY",
  type: "checkbox",
  text: "Enable garbage entities.",
});


if (!localStorage.getItem("EXPLOSION_SMOKE")) {localStorage.setItem("EXPLOSION_SMOKE", true);}
if (!localStorage.getItem("EXPLOSION")) {localStorage.setItem("EXPLOSION_SMOKE", true);}
if (!localStorage.getItem("TRACER_LINES")) {localStorage.setItem("TRACER_LINES", true);}
if (!localStorage.getItem("SHOOT_LINES")) {localStorage.setItem("SHOOT_LINES", true);}
if (!localStorage.getItem("IMPACT_MARKS")) {localStorage.setItem("IMPACT_MARKS", true);}
if (!localStorage.getItem("BULLET_ENTITY")) {localStorage.setItem("BULLET_ENTITY", true);}
if (!localStorage.getItem("HIT_ENTITY")) {localStorage.setItem("HIT_ENTITY", true);}
if (!localStorage.getItem("SHURIKEN_ENTITY")) {localStorage.setItem("SHURIKEN_ENTITY", true);}
let particleSettings = new window.settings();
particleSettings.createSettings("Particles");
particleSettings.addSettings({
  name: "EXPLOSION_SMOKE",
  type: "checkbox",
  text: "Enable Explosion Smoke",
});
particleSettings.addSettings({
  name: "EXPLOSION",
  type: "checkbox",
  text: "Enable Explosions.",
});
particleSettings.addSettings({
  name: "TRACER_LINES",
  type: "checkbox",
  text: "Enable Tracer Lines.",
});
particleSettings.addSettings({
  name: "SHOOT_LINES",
  type: "checkbox",
  text: "Enable Shoot Rays.",
});
particleSettings.addSettings({
  name: "IMPACT_MARKS",
  type: "checkbox",
  text: "Enable Bullet Impact Marks.",
});
particleSettings.addSettings({
  name: "BULLET_ENTITY",
  type: "checkbox",
  text: "Enable Bullets Visually.",
});
particleSettings.addSettings({
  name: "HIT_ENTITY",
  type: "checkbox",
  text: "Enable Hit Entity???.",
});
particleSettings.addSettings({
  name: "SHURIKEN_ENTITY",
  type: "checkbox",
  text: "Enable visual shurikens.",
});
pc.app.on('Hit:Point', () => {
    pc.app.getEntityFromIndex('fbc1de9e-7379-455b-a473-c7195fd7ae25').model.enabled = JSON.parse(localStorage.getItem('KILL_SPHERE'));
})

pc.app.on("Map:Loaded", () => {
  const sniperEntity = pc.app.getEntityFromIndex("a92e3a56-d2cb-4d4a-8f97-047cd217b171");
  const scarEntity = pc.app.getEntityFromIndex("00e8efa1-8e2a-4162-97a3-202b601757ca");
  const smgEntity = pc.app.getEntityFromIndex("952abbee-906a-45c8-b343-a33c07860148");
  const shitgunEntity = pc.app.getEntityFromIndex("974afaa4-7d88-4fca-8d55-33a5527c2cf9");
  const m4Entity = pc.app.getEntityFromIndex("b2510852-d387-4cfd-b568-81a01af8852f");
  const pistolEntity = pc.app.getEntityFromIndex("6da0a919-8f04-41d5-b3c5-1d67d97a0c0c"); 
  const meleeEntity = pc.app.getEntityFromIndex("7ce9e164-c3d2-4741-a842-d9c00a8ad7fa");
  const daggerEntity = pc.app.getEntityFromIndex("3f8fab6a-6ec5-4a5a-94ca-27ee920a3c2d");
  const gLauncherEntity = pc.app.getEntityFromIndex("bf215832-8da1-4910-9ee4-fe68fcda2224");
  const rocketLauncherEntity = pc.app.getEntityFromIndex("f81d9c88-5c32-42a8-85fd-25cf2ad9b35f");
  const lmgEntity = pc.app.getEntityFromIndex("46f6693f-bbe6-48a7-b7fd-0c352d744e67");

  const sniperLens = pc.app.getEntityFromIndex("b655ed04-9844-4957-a03c-1756b25bda05");
  
  const scarMagazine = pc.app.getEntityFromIndex("4bf1812a-21c3-4ad6-a949-000a459214f5");
  const smgMagazine = pc.app.getEntityFromIndex("2ed8fcf8-0ffc-4cf5-a030-43afea45c461");
  const m4Magazine = pc.app.getEntityFromIndex("b3ae337d-6bb2-46f4-9000-b83e4d220f0c");
  const pistolMagazine = pc.app.getEntityFromIndex("f0dfd598-7a2f-4c0b-864c-9c16866a50a2");
  const shitgunMagazine = pc.app.getEntityFromIndex("ebc4d65a-5096-454b-bb11-fcabf4880bd3");
  const meleeMagazine = pc.app.getEntityFromIndex("756554ea-0357-46c4-99a6-ac913a78e4b6");
  const rocketLauncherMagazine = pc.app.getEntityFromIndex("2c0ce095-bfca-4d22-8a24-825cfadfc3d4");
  const sniperMagazine = pc.app.getEntityFromIndex("d433aae6-4ac9-4cdf-aaf0-094eb4f190b0");
  const daggerMagazine = pc.app.getEntityFromIndex("8462528e-dab7-4b3f-b675-7441668cbbc3");
  const lmgMagazine = pc.app.getEntityFromIndex("04ff3692-828f-462c-8936-4e67343fbc5d");
  const gLauncherMagazine = pc.app.getEntityFromIndex("0f6b1c59-0b64-4daf-b2e5-5965f8490e62");
  

  const ingameOverlay = pc.app.getEntityFromIndex("9fcdea8c-ee29-403e-8e5b-0eddd1e548f6");




  
  
  // -=||HAND-MOD||=-
  sniperEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  scarEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  smgEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  shitgunEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  m4Entity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  lmgEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  pistolEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  daggerEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  gLauncherEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  rocketLauncherEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  meleeEntity.script.weapon.isRightHanded = JSON.parse(localStorage.getItem('RIGHT_HANDED'));
  if (localStorage.getItem('MAG_FIX') === "true"){
    shitgunMagazine.setLocalScale(1, 1, 1);
    pistolMagazine.setLocalScale(1, 1, 1);
    scarMagazine.setLocalScale(1, 1, 1);
    smgMagazine.setLocalScale(1, 1, 1);
    m4Magazine.setLocalScale(1, 1, 1);
    sniperMagazine.setLocalScale(1, 1, 1);
    gLauncherMagazine.setLocalScale(1, 1, 1);
    lmgMagazine.setLocalScale(1, 1, 1);
    daggerMagazine.setLocalScale(1, 1, 1);
    rocketLauncherMagazine.setLocalScale(1, 1, 1);
    meleeMagazine.setLocalScale(1, 1, 1);
    }
	
  // -=||HIDE-RELOAD-MOD||=-
  sniperEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  scarEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  smgEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  shitgunEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  m4Entity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  lmgEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pistolEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  daggerEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  gLauncherEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  rocketLauncherEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  meleeEntity.script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS')); 
  
  // -=||FOV-MOD||=-
  sniperEntity.script.weapon.focusFov = localStorage.getItem('FOV_SNIPER');
  scarEntity.script.weapon.focusFov = localStorage.getItem('FOV_SCAR');
  smgEntity.script.weapon.focusFov = localStorage.getItem('FOV_SMG');
  shitgunEntity.script.weapon.focusFov = localStorage.getItem('FOV_SHOTGUN');
  pistolEntity.script.weapon.focusFov = localStorage.getItem('FOV_PISTOL');
  lmgEntity.script.weapon.focusFov = localStorage.getItem('FOV_LMG');
  m4Entity.script.weapon.focusFov = localStorage.getItem('FOV_M4');
  daggerEntity.script.weapon.focusFov = localStorage.getItem('FOV_KNIFE');
  
  
  pc.app.getEntityFromIndex("f81cd01c-a697-491b-8ed7-9cbafb6fee6e").enabled = JSON.parse(localStorage.getItem('PLAYER_SPRAYS'));
  pc.app.getEntityFromIndex("436591b0-26aa-4678-ad3f-645a76a01c9c").enabled = JSON.parse(localStorage.getItem('KILL_SKULL'));
  pc.app.getEntityFromIndex("fcf27bc6-8c98-4b74-ac38-36482fad0dbb").enabled = JSON.parse(localStorage.getItem('GARBAGE_ENTITY'));
  pc.app.getEntityFromIndex("00105180-4235-4666-b8d6-e29e0e763fdd").enabled = JSON.parse(localStorage.getItem('HIDE_FLASH'));
  pc.app.getEntityFromIndex("9c502ded-f8f5-4f7a-9534-608b920456c2").enabled = JSON.parse(localStorage.getItem('SHURIKEN_ENTITY'));
  pc.app.getEntityFromIndex("1bce09b6-ca31-4865-bc4f-1cbcd2c7f604").enabled = JSON.parse(localStorage.getItem('EXPLOSION_SMOKE'));
  pc.app.getEntityFromIndex("a50a0a93-f587-48b3-854c-830e3a85aab7").enabled = JSON.parse(localStorage.getItem('EXPLOSION'));
  pc.app.getEntityFromIndex("02348c57-ffbe-4784-911b-12d6795f67a1").enabled = JSON.parse(localStorage.getItem('TRACER_LINES'));
  pc.app.getEntityFromIndex("66f38a4a-5dcc-4343-aa6a-8fe701f4dd22").enabled = JSON.parse(localStorage.getItem('IMPACT_MARKS'));
  pc.app.getEntityFromIndex('015578c4-23eb-4ddb-91b6-f8e424a29e6a').enabled = JSON.parse(localStorage.getItem('BULLET_ENTITY'));
  pc.app.getEntityFromIndex("5b168db3-3eff-4b4d-acdf-50b4ff403524").enabled = JSON.parse(localStorage.getItem('HIT_ENTITY'));
  if (localStorage.getItem("UI_SCOPE_BORDER") === "false") return;
  if (ingameOverlay) {
  		//Remove Scope Border
      const scopeBorder1 = pc.app.getEntityFromIndex("78c01491-2565-417a-987b-6c95af4cc8eb");
      const scopeBorder2 = pc.app.getEntityFromIndex("03a21dce-6227-4aff-a9a5-3e1e4492ec75");
      scopeBorder1.enabled = false;
      scopeBorder2.enabled = false;
      
    }
});

window.EnableMusicButton = pc.app.getEntityFromIndex(
  "c719a624-3eb0-4761-9c3d-a18c7963b776"
);
// Remove 'Enable Menu Music' since there is no menu music anymore and func breaks game.
EnableMusicButton.enabled = false;
EnableMusicButton.parent.parent.parent.children[7].children[0].children[1].children[1].element.text = "Weapons"
EnableMusicButton.parent.parent.parent.children[7].children[1].children[0].element.text = "Here you can change some configs how guns are working"
EnableMusicButton.parent.parent.parent.children[7].children[1].children[0].setLocalPosition(180, 5, 0)
EnableMusicButton.parent.parent.parent.children[8].children[0].children[1].children[1].element.text = "Field of View"
EnableMusicButton.parent.parent.parent.children[8].children[1].children[0].element.text = "Here you can change what Field of View in Zoom you want to have"
EnableMusicButton.parent.parent.parent.children[8].children[1].children[0].setLocalPosition(150, 7.5, 0)
EnableMusicButton.parent.parent.parent.children[8].children[2].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[3].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[4].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[5].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[6].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[7].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[8].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[9].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[10].setLocalScale(1, 1, 1); //Don't change or the whole universe collapses in the settings - NeXi2k
EnableMusicButton.parent.parent.parent.children[8].children[2].setLocalPosition(20, -70, 0);
EnableMusicButton.parent.parent.parent.children[8].children[3].setLocalPosition(20, -115, 0);
EnableMusicButton.parent.parent.parent.children[8].children[4].setLocalPosition(20, -160, 0);
EnableMusicButton.parent.parent.parent.children[8].children[5].setLocalPosition(20, -205, 0);
EnableMusicButton.parent.parent.parent.children[8].children[6].setLocalPosition(20, -250, 0);
EnableMusicButton.parent.parent.parent.children[8].children[7].setLocalPosition(20, -295, 0);
EnableMusicButton.parent.parent.parent.children[8].children[8].setLocalPosition(20, -340, 0);
EnableMusicButton.parent.parent.parent.children[8].children[9].setLocalPosition(20, -385, 0);
EnableMusicButton.parent.parent.parent.children[8].children[10].setLocalPosition(20, -430, 0);
EnableMusicButton.parent.parent.parent.children[8].children[2].children[2].enabled = false
EnableMusicButton.parent.parent.parent.children[8].children[2].children[2].enabled = true