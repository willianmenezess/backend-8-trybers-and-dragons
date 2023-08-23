import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVE extends Battle {
  private _environment: Fighter[];

  constructor(player: Fighter, environment: Fighter[]) {
    super(player);
    this._environment = environment;
  }

  fight(): number {
    if (this.player.lifePoints > 0 && this._environment.length > 0) {
      return 0;
    }
    // Deve retornar 1 se o "player" vencer, -1 caso contrário
    return super.fight();
  }
}