import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AssetsModule } from './assets/assets.module';
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
=======
>>>>>>> 828c1db49014d53ef49142d750261c248a3b2938
console.log(process.env);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOST}/models`),
    ProjectsModule,
    AssetsModule,
<<<<<<< HEAD
    AuthModule,
    UsersModule,
=======
>>>>>>> 828c1db49014d53ef49142d750261c248a3b2938
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
