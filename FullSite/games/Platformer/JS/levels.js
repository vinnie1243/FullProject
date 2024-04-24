function level(num) {
    var canvas = document.getElementById("playarea")
    //x, y, width, height, color
    var data = {
        //level 1
        1: {
            platforms: [
                //saddlebrown = inside dirt
                //lightgray = snow
                //gray = metal
                //darkgray = halfsnow
                //peru = outside dirt
                //red = spikes
                //darkslategray = brick
                ///VOID///
                [0, 0, 50, 100, "black", "Y", "void"],
                [50, 0, 50, 50, "black", "Y", "void"],
                [0, 1000, 50, 200, "black", "Y", "void"],
                [150, 1100, 50, 50, "black", "Y", "void"],
                [150, 1150, 100, 50, "black", "Y", "void"],
                [50, 1050, 100, 150, "black", "Y", "void"],
                [600, 1050, 50, 50, "black", "Y", "void"],
                [500, 1150, 850, 50, "black", "Y", "void"],
                [550, 1100, 750, 50, "black", "Y", "void"],
                [900, 1050, 350, 50, "black", "Y", "void"],
                ///HALFSNOW///
                [100, 0, 100, 50, "darkgray", "Y", "halfSnow"],
                [0, 100, 50, 50, "darkgray", "Y", "halfSnow"],
                [50, 1000, 50, 50, "darkgray", "Y", "halfSnow"],
                [800, 1050, 100, 50, "darkgray", "Y", "halfSnow"],
                ///SNOW///
                [50, 50, 150, 50, "lightgray", "Y", "snow"],
                [50, 950, 100, 50, "lightgray", "Y", "snow"],
                [750, 1000, 200, 50, "lightgray", "Y", "snow"],
                [900, 800, 50, 200, "lightgray", "Y", "snow"],
                [1000, 750, 100, 100, "lightgray", "Y", "snow"],  
                [1050, 850, 250, 50, "lightgray", "Y", "snow"],
                [950, 800, 50, 50, "lightgray", "Y", "snow"],
                ///OUTSIDEDIRT///
                [50, 100, 50, 350, "peru", "Y", "outsideDirt"],
                [150, 950, 100, 50, "peru", "Y", "outsideDirt"],
                [200, 1000, 50, 150, "peru", "Y", "outsideDirt"],
                [250, 1100, 300, 50, "peru", "Y", "outsideDirt"],
                [500, 850, 50, 250, "peru", "Y", "outsideDirt"],
                [550, 850, 100, 50, "peru", "Y", "outsideDirt"], 
                [600, 900, 50, 150, "peru", "Y", "outsideDirt"],
                [650, 1000, 100, 50, "peru", "Y", "outsideDirt"],
                [1400, 1050, 50, 150, "peru", "Y", "outsideDirt"],
                [1250, 1050, 150, 50, "peru", "Y", "outsideDirt"], 
                [1250, 1000, 50, 50, "peru", "Y", "outsideDirt"],
                ///METAL///
                [0, 400, 50, 600, "gray", "Y", "metal"],
                [900, 550, 50, 250, "gray", "Y", "metal"],
                [950, 550, 150, 50, "gray", "Y", "metal"],
                [1050, 600, 50, 150, "gray", "Y", "metal"],
                [950, 700, 100, 50, "gray", "Y", "metal"],
                ///INSIDEDIRT///
                [0, 150, 50, 250, "saddlebrown", "Y", "insideDirt"],
                [100, 1000, 100, 50, "saddlebrown", "Y", "insideDirt"],
                [150, 1050, 50, 50, "saddlebrown", "Y", "insideDirt"],
                [250, 1150, 250, 50, "saddlebrown", "Y", "insideDirt"],
                [550, 900, 50, 200, "saddlebrown", "Y", "insideDirt"],
                [650, 1050, 150, 50, "saddlebrown", "Y", "insideDirt"],
                [1350, 1100, 50, 100, "saddlebrown", "Y", "insideDirt"], 
                [1300, 1100, 50, 50, "saddlebrown", "Y", "insideDirt"],
                ///SPIKES///
                [250, 1050, 250, 50, "red", "K", "spikes"],
                ///BRICKS///
            ],

            backgrounds: [

            ],
             
            enemys: [

            ],
            
            spawnpoint: 100,

            follow: false,

            SFW: 2000,
            SFH: 1200,
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