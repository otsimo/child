/**
 * Created by sercand on 09/06/15.
 */



var playableGameList = [
    {
        id: "5576cbff4a2caa680b4318fc",
        name: "Esya Eslesme Oyunu",
        logo: "img/app1.png",
        run: function (state, socket, gamedata) {
            runEslemeGame(state, socket, gamedata);
        }
    },
    {
        id: "557785d85c21a8d378fce8bc",
        name: "Renk Eslesme Oyunu",
        logo: "img/app2.png",
        run: function (state, socket, gamedata) {
            runRenkGame(state, socket, gamedata);
        }
    },
    {
        id: "557785ff5c21a8d378fce8be",
        name: "Bir Renk Sec",
        logo: "img/app3.png",
        run: function (state, socket, gamedata) {
            runBiRenkSecGame(state, socket, gamedata);
        }
    },
    {
        id: "557785f55c21a8d378fce8bd",
        name: "Birini Sec",
        logo: "img/app4.png",
        run: function (state, socket, gamedata) {
            runBiriniSecGame(state, socket, gamedata);
        }
    }
];

function findGameFromList(id) {
    for (var i = 0; i < playableGameList.length; i++) {
        if (playableGameList[i].id == id) {
            return playableGameList[i];
        }
    }
    return null;
}