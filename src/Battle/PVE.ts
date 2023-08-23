import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _environment: Array<Fighter | SimpleFighter>;

  constructor(player: Fighter, environment: Array<Fighter | SimpleFighter>) {
    super(player);
    this._environment = environment;
  }

  fight(): number {
    this._environment.forEach((enemy) => {
      while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    
    // Deve retornar 1 se o "player" vencer, -1 caso contrário
    return super.fight();
  }
}