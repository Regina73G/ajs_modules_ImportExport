// Отвечает за работу приложения (загрузку и сохранение)

import Character from "./domain";

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}