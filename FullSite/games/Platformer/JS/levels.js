function level(num) {
    var canvas = document.getElementById("playarea")
    //x, y, width, height, color
    var data = {
        //level 1
        1: {
            platforms: [
                //Starting platform floor   
                [10, canvas.height * 0.90, 1000, 10, "green", "Y"],
                [10, canvas.height * 0.91, 990, 82, "brown", "Y"],  
                [1000, canvas.height * 0.9, 10, canvas.height * 0.1, "green", "Y"],
                //Back wall
                [-1020, 0, 1030, canvas.height, "green", "Y"],
                //first Jump
                [1200, canvas.height * 0.9, 300, 70, "gray", "Y"],
                //second jump
                [1800, canvas.height * 0.9, 300, 70, "gray", "Y"],
                //third jump
                [2400, canvas.height * 0.9, 300, 70, "gray", "Y"],
                //end platform
                [3000, canvas.height * 0.9, 500, 10, "green", "Y"],
                [3000, canvas.height * 0.91, 500, 82, "brown", "Y"],
                [2990, canvas.height * 0.9, 10, canvas.height * 0.1, "green", "Y"],
                //end wall
                [3500, 0, 1000, canvas.height, "green", "Y"],
                //exit 
                [3400, canvas.height * 0.68, 100, 200, "black", "W"],
            ],

            backgrounds: [

            ],
             
            enemys: []
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
            ],

            backgrounds: [

            ],
            //x y type health damage anim velx vely
            enemys: [
                [1300, canvas.height * 0.6, "zombieThree", 5, 1, "idle1", 0, 0, null, false],
            ],
            //startx, endx
            paths: [
                [1300, 2200],
            ]
        }
    }
    return data[num]
}