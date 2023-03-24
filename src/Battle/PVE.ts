import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import Monster from '../Monster';

class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _monster: SimpleFighter[] | Fighter[] | Monster[],
  ) {
    super(_player1);
    this._player1 = _player1;
    this._monster = _monster;
  }

  fight(): number {
    while (this._player1.lifePoints !== -1
      && this._monster.every((monster) => monster.lifePoints !== -1)) {
      this._monster.forEach((monster) => {
        this._player1.attack(monster);
        monster.attack(this._player1);
      });
    }
    return super.fight();
  }
}

export default PVE;