// Отвечает за запуск приложения

import Game, {GameSavingData, readGameSaving as saveGame, writeGameSaving as loadGame} from "./game.js";

const game = new Game();
game.start();