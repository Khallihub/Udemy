import * as mongoose from 'mongoose';

export class Course {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public duration: number,
    public rating: number,
    public Consumers: [string],
    public CreatorId: string,
  ) {}
}

export const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  rating: { type: Number, required: true },
  Consumers: { type: [String], required: true },
  CreatorId: { type: String, required: true },
});
