import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as mysql from 'mysql';

import { config } from 'dotenv';
config({ path: '.env' });

export const TypeOrmConfig = TypeOrmModule.forRootAsync({
    useFactory: (): TypeOrmModuleOptions => {
      const dbconfig = {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT, 10),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      };

      if (process.env.NODE_ENV === 'development') {
        const conn = mysql.createConnection({
          host: dbconfig.host,
          user: dbconfig.username,
          password: dbconfig.password,
        });

        conn.connect(err => {
          if (err) {
            throw new Error(err.message);
          }

          conn.query(
            `CREATE DATABASE IF NOT EXISTS \`${dbconfig.database}\``, err2 => {
              if (err2) {
                throw new Error(err2.message);
              }

              conn.end();
            },
          );
        });
      }

      return dbconfig as TypeOrmModuleOptions;
    },
  });
