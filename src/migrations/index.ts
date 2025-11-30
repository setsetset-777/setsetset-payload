import * as migration_20251130_214722_db_name from './20251130_214722_db_name';

export const migrations = [
  {
    up: migration_20251130_214722_db_name.up,
    down: migration_20251130_214722_db_name.down,
    name: '20251130_214722_db_name'
  },
];
