import * as migration_20251130_214722_services_page_slug  from './20251130_214722_services-page-slug';

export const migrations = [
  {
    up: migration_20251130_214722_services_page_slug .up,
    down: migration_20251130_214722_services_page_slug .down,
    name: '20251130_214722_db_name'
  },
];
