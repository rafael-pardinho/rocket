import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1703071055411 } from 'src/migrations/1703071055411-CreateCoursesTable';
import { CreateTagsTable1703081863814 } from 'src/migrations/1703081863814-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1703071055411, CreateTagsTable1703081863814],
});
