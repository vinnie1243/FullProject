function level(num) {
    var canvas = document.getElementById("playarea")
    //x, y, width, height, color
    var data = {
        //level 1
        1: {
            platforms: [
                //coordinates for textures are in the texture(x,y) fo
                //saddlebrown = inside dirt done
                //lightgray = texture(1,0)
                //gray = metal done
                //darkgray = halfsnow done
                //peru = texture(0,0)
                //red = spikes done
                //darkslategray = brick done
                //green = ledge
                ///VOID///
                [0, 0, 50, 100, "black", "N"],
                [50, 0, 50, 50, "black", "N"],
                [0, 1000, 50, 200, "black", "N"],
                [150, 1100, 50, 50, "black", "N"],
                [150, 1150, 100, 50, "black", "N"],
                [50, 1050, 100, 150, "black", "N"],
                [600, 1050, 50, 50, "black", "N"],
                [500, 1150, 850, 50, "black", "N"],
                [550, 1100, 750, 50, "black", "N"],
                [900, 1050, 350, 50, "black", "N"],
                ///HALFSNOW///
                [100, 0, 100, 50, "darkgray", "Y"],
                [0, 100, 50, 50, "darkgray", "Y"],
                [50, 1000, 50, 50, "darkgray", "Y"],
                [800, 1050, 100, 50, "darkgray", "Y"],
                [950, 850, 50, 150, "darkgray", "Y"],
                [1100, 900, 150, 50, "darkgray", "Y"],
                ///SNOW///
                [50, 50, 150, 50, "lightgray", "Y"],
                [50, 950, 50, 50, "snow1", "Y"],
                [100, 950, 50, 50, "snow1", "Y"],
                [750, 1000, 50, 50, "snow1", "Y"],
                [800, 1000, 50, 50, "snow1", "Y"],
                [850, 1000, 50, 50, "snow1", "Y"],
                [900, 1000, 50, 50, "lightgray", "Y"],
                [900, 800, 50, 200, "lightgray", "Y"],
                [1000, 750, 100, 100, "lightgray", "Y"],  
                [1050, 850, 250, 50, "lightgray", "Y"],
                [950, 800, 50, 50, "lightgray", "Y"],
                [1250, 900, 50, 100, "lightgray", "Y"],
                ///OUTSIDEDIRT///
                [50, 400, 50, 50, "dirt8", "Y"],
                [50, 350, 50, 50, "dirt5", "Y"],
                [50, 300, 50, 50, "dirt5", "Y"],
                [50, 250, 50, 50, "dirt5", "Y"],
                [50, 200, 50, 50, "dirt5", "Y"],
                [50, 150, 50, 50, "dirt5", "Y"],
                [50, 100, 50, 50, "dirt5", "Y"],
                [150, 950, 50, 50, "dirt1", "Y"],
                [200, 950, 50, 50, "dirt3", "Y"],
                [200, 1000, 50, 50, "dirt5", "Y"],
                [200, 1050, 50, 50, "dirt5", "Y"],
                [200, 1100, 50, 50, "dirt10", "Y"],   
                [250, 1100, 50, 50, "dirt1", "Y"],
                [300, 1100, 50, 50, "dirt1", "Y"],
                [350, 1100, 50, 50, "dirt1", "Y"],
                [400, 1100, 50, 50, "dirt1", "Y"],
                [450, 1100, 50, 50, "dirt1", "Y"],
                [500, 1100, 50, 50, "dirt9", "Y"],
                [500, 850, 50, 50, "dirt2", "Y"],
                [500, 900, 50, 50, "dirt4", "Y"],
                [500, 950, 50, 50, "dirt4", "Y"],
                [500, 1000, 50, 50, "dirt4", "Y"],
                [500, 1050, 50, 50, "dirt4", "Y"],
                [550, 850, 50, 50, "dirt1", "Y"], 
                [600, 850, 50, 50, "dirt3", "Y"],
                [600, 900, 50, 50, "dirt5", "Y"],
                [600, 950, 50, 50, "dirt5", "Y"],
                [600, 1000, 50, 50, "dirt10", "Y"],
                [650, 1000, 50, 50, "dirt1", "Y"],
                [700, 1000, 50, 50, "dirt1", "Y"],
                [1400, 1100, 50, 50, "dirt5", "Y"],
                [1400, 1150, 50, 50, "dirt5", "Y"],
                [1400, 1050, 50, 50, "dirt3", "Y"],
                [1250, 1050, 50, 50, "dirt10", "Y"],
                [1350, 1050, 50, 50, "dirt1", "Y"],
                [1300, 1050, 50, 50, "dirt1", "Y"], 
                [1250, 1000, 50, 50, "dirt5", "Y"],
                ///METAL///
                [0, 400, 50, 600, "gray", "Y"],
                [900, 550, 50, 250, "gray", "Y"],
                [950, 550, 150, 50, "gray", "Y"],
                [1050, 600, 50, 150, "gray", "Y"],
                [950, 700, 100, 50, "gray", "Y"],
                [200, 0, 50, 350, "gray", "Y"],
                [250, 300, 200, 50, "gray", "Y"],
                [400, 100, 50, 200, "gray", "Y"],
                ///INSIDEDIRT///
                [0, 150, 50, 250, "saddlebrown", "Y"],
                [100, 1000, 100, 50, "saddlebrown", "Y"],
                [150, 1050, 50, 50, "saddlebrown", "Y"],
                [250, 1150, 250, 50, "saddlebrown", "Y"],
                [550, 900, 50, 200, "saddlebrown", "Y"],
                [650, 1050, 150, 50, "saddlebrown", "Y"],
                [1350, 1100, 50, 100, "saddlebrown", "Y"], 
                [1300, 1100, 50, 50, "saddlebrown", "Y"],
                [1200, 950, 50, 100, "saddlebrown", "Y"],
                ///SPIKES///
                [250, 1050, 250, 50, "red", "K"],
                [650, 950, 250, 50, "red", "K"],
                ///BRICKS///

                ///LEDGE///
                [875, 550, 25, 10, "green", "L"],
            ],

            backgrounds: [

            ],
             
            enemys: [

            ],
            
            spawnpoint: 100,

            follow: false,
            PSF: 1.25,
            SW: 2000,
            SH: 1200,
        },
        2: {
            platforms: [
                //starting platform
                [10, canvas.height * 0.90, 1000, 10, "green", "Y"],
                [10, canvas.height * 0.91, 990, 82, "brown", "Y"],  
                [1000, canvas.height * 0.9, 10, canvas.height * 0.1, "green", "Y"],
                //back wall
                [-1020, 0, 1030, canvas.height, "green", "Y"],
                //first jump
                [1200, canvas.height * 0.8, 300, 70, "gray", "Y"],
                //second jump
                [1800, canvas.height * 0.7, 100, 400, "gray", "Y"],
                //third jump
                [2000, canvas.height * 0.9, 500, 200, "gray", "Y"],
                //fourth jump
                [2800, canvas.height * 0.9, 80, 50, "gray", "Y"],
                //fifth jump
                [3000, canvas.height * 0.7, 100, 50, "gray", "Y"],
                //sixth jump 
                [3300, canvas.height * 0.5, 100, 50, "gray", "Y"],
                //seventh jump 
                [3500, canvas.height * 0.9, 89, 50, "gray", "Y"],
                //first wall
                [3600, canvas.height * 0.7, 10, 400, "black", "Y"],
                //eigth jump
                [3700, canvas.height * 0.9, 100, 50, "gray", "Y"],
                //end platform
                [3800, canvas.height * 0.9, 500, 10, "green", "Y"],
                [3800, canvas.height * 0.91, 500, 82, "brown", "Y"],
                [3790, canvas.height * 0.9, 10, canvas.height * 0.1, "green", "Y"],
                // end wall
                [4300, 0, 1000, canvas.height, "green", "Y"],
                //exit
                [4200, canvas.height * 0.68, 100, 200, "#A1662F", "W"],  
            ],

            backgrounds: [

            ],

            enemys: [

            ]
        },

        3: {
            //x y width height color type
            platforms: [
                //starting platform 
                [10, canvas.height * 0.90, 1000, 10, "green", "Y"],
                [10, canvas.height * 0.91, 990, 82, "brown", "Y"],  
                [1000, canvas.height * 0.9, 10, canvas.height * 0.1, "green", "Y"],
                //back wall
                [-1020, 0, 1030, canvas.height, "green", "Y"],
                //first jump
                [1200, canvas.height * 0.8, 1000, 70, "gray", "Y"],
                //second jump 
                [2500, canvas.height * 0.7, 100, 50, "gray", "Y"],
                //third jump
                [3000, canvas.height * 0.9, 200, 200, "gray", "Y"],
                //first wall 
                [3300, canvas.height * 0.7, 10, 400, "gray", "Y"],
                //fourth jump
                [3500, canvas.height * 0.8, 100, 50, "gray", "Y"],
            ],

            backgrounds: [

            ],
            //x y type health damage anim velx vely
            enemys: [
                [1300, canvas.height * 0.6, "zombieThree", 2, 1, "idle1", 0, 0, null, false],
            ],
            //startx, endx
            paths: [
                [1300, 2200],
            ]
        }
    }
    return data[num]
}