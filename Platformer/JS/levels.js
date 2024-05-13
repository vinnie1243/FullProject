function level(num) {
    var canvas = document.getElementById("playarea")
    //x, y, width, height, color
    var data = {
        //level 1
        1: {
            platformsTexOn: [
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
                [0, 950, 50, 200, "black", "N"], 
                [150, 1050, 50, 50, "black", "N"], 
                [150, 1100, 100, 50, "black", "N"], 
                [50, 1000, 100, 150, "black", "N"], 
                [600, 1000, 50, 50, "black", "N"], 
                [500, 1100, 850, 50, "black", "N"], 
                [550, 1050, 750, 50, "black", "N"], 
                [900, 1000, 350, 50, "black", "N"], 
                [700, 0, 200, 50, "black", "N"],
                [1950, 0, 50, 900, "black", "N"],
                [750, 50, 50, 50, "black", "N"],
                [950, 950, 250, 50, "black", "N"],
                [1000, 900, 200, 50, "black", "N"],
                [1000, 800, 50, 100, "black", "N"], 
                [1050, 850, 50, 50, "black", "N"],
                [1900, 0, 50, 800, "black", "N"],
                [1850, 0, 50, 600, "black", "N"],
                [1800, 200, 50, 50, "black", "N"],
                [1800, 350, 50, 200, "black", "N"],
                [1750, 400, 50, 100, "black", "N"],
                ///HALFSNOW///
                [100, 0, 100, 50, "darkgray", "Y"], 
                [0, 100, 50, 50, "darkgray", "Y"], 
                [50, 950, 50, 50, "darkgray", "Y"], 
                [800, 1000, 100, 50, "darkgray", "Y"], 
                [950, 800, 50, 150, "darkgray", "Y"], 
                [1100, 850, 150, 50, "darkgray", "Y"], 
                [350, 0, 50, 50, "darkgray", "Y"],
                [700, 50, 50, 50, "darkgray", "Y"],
                [1800, 150, 50, 50, "darkgray", "Y"],
                [1800, 250, 50, 100, "darkgray", "Y"],
                [1550, 400, 200, 50, "darkgray", "Y"],
                [1750, 500, 50, 50, "darkgray", "Y"],
                [1850, 600, 50, 50, "darkgray", "Y"],
                ///SNOW///
                [50, 50, 150, 50, "lightgray", "Y"], 
                [50, 900, 50, 50, "snow1", "Y"], 
                [100, 900, 50, 50, "snow1", "Y"], 
                [750, 950, 50, 50, "snow1", "Y"], 
                [800, 950, 50, 50, "snow1", "Y"], 
                [850, 950, 50, 50, "snow1", "Y"], 
                [900, 950, 50, 50, "lightgray", "Y"], 
                [900, 750, 50, 200, "lightgray", "Y"], 
                [1000, 700, 100, 100, "lightgray", "Y"], 
                [1050, 800, 250, 50, "lightgray", "Y"], 
                [950, 750, 50, 50, "lightgray", "Y"], 
                [1250, 850, 50, 100, "lightgray", "Y"], 
                [400, 0, 50, 100, "lightgray", "Y"],
                [450, 0, 250, 50, "lightgray", "Y"],
                [250, 0, 100, 50, "lightgray", "Y"],
                [300, 50, 100, 50, "lightgray", "Y"],
                [650, 50, 50, 50, "lightgray", "Y"],
                [1800, 550, 50, 200, "lightgray", "Y"], 
                [1700, 550, 100, 50, "lightgray", "Y"],  
                [1700, 450, 50, 100, "lightgray", "Y"], 
                //[1500, 450, 150, 50, "orange", "Y"], 
                [1500, 400, 50, 50, "lightgray", "Y"], 
                [1500, 450, 200, 50, "lightgray", "Y"], 
                [1500, 350, 300, 50, "lightgray", "Y"], 
                [1750, 100, 50, 250, "lightgray", "Y"],
                [1800, 100, 50, 50, "lightgray", "Y"],
                [1700, 200, 50, 50, "lightgray", "Y"],
                ///OUTSIDEDIRT///
                [50, 400, 50, 50, "dirt8", "Y"],
                [50, 350, 50, 50, "dirt5", "Y"],
                [50, 300, 50, 50, "dirt5", "Y"],
                [50, 250, 50, 50, "dirt5", "Y"],
                [50, 200, 50, 50, "dirt5", "Y"],
                [50, 150, 50, 50, "dirt5", "Y"],
                [50, 100, 50, 50, "dirt5", "Y"],
                [150, 900, 50, 50, "dirt1", "Y"], 
                [200, 900, 50, 50, "dirt3", "Y"],
                [200, 950, 50, 50, "dirt5", "Y"],
                [200, 1000, 50, 50, "dirt5", "Y"],
                [200, 1050, 50, 50, "dirt10", "Y"], 
                [250, 1050, 50, 50, "dirt1", "Y"], 
                [300, 1050, 50, 50, "dirt1", "Y"], 
                [350, 1050, 50, 50, "dirt1", "Y"], 
                [400, 1050, 50, 50, "dirt1", "Y"], 
                [450, 1050, 50, 50, "dirt1", "Y"], 
                [500, 1050, 50, 50, "dirt9", "Y"], 
                [500, 800, 50, 50, "dirt2", "Y"],
                [500, 850, 50, 50, "dirt4", "Y"], 
                [500, 900, 50, 50, "dirt4", "Y"], 
                [500, 950, 50, 50, "dirt4", "Y"], 
                [500, 1000, 50, 50, "dirt4", "Y"], 
                [550, 800, 50, 50, "dirt1", "Y"], 
                [600, 800, 50, 50, "dirt3", "Y"], 
                [600, 850, 50, 50, "dirt5", "Y"], 
                [600, 900, 50, 50, "dirt5", "Y"], 
                [600, 950, 50, 50, "dirt10", "Y"], 
                [650, 950, 50, 50, "dirt1", "Y"], 
                [700, 950, 50, 50, "dirt1", "Y"], 
                [1400, 1050, 50, 50, "dirt5", "Y"], 
                [1400, 1100, 50, 50, "dirt5", "Y"], 
                [1400, 1000, 50, 50, "dirt3", "Y"], 
                [1250, 1000, 50, 50, "dirt10", "Y"], 
                [1300, 1000, 50, 50, "dirt1", "Y"], 
                [1350, 1000, 50, 50, "dirt1", "Y"], 
                [1250, 950, 50, 50, "dirt5", "Y"], 
                [1100, 0, 150, 50, "peru", "Y"],
                [650, 100, 50, 200, "peru", "Y"],
                [700, 250, 50, 50, "peru", "Y"],
                [750, 100, 50, 200, "peru", "Y"],
                [800, 100, 100, 50, "peru", "Y"],
                [850, 50, 200, 50, "peru", "Y"],
                [1950, 900, 50, 250, "peru", "Y"], 
                [1900, 850, 50, 100, "peru","Y"], 
                [1850, 750, 50, 150, "peru", "Y"], 
                [1800, 750, 50, 50, "peru", "Y"], 
                ///METAL///
                [0, 400, 50, 550, "gray", "Y"], 
                [900, 500, 50, 250, "gray", "Y"], 
                [950, 500, 150, 50, "gray", "Y"], 
                [1050, 550, 50, 150, "gray", "Y"], 
                [950, 650, 100, 50, "gray", "Y"], 
                [200, 0, 50, 350, "gray", "Y"],
                [250, 300, 200, 50, "gray", "Y"],
                [400, 100, 50, 200, "gray", "Y"],
                [1050, 0, 50, 200, "gray", "Y"],
                [250, 150, 100, 50, "gray", "Y"],
                ///INSIDEDIRT///
                [0, 150, 50, 250, "saddlebrown", "Y"], 
                [100, 950, 100, 50, "saddlebrown", "Y"], 
                [150, 1000, 50, 50, "saddlebrown", "Y"], 
                [250, 1100, 250, 50, "saddlebrown", "Y"], 
                [550, 850, 50, 200, "saddlebrown", "Y"],  
                [650, 1000, 150, 50, "saddlebrown", "Y"], 
                [1350, 1050, 50, 100, "saddlebrown", "Y"], 
                [1300, 1050, 50, 50, "saddlebrown", "Y"], 
                [1200, 900, 50, 100, "saddlebrown", "Y"], 
                [900, 0, 150, 50, "saddlebrown", "Y"],
                [700, 100, 50, 150, "saddlebrown", "Y"],
                [800, 50, 50, 50, "saddlebrown", "Y"],
                [1850, 650, 50, 100, "saddlebrown", "Y"],
                [1900, 800, 50, 50, "saddlebrown", "Y"],
                ///SPIKES///
                [250, 1000, 50, 50, "spike1", "K"],
                [300, 1000, 50, 50, "spike1", "K"],
                [350, 1000, 50, 50, "spike1", "K"],
                [400, 1000, 50, 50, "spike1", "K"],
                [450, 1000, 50, 50, "spike1", "K"],
                [650, 900, 250, 50, "red", "K"], 
                [1100, 750, 200, 50, "red", "K"], 
                [1300, 950, 150, 50, "red", "K"], 
                ///BRICKS///
                [1250, 0, 300, 50, "darkslategray", "Y"],
                [1800, 0, 50, 100, "darkslategray", "Y"],
                ///LEDGE///
                [1475, 350, 25, 10, "green", "L", "right"],
                [875, 500, 25, 10, "green", "L", "right"], // done
                ///VOIDOUT///
                [1450, 1100, 500, 50, "ghostwhite", "V"], 
                ///WIN///
                [1550, 0, 250, 50, "azure", "W"],
                ///TESTING///l
            ],

            platformsTexOff: [

            ],

            backgrounds: [

            ],
             
            enemys: [

            ],
            
            spawnpoint: 100,

            follow: false,
            PSF: 1.25,
            SW: 2000,
            SH: 1150,
        },
        2: {
            //saddlebrown = inside dirt 
            //lightgray = snow
            //slategray = metal 
            //darkgray = halfsnow 
            //peru = outside dirt
            //red = spikes 
            //dimgray = brick
            //green = ledge
            //brown = wooden platform
            //azure = win
            //ghostwhite = voidout
            //black = void
            //gray = half brick
            //#ADA587 = stone
            platformsTexOn: [
                [0, 0, 100, 200, "#54587B", "N"],
                [100, 0, 50, 50, "#54587B", "N"],
                [1000, 0, 250, 50, "#54587B", "N"],
                [1300, 0, 300, 50, "#54587B", "N"], 
                [0, 200, 50, 200, "#54587B", "N"],
                [0, 500, 50, 50, "#54587B", "N"],
                [50, 250, 50, 50, "#54587B", "N"],
                [350, 1100, 150, 50, "#54587B", "N"],  
                [1950, 750, 50, 100, "#54587B", "N"],  
                [1700, 850, 300, 300, "#54587B", "N"],
                [1900, 800, 50, 50, "#54587B", "N"],
                [1500, 1000, 200, 150, "#54587B", "N"],
                [1450, 1050, 50, 100, "#54587B", "N"],
                [1400, 1100, 50, 50, "#54587B", "N"],
                [1650, 900, 50, 100, "#54587B", "N"],
                [1550, 950, 100, 50, "#54587B", "N"],
                [1150, 1100, 150, 50, "#54587B", "N"],
                [1150, 1050, 50, 50, "#54587B", "N"],
                [1100, 950, 50, 50, "#54587B", "N"],
                [1050, 50, 100, 150, "#54587B", "N"],
                [1150, 50, 50, 50, "#54587B", "N"],
                [1100, 200, 50, 50, "#54587B", "N"],
                [1450, 50, 50, 50, "#54587B", "N"],
                [1500, 50, 100, 150, "#54587B", "N"],
                [1600, 50, 50, 50, "#54587B", "N"],
                ///HALFSNOW///
                [400, 1050, 50, 50, "halfsnow1", "Y"],
                [450, 1050, 50, 50, "halfsnow1", "Y"], 
                [500, 1050, 50, 50, "halfsnow1", "Y"],
                [500, 1100, 50, 50, "halfsnow1", "Y"],
                [1950, 700, 50, 50, "halfsnow1", "Y"],
                [1950, 650, 50, 50, "halfsnow1", "Y"],
                [1950, 600, 50, 50, "halfsnow1", "Y"],
                [1950, 550, 50, 50, "halfsnow1", "Y"],
                [1950, 500, 50, 50, "halfsnow1", "Y"],
                [1650, 800, 50, 50, "halfsnow1", "Y"],
                [1700, 800, 50, 50, "halfsnow1", "Y"],
                [1750, 800, 50, 50, "halfsnow1", "Y"],
                [1800, 800, 50, 50, "halfsnow1", "Y"],
                [1850, 800, 50, 50, "halfsnow1", "Y"],  
                [1650, 850, 50, 50, "halfsnow1", "Y"],
                [1100, 750, 50, 50, "halfsnow1", "Y"],
                [1100, 800, 50, 50, "halfsnow1", "Y"],
                [1100, 850, 50, 50, "halfsnow1", "Y"],
                [1050, 750, 50, 50, "halfsnow1", "Y"],
                [1150, 100, 50, 50, "halfsnow1", "Y"],
                [1150, 150, 50, 50, "halfsnow1", "Y"],
                [1150, 200, 50, 50, "halfsnow1", "Y"],
                [1100, 250, 50, 50, "halfsnow1", "Y"],
                [1100, 300, 50, 50, "halfsnow1", "Y"],
                [1100, 350, 50, 50, "halfsnow1", "Y"],
                ///SNOW///
                [350, 1000, 50, 50, "snow1", "Y"],
                [400, 1000, 50, 50, "snow1", "Y"],
                [450, 1000, 50, 50, "snow1", "Y"],
                [500, 1000, 50, 50, "snow1", "Y"],
                [550, 1000, 50, 50, "snow9", "Y"],
                [1900, 450, 50, 50, "snow2", "Y"],
                [1900, 500, 50, 50, "snow2", "Y"],
                [1900, 550, 50, 50, "snow2", "Y"],
                [1900, 600, 50, 50, "snow2", "Y"],
                [1900, 650, 50, 50, "snow2", "Y"],
                [1900, 700, 50, 50, "snow2", "Y"],
                [1900, 750, 50, 50, "snow4", "Y"],
                [1600, 750, 50, 50, "snow5", "Y"],
                [1650, 750, 50, 50, "snow1", "Y"],
                [1700, 750, 50, 50, "snow1", "Y"], 
                [1750, 750, 50, 50, "snow1", "Y"],
                [1800, 750, 50, 50, "snow1", "Y"],
                [1850, 750, 50, 50, "snow1", "Y"],
                [1600, 800, 50, 50, "snow2", "Y"],
                [1600, 850, 50, 50, "snow2", "Y"],
                [1600, 900, 50, 50, "snow4", "Y"],
                [1500, 900, 50, 50, "snow1", "Y"],
                [1550, 900, 50, 50, "snow1", "Y"],
                [1150, 750, 50, 50, "snow6", "Y"],
                [1150, 800, 50, 50, "snow7", "Y"],
                [1200, 700, 50, 50, "snow9", "Y"],
                [1200, 750, 50, 50, "snow8", "Y"],
                [1000, 700, 50, 50, "snow5", "Y"],
                [1050, 700, 50, 50, "snow1", "Y"],
                [1100, 700, 50, 50, "snow1", "Y"],
                [1150, 700, 50, 50, "snow1", "Y"],
                [1000, 750, 50, 50, "snow2", "Y"],
                [1000, 800, 50, 50, "snow10", "Y"],
                [1050, 800, 50, 50, "snow11", "Y"],
                [1050, 850, 50, 50, "snow2", "Y"],
                [1050, 900, 50, 50, "snow2", "Y"],
                [1050, 950, 50, 50, "snow2", "Y"],
                [1050, 1000, 50, 50, "snow2", "Y"],
                [1000, 200, 50, 50, "snow10", "Y"],
                [1050, 200, 50, 50, "snow11", "Y"],
                [1050, 250, 50, 50, "snow2", "Y"],
                [1050, 300, 50, 50, "snow2", "Y"],
                [1050, 350, 50, 50, "snow2", "Y"],
                [1050, 400, 50, 50, "snow10", "Y"],
                [1100, 400, 50, 50, "snow12", "Y"],
                [1150, 400, 50, 50, "snow8", "Y"],
                [1150, 250, 50, 50, "snow6", "Y"],
                [1150, 300, 50, 50, "snow7", "Y"],
                [1150, 350, 50, 50, "snow7", "Y"],
                [1200, 50, 50, 50, "snow6", "Y"],
                [1200, 100, 50, 50, "snow7", "Y"],
                [1200, 150, 50, 50, "snow7", "Y"],
                [1200, 200, 50, 50, "snow7", "Y"],
                [1200, 250, 50, 50, "snow8", "Y"],
                [550, 1050, 50, 50, "snow7", "Y"],
                [550, 1100, 50, 50, "snow7", "Y"],
                ///BRICK///
                [250, 0, 50, 50, "brick", "Y"],
                [300, 0, 50, 50, "brick", "Y"],
                [350, 0, 50, 50, "brick", "Y"],
                [400, 0, 50, 50, "brick", "Y"],
                [450, 0, 50, 50, "brick", "Y"],
                [500, 0, 50, 50, "brick", "Y"],
                [550, 0, 50, 50, "brick", "Y"],
                [600, 0, 50, 50, "brick", "Y"],
                [650, 0, 50, 50, "brick", "Y"],
                [750, 0, 50, 50, "brick", "Y"],
                [800, 0, 50, 50, "brick", "Y"],
                [1900, 0, 50, 50, "brick", "Y"],
                [1900, 50, 50, 50, "brick", "Y"],
                [1900, 100, 50, 50, "brick", "Y"],
                [1900, 150, 50, 50, "brick", "Y"],
                [1900, 200, 50, 50, "brick", "Y"],
                [1900, 250, 50, 50, "brick", "Y"],
                [1900, 300, 50, 50, "brick", "Y"],
                [1900, 350, 50, 50, "brick", "Y"],
                [1900, 400, 50, 50, "brick", "Y"],
                [0, 550, 50, 50, "brick", "Y"],
                [0, 600, 50, 50, "brick", "Y"],
                [0, 650, 50, 50, "brick", "Y"],
                [0, 700, 50, 50, "brick", "Y"],
                [0, 750, 50, 50, "brick", "Y"],
                [0, 800, 50, 50, "brick", "Y"],
                [0, 850, 50, 50, "brick", "Y"],
                [0, 900, 50, 50, "brick", "Y"],
                [0, 950, 50, 50, "brick", "Y"],
                [0, 1000, 50, 50, "brick", "Y"],
                [0, 1050, 50, 50, "brick", "Y"],
                [0, 1100, 50, 50, "brick", "Y"],
                [100, 50, 50, 50, "brick", "Y"],
                [150, 50, 50, 50, "brick", "Y"],
                [200, 50, 50, 50, "brick", "Y"],
                [250, 50, 50, 50, "brick", "Y"],
                [50, 350, 50, 50, "brick", "Y"],
                [50, 400, 50, 50, "brick", "Y"],
                [50, 450, 50, 50, "brick", "Y"],
                [50, 500, 50, 50, "brick", "Y"],
                [50, 550, 50, 50, "brick", "Y"],
                [300, 1000, 50, 50, "brick", "Y"],
                [300, 1050, 50, 50, "brick", "Y"],
                [300, 1100, 50, 50, "brick", "Y"],
                [450, 50, 50, 50, "brick", "Y"],
                [450, 100, 50, 50, "brick", "Y"],
                [450, 150, 50, 50, "brick", "Y"],
                [800, 50, 50, 50, "brick", "Y"],
                [850, 50, 50, 50, "brick", "Y"],
                [900, 50, 50, 50, "brick", "Y"],
                [950, 50, 50, 50, "brick", "Y"],
                [1000, 50, 50, 50, "brick", "Y"],
                [1000, 100, 50, 50, "brick", "Y"],
                [1000, 150, 50, 50, "brick", "Y"],
                [1400, 900, 50, 50, "brick", "Y"],
                [1450, 900, 50, 50, "brick", "Y"],
                [1400, 950, 50, 50, "brick", "Y"],
                [1400, 1000, 50, 50, "brick", "Y"],
                [1400, 1050, 50, 50, "brick", "Y"],
                [1250, 1050, 50, 50, "brick", "Y"],
                [1300, 1050, 50, 50, "brick", "Y"],
                [1350, 1050, 50, 50, "brick", "Y"],
                [1150, 1000, 50, 50, "brick", "Y"],
                [1200, 1000, 50, 50, "brick", "Y"],
                [1250, 1000, 50, 50, "brick", "Y"],
                [1150, 850, 50, 50, "brick", "Y"],
                [1150, 900, 50, 50, "brick", "Y"],
                [1150, 950, 50, 50, "brick", "Y"],
                [1050, 1050, 50, 50, "brick", "Y"],
                [1050, 1100, 50, 50, "brick", "Y"],
                [1250, 50, 50, 50, "brick", "Y"],
                [1300, 50, 50, 50, "brick", "Y"],
                [1350, 50, 50, 50, "brick", "Y"],
                [1350, 100, 50, 50, "brick", "Y"],
                [1400, 100, 50, 50, "brick", "Y"],
                [1450, 100, 50, 50, "brick", "Y"],
                [1450, 150, 50, 50, "brick", "Y"],
                [1450, 200, 50, 50, "brick", "Y"],
                [1450, 250, 50, 50, "brick", "Y"],
                [1500, 250, 50, 50, "brick", "Y"],
                [1550, 250, 50, 50, "brick", "Y"],
                [1600, 250, 50, 50, "brick", "Y"],
                [1600, 300, 50, 50, "brick", "Y"],
                [1600, 350, 50, 50, "brick", "Y"],
                [1600, 400, 50, 50, "brick", "Y"],
                [1600, 450, 50, 50, "brick", "Y"],
                ///HALFBRICK///
                [150, 0, 50, 50, "halfbrick", "Y"],
                [200, 0, 50, 50, "halfbrick", "Y"],
                [850, 0, 50, 50, "halfbrick", "Y"],
                [900, 0, 50, 50, "halfbrick", "Y"],
                [950, 0, 50, 50, "halfbrick", "Y"],
                [1600, 0, 50, 50, "halfbrick", "Y"],
                [1950, 0, 50, 50, "halfbrick", "Y"],
                [1950, 50, 50, 50, "halfbrick", "Y"],
                [1950, 100, 50, 50, "halfbrick", "Y"],
                [1950, 150, 50, 50, "halfbrick", "Y"],
                [1950, 200, 50, 50, "halfbrick", "Y"],
                [1950, 250, 50, 50, "halfbrick", "Y"],
                [1950, 300, 50, 50, "halfbrick", "Y"],
                [1950, 350, 50, 50, "halfbrick", "Y"],
                [1950, 400, 50, 50, "halfbrick", "Y"],
                [1950, 450, 50, 50, "halfbrick", "Y"],
                [0, 400, 50, 50, "halfbrick", "Y"],
                [0, 450, 50, 50, "halfbrick", "Y"],
                [50, 200, 50, 50, "halfbrick", "Y"],
                [50, 300, 50, 50, "halfbrick", "Y"],
                [350, 1050, 50, 50, "halfbrick", "Y"], 
                [1450, 950, 50, 50, "halfbrick", "Y"],
                [1450, 1000, 50, 50, "halfbrick", "Y"],
                [1500, 950, 50, 50, "halfbrick", "Y"],
                [1300, 1100, 50, 50, "halfbrick", "Y"],
                [1350, 1100, 50, 50, "halfbrick", "Y"],
                [1200, 1050, 50, 50, "halfbrick", "Y"],
                [1100, 1000, 50, 50, "halfbrick", "Y"],
                [1100, 1050, 50, 50, "halfbrick", "Y"],
                [1100, 1100, 50, 50, "halfbrick", "Y"],
                [1400, 50, 50, 50, "halfbrick", "Y"],
                [1500, 200, 50, 50, "halfbrick", "Y"],
                [1550, 200, 50, 50, "halfbrick", "Y"],
                [1600, 200, 50, 50, "halfbrick", "Y"],
                [1600, 100, 50, 50, "halfbrick", "Y"],
                [1600, 150, 50, 50, "halfbrick", "Y"],
                ///METAL///
                [700, 0, 50, 50, "metal", "Y"],
                [700, 50, 50, 50, "metal", "Y"],
                [700, 100, 50, 50, "metal", "Y"],
                [700, 150, 50, 50, "metal", "Y"],
                [700, 200, 50, 50, "metal", "Y"],
                [1650, 0, 50, 50, "metal", "Y"],
                [1650, 50, 50, 50, "metal", "Y"],
                [1650, 100, 50, 50, "metal", "Y"],
                [1650, 150, 50, 50, "metal", "Y"],
                [1650, 200, 50, 50, "metal", "Y"],
                [1650, 250, 50, 50, "metal", "Y"],
                [1650, 300, 50, 50, "metal", "Y"],
                [1650, 350, 50, 50, "metal", "Y"],
                [1650, 400, 50, 50, "metal", "Y"],
                [1650, 450, 50, 50, "metal", "Y"],
                [1650, 500, 50, 50, "metal", "Y"],
                [1650, 550, 50, 50, "metal", "Y"],
                [100, 100, 50, 50, "metal", "Y"],
                [100, 150, 50, 50, "metal", "Y"],
                [100, 200, 50, 50, "metal", "Y"],
                [100, 250, 50, 50, "metal", "Y"],
                [100, 300, 50, 50, "metal", "Y"],
                [100, 350, 50, 50, "metal", "Y"],
                [150, 150, 50, 50, "metal", "Y"],
                [200, 150, 50, 50, "metal", "Y"],
                [250, 150, 50, 50, "metal", "Y"],
                [300, 150, 50, 50, "metal", "Y"],
                [350, 150, 50, 50, "metal", "Y"],
                [150, 250, 50, 50, "metal", "Y"],
                [200, 250, 50, 50, "metal", "Y"],
                [250, 250, 50, 50, "metal", "Y"],
                [300, 250, 50, 50, "metal", "Y"],
                [350, 250, 50, 50, "metal", "Y"],
                [150, 350, 50, 50, "metal", "Y"],
                [200, 350, 50, 50, "metal", "Y"],
                [250, 350, 50, 50, "metal", "Y"],
                [300, 350, 50, 50, "metal", "Y"],
                [350, 350, 50, 50, "metal", "Y"],
                [400, 50, 50, 50, "metal", "Y"],
                [400, 100, 50, 50, "metal", "Y"],
                [400, 150, 50, 50, "metal", "Y"],
                [400, 200, 50, 50, "metal", "Y"],
                [400, 250, 50, 50, "metal", "Y"],
                [400, 300, 50, 50, "metal", "Y"],
                [400, 350, 50, 50, "metal", "Y"],
                [600, 1000, 50, 50, "metal", "Y"],
                [650, 1000, 50, 50, "metal", "Y"],
                [700, 900, 50, 50, "metal", "Y"],
                [750, 900, 50, 50, "metal", "Y"],
                [700, 950, 50, 50, "metal", "Y"],
                [750, 950, 50, 50, "metal", "Y"],
                [700, 1000, 50, 50, "metal", "Y"],
                [750, 1000, 50, 50, "metal", "Y"],
                [700, 1050, 50, 50, "metal", "Y"],
                [750, 1050, 50, 50, "metal", "Y"],
                [700, 1100, 50, 50, "metal", "Y"],
                [750, 1100, 50, 50, "metal", "Y"],
                ///SPIKES///
                [1000, 650, 50, 50, "spike1", "K"],
                [1050, 650, 50, 50, "spike1", "K"],
                [1100, 650, 50, 50, "spike1", "K"],
                [1150, 650, 50, 50, "spike1", "K"],
                [1200, 650, 50, 50, "spike1", "K"],
                [1200, 950, 50, 50, "spike1", "K"],
                [1250, 950, 50, 50, "spike1", "K"],
                [1300, 1000, 50, 50, "spike1", "K"],
                [1350, 1000, 50, 50, "spike1", "K"],
                ///WOODENPLATFORM///
                [50, 1000, 250, 25, "brown", "Y"],
                ///VOIDOUT///
                ///WIN///
                ///STONE///
                [1250, 0, 50, 50, "stone", "Y"],
                [1100, 900, 50, 50, "stone", "Y"],
            ],
            platformsTexOff: [
                ///VOID///
                [0, 0, 100, 200, "black", "N"],
                [100, 0, 50, 50, "black", "N"],
                [1000, 0, 250, 50, "black", "N"],
                [1300, 0, 300, 50, "black", "N"], 
                [0, 200, 50, 200, "black", "N"],
                [0, 500, 50, 50, "black", "N"],
                [50, 250, 50, 50, "black", "N"],
                [350, 1100, 150, 50, "black", "N"],  
                [1950, 750, 50, 100, "black", "N"],  
                [1700, 850, 300, 300, "black", "N"],
                [1900, 800, 50, 50, "black", "N"],
                [1500, 1000, 200, 150, "black", "N"],
                [1450, 1050, 50, 100, "black", "N"],
                [1400, 1100, 50, 50, "black", "N"],
                [1650, 900, 50, 100, "black", "N"],
                [1550, 950, 100, 50, "black", "N"],
                [1150, 1100, 150, 50, "black", "N"],
                [1150, 1050, 50, 50, "black", "N"],
                [1100, 950, 50, 50, "black", "N"],
                [1050, 50, 100, 150, "black", "N"],
                [1150, 50, 50, 50, "black", "N"],
                [1100, 200, 50, 50, "black", "N"],
                [1450, 50, 50, 50, "black", "N"],
                [1500, 50, 100, 150, "black", "N"],
                [1600, 50, 50, 50, "black", "N"],
                ///HALFSNOW///
                [400, 1050, 150, 50, "darkgray", "Y"],
                [500, 1100, 50, 50, "darkgray", "Y"],
                [1950, 500, 50, 250, "darkgray", "Y"],
                [1650, 800, 250, 50, "darkgray", "Y"],  
                [1650, 850, 50, 50, "darkgray", "Y"],
                [1100, 750, 50, 150, "darkgray", "Y"],
                [1050, 750, 50, 50, "darkgray", "Y"],
                [1150, 100, 50, 150, "darkgray", "Y"],
                [1100, 250, 50, 150, "darkgray", "Y"],
                ///SNOW///
                [350, 1000, 250, 50, "lightgray", "Y"],
                [1900, 450, 50, 350, "lightgray", "Y"],
                [1600, 750, 300, 50, "lightgray", "Y"],
                [1600, 800, 50, 150, "lightgray", "Y"],
                [1500, 900, 100, 50, "lightgray", "Y"],
                [1150, 750, 50, 100, "lightgray", "Y"],
                [1200, 700, 50, 100, "lightgray", "Y"],
                [1000, 700, 200, 50, "lightgray", "Y"],
                [1000, 750, 50, 100, "lightgray", "Y"],
                [1050, 800, 50, 250, "lightgray", "Y"],
                [1000, 200, 100, 50, "lightgray", "Y"],
                [1050, 250, 50, 200, "lightgray", "Y"],
                [1100, 400, 100, 50, "lightgray", "Y"],
                [1150, 250, 50, 150, "lightgray", "Y"],
                [1200, 50, 50, 250, "lightgray", "Y"],
                [550, 1050, 50, 100, "lightgray", "Y"],
                ///BRICK///
                [250, 0, 450, 50, "dimgray", "Y"],
                [750, 0, 100, 50, "dimgray", "Y"],
                [1900, 0, 50, 450, "dimgray", "Y"],
                [0, 550, 50, 600, "dimgray", "Y"],
                [100, 50, 200, 50, "dimgray", "Y"],
                [50, 350, 50, 250, "dimgray", "Y"],
                [300, 1000, 50, 150, "dimgray", "Y"],
                [450, 50, 50, 150, "dimgray", "Y"],
                [800, 50, 250, 50, "dimgray", "Y"],
                [1000, 100, 50, 100, "dimgray", "Y"],
                [1400, 900, 100, 50, "dimgray", "Y"],
                [1400, 950, 50, 150, "dimgray", "Y"],
                [1250, 1050, 150, 50, "dimgray", "Y"],
                [1150, 1000, 150, 50, "dimgray", "Y"],
                [1150, 850, 50, 150, "dimgray", "Y"],
                [1050, 1050, 50, 100, "dimgray", "Y"],
                [1250, 50, 150, 50, "dimgray", "Y"],
                [1350, 100, 150, 50, "dimgray", "Y"],
                [1450, 150, 50, 150, "dimgray", "Y"],
                [1500, 250, 150, 50, "dimgray", "Y"],
                [1600, 300, 50, 200, "dimgray", "Y"],
                ///HALFBRICK///
                [150, 0, 100, 50, "gray", "Y"],
                [850, 0, 150, 50, "gray", "Y"],
                [1600, 0, 50, 50, "gray", "Y"],
                [1950, 0, 50, 500, "gray", "Y"],
                [0, 400, 50, 100, "gray", "Y"],
                [50, 200, 50, 50, "gray", "Y"],
                [50, 300, 50, 50, "gray", "Y"],
                [350, 1050, 50, 50, "gray", "Y"], 
                [1450, 950, 50, 100, "gray", "Y"],
                [1500, 950, 50, 50, "gray", "Y"],
                [1300, 1100, 100, 50, "gray", "Y"],
                [1200, 1050, 50, 50, "gray", "Y"],
                [1100, 1000, 50, 150, "gray", "Y"],
                [1400, 50, 50, 50, "gray", "Y"],
                [1500, 200, 150, 50, "gray", "Y"],
                [1600, 100, 50, 100, "gray", "Y"],
                ///METAL///
                [700, 0, 50, 250, "slategray", "Y"],
                [1650, 0, 50, 600, "slategray", "Y"],
                [100, 100, 50, 300, "slategray", "Y"],
                [150, 150, 250, 50, "slategray", "Y"],
                [400, 50, 50, 350, "slategray", "Y"],
                [150, 250, 250, 50, "slategray", "Y"],
                [150, 350, 250, 50, "slategray", "Y"],
                [600, 1000, 100, 50, "slategray", "Y"],
                [700, 900, 100, 300, "slategray", "Y"],
                ///SPIKES///
                [1000, 650, 250, 50, "red", "K"],
                [1200, 950, 100, 50, "red", "K"],
                [1300, 1000, 100, 50, "red", "K"],
                ///WOODENPLATFORM///
                [50, 1000, 250, 25, "brown", "Y"],
                ///VOIDOUT///
                ///WIN///
                ///STONE///
                [1250, 0, 50, 50, "#ADA587", "Y"],
                [1100, 900, 50, 50, "#ADA587", "Y"],
            ],
            backgrounds: [

            ],
            enemys: [

            ],
            spawnpoint: 100,
            follow: false,
            PSF: 1.25,
            SW: 2000,
            SH: 1150,
        },

        3: {

        }
    }
    return data[num]
}