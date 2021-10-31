import { DynamicModule, Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EnvModule } from '../env/env.module';
import { EnvService } from '../env/env.service';

function DatabaseOrmModule(): DynamicModule {
  const config = new EnvService().read();
  console.log({ MONGODB_URI: config.MONGODB_URI });

  return MongooseModule.forRoot(config.MONGODB_URI);
}

@Global()
@Module({
  imports: [EnvModule, DatabaseOrmModule()],
})
export class DatabaseModule {}
