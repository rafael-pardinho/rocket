import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1703071055411 } from 'src/migrations/1703071055411-CreateCoursesTable';
import { CreateTagsTable1703081863814 } from 'src/migrations/1703081863814-CreateTagsTable';
import { CreateCoursesTagsTable1703099843640 } from 'src/migrations/1703099843640-CreateCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1703071055411,
    CreateTagsTable1703081863814,
    CreateCoursesTagsTable1703099843640,
  ],
});
