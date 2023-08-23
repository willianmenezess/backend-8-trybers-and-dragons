import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVE extends Battle {
  private _environment: Fighter[];

  constructor(player: Fighter, environment: Fighter[]) {
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