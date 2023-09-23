import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimeDocument = HydratedDocument<AnimeModel>;

@Schema({ timestamps: true })
export class AnimeModel {
  @Prop()
  title: string;

  @Prop()
  originalName: string;

  @Prop()
  source: string;

  @Prop()
  year: string;

  @Prop()
  image: string;

  @Prop({ unique: true, required: true })
  url: string;

  @Prop(
    raw({
      time: { type: String },
      director: { type: String },
      genre: { type: Array },
      status: { type: String },
      license: { type: String },
      translates: { type: String },
      description: { type: String },
      rating: { type: Number },
    }),
  )
  details: Record<any, any>;

  @Prop(
    raw({
      iframeUrl: { type: String },
      player: { type: String },
      translatesIds: { type: Array },
    }),
  )
  player: Record<any, any>;
}

export const AnimeSchema = SchemaFactory.createForClass(AnimeModel);

AnimeSchema.index({ name: 'text', title: 'text' });
