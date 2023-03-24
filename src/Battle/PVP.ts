import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
    this._player1 = _player1;
    this._player2 = _player2;
  }

  fight(): number {
    // utilizado while para que a luta ocorra enquanto os pontos de vida dos dois players sejam diferentes de -1
    while (this._player1.lifePoints !== -1
      && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    return super.fight();
    // return this._player1.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;