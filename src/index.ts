import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

// 3 objetos do tipo Character

const player1 = new Character('Jolyne');
const player2 = new Character('Giorno');
const player3 = new Character('Josuke');

player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
// fly stone free

// 2 objetos do tipo Monster

const monster1 = new Monster();
const monster2 = new Dragon();

// 1 objeto do tipo PVP

const pvp = new PVP(player2, player3);

// 1 objeto do tipo PVE

const pve = new PVE(player1, [monster1, monster2]);

// função runBattles

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1, player2, player3,
  monster1, monster2,
  pvp, pve,
  runBattles,
};