import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {StudentDbDataSource} from '../datasources';
import {Student, StudentRelations} from '../models';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.USN,
  StudentRelations
> {
  constructor(
    @inject('datasources.StudentDb') dataSource: StudentDbDataSource,
  ) {
    super(Student, dataSource);
  }
}
