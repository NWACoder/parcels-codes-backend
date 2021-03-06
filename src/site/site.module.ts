import { Module } from '@nestjs/common';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { Site, SiteSchema } from './site.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { SnippetsModule } from 'src/snippets/snippets.module';
import { ChallengesModule } from 'src/challenges/challenges.module';

@Module({
	imports: [
	UsersModule,SnippetsModule,ChallengesModule,
	MongooseModule.forFeature([{ name: Site.name, schema: SiteSchema }]),
	],
  controllers: [SiteController],
  providers: [SiteService]
})
export class SiteModule {}
