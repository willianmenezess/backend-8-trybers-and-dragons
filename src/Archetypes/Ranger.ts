import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static countInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Ranger.countInstances += 1;
    this._energyType = 'stamina';
  }

  get name(): string {
    return this.name;
  }

  get special(): number {
    return this.special;
  }

  get cost(): number {
    return this.cost;
  }

  static createdArchetypeInstances(): number {
    return Ranger.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;