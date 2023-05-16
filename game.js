

class sceneMountBad extends AdventureScene {
    constructor() {
        super("sceneMountBad" , "Slip in the cave and are forever lost")
    }

    onEnter(){
        let floor = this.add.rectangle(0, this.h, this.w *1.5, this.h * .15, 0x000000);

        let spike1 = this.add.image(this.w *.7,this.h*.59, 'spike')
        let spike2 = this.add.image(this.w *.2,this.h*.59, 'spike')

        let spikeAlt1 = this.add.image(this.w *.55,this.h*.2, 'spike2')
        let spikeAlt2 = this.add.image(this.w *.2,this.h*.2, 'spike2')

        let end1 = this.add.image(this.w *.4, this.h *.5, 'endThing')
        .setInteractive()
        .on('pointover', () => {
            end1 = this.add.image(this.w *.4, this.h *.5, 'endThing1');
            this.showMessage("You are very dead, you can click to restart");
        })
        .on('pointerdown' , () => {
            this.gotoScene("intro");
        })
        
    }

}

class sceneMountGood extends AdventureScene {
    constructor() {
        super("sceneMountGood" , "The torch brought you to where you wanted")
    }

    onEnter(){
        let floor = this.add.rectangle(0, this.h, this.w *1.5, this.h * .15, 0x000000);

        let altar1 = this.add.rectangle(this.w *.4, this.h *.895, 1024, 64, 0x808080)
        let altar2 = this.add.rectangle(this.w *.4, this.h *.85, 768, 64, 0x808080)
        let altar3 = this.add.rectangle(this.w *.4, this.h *.8, 576, 64, 0x808080)

        let goal = this.add.rectangle(this.w *.4, this.h *.71, 128, 128, 0xFFFF00)
        this.add.text(this.w*.38,this.h*.6, "mcguffin")
        .setInteractive()
        .on('pointover', () => {
            //end1 = this.add.image(this.w *.4, this.h *.5, 'endThing1');
            this.showMessage("Ya did it, congrats");
        })
        .on('pointerdown' , () => {
            this.gotoScene("intro");
        })
        this.showMessage("Ya did it, congrats");
    }
    
}

class sceneMount2 extends AdventureScene {
    constructor() {
        super("sceneMount2" , "You delve further into the dark")
    }
    onEnter(){
        

        let floor = this.add.rectangle(0, this.h, this.w *1.5, this.h * .15, 0x000000);

        let enter1 = this.add.rectangle(this.w*.4,this.h*.6, 400, 800, 0x000000)

        let spike1 = this.add.image(this.w *.7,this.h*.59, 'spike')
        let spike2 = this.add.image(this.w *.2,this.h*.59, 'spike')

        let spikeAlt1 = this.add.image(this.w *.55,this.h*.2, 'spike2')
        let spikeAlt2 = this.add.image(this.w *.2,this.h*.2, 'spike2')
        
        this.add.text(this.w*.35,this.h*.55, "venture into the dark")
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("torch")) {
            this.showMessage("go forth");
            }else{
                this.showMessage("careful, it's dark and you don't have a source of light");
            }
        })
        .on('pointerdown' , () => {
            this.gotoScene('sceneMount2');
            if(this.hasItem("torch")){
                this.gotoScene("sceneMountGood");
            }else{
                this.gotoScene("sceneMountBad");
            }
        })


    }
}

class sceneMount1 extends AdventureScene {
    constructor() {
        super("sceneMount1", "You're at the base of the mountain");
    }
    onEnter(){
        let floor = this.add.rectangle(0, this.h, this.w *1.5, this.h * .15, 0x000000);

        let enter1 = this.add.rectangle(this.w*.4,this.h*.6, 400, 800, 0x000000)
        
        this.add.text(this.w*.35,this.h*.55, "venture into the dark")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("go forth");
        })
        .on('pointerdown', () => {
            this.gotoScene('sceneMount2');
        })

    }
}

class sceneCabin extends AdventureScene {
    constructor() {
        super("sceneCabin", "Inside your cabin there's a torch");
    }
    onEnter(){
        let floor = this.add.rectangle(0, this.h, this.w *1.5, this.h * .15, 0x30221d);

        let table1 = this.add.rectangle(this.w *.4,this.h*.7,512,32,0x30221d)
        let table2 = this.add.rectangle(this.w *.27,this.h*.8,32,270,0x30221d)
        let table3 = this.add.rectangle(this.w *.53,this.h*.8,32,270,0x30221d)

        let torch1 = this.add.rectangle(this.w *.4,this.h*.63,32,128, 0x808080)
        let torch2 = this.add.rectangle(this.w *.4, this.h*.56, 16,32, 0xFFA500)

        this.add.text(this.w *.39, this.h*.6, "torch")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("pick up the torch");
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the torch.");
            this.gainItem('torch');
            //this.destroy();
        })

        //let goOut1 = this.add.rectangle(this.w *.70, this.h *.1, 128,128, 0xFF0000)
        this.add.text(this.w *.7, this.h * .05, "outside")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("leave");
        })
        .on('pointerdown', () => {
            this.gotoScene('scene1');
        })
    }
}

class scene1 extends AdventureScene {
    constructor() {
        super("scene1", "Outside, in view of the mountain");
    }
    onEnter(){
        let floor = this.add.rectangle(0, this.h, this.w * 2, this.h * .15, 0x000000);

        //mountain stuff
        let mount1 = this.add.triangle(this.w *.70,this.h *1.15,-256,128,0,-512,256,128, 0x000000)////x,y,x1,y1,x2,y2,x3,y3.color

        this.add.text(this.w * 0.54, this.h * 0.6, "mountain")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Venture towards the mountain.");
        })
        .on('pointerdown', () => this.gotoScene('sceneMount1'));

        //house stuff
        let house1 = this.add.rectangle(this.w*.045,this.h*.87,200,125,0x30221d);
        let house2 = this.add.triangle(this.w*.07,this.h*.76,-32,128,64,0,128+128+128,128,0x30221d)
        let house3 = this.add.rectangle(this.w*.14,this.h*.87,16,128,0x30221d);

        this.add.text(this.w *.04, this.h *.8, "cabin")
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Return to the cabin.");
        })
        .on('pointerdown', () => this.gotoScene('sceneCabin'));
        }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('spike', 'spike.png');
        this.load.image('spike2', 'spikeAlt.png');
        this.load.image('endThing', 'endThing.png');
        this.load.image('endThing1', 'endThing1.png');
    }
    create() {

        this.add.text(375 ,375, "Venture!").setFontSize(250);
        //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            //this.cameras.main.fade(1000, 0,0,0);
            //this.time.delayedCall(1000, () => this.scene.start('scene1'));
            this.scene.start('scene1');
        });
    }
}
    
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, scene1, sceneCabin, sceneMount1, sceneMount2, sceneMountGood, sceneMountBad],
    title: "Adventure Game",
});

