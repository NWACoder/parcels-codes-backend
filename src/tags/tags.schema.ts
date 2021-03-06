import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TagDocument = Tag & Document;

@Schema()
export class Tag {

	@Prop()
	id: string;

	@Prop()
	name: string;

}

export const TagSchema = SchemaFactory.createForClass(Tag);