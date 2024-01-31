import {Entity, model, property} from '@loopback/repository';

@model()
export class Student extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  USN: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
  })
  Course?: string;


  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
