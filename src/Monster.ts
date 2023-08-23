// import Energy from './Energy';
import Fighter from './Fighter';
import getRandomInt from './utils';

class Monster implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
    this._defense = getRandomInt(1, 10);
  }

  levelUp(): void {
    this._defense += 5;
  }

  get defense(): number {
    return this._defense;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}

export default Monster;