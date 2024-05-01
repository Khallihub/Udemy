import * as mongoose from 'mongoose';

export class Consumer {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
  ) {}
}

export const ConsumerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
