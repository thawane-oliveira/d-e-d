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
    this._monster.forEach((monster) => {
      this._player1.attack(monster);
      monster.attack(this._player1);
    });
    // -1 indica vitória do player que não foi o parâmetro, do contrário, é do player parâmetro do super do constructor
    return this._player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;