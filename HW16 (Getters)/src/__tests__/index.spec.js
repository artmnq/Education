import { school } from '../index';

describe('school object', () => {
  it('aGradeStudents', () => {
    expect(school.aGradeStudents).toEqual('Ivan');
  });
  it('bGradeStudents', () => {
    expect(school.bGradeStudents).toEqual('Eugene');
  });
  it('cGradeStudents', () => {
    expect(school.cGradeStudents).toEqual('Maria, Dmytro, Anna');
  });
  it('dGradeStudents', () => {
    expect(school.dGradeStudents).toEqual('Anton, Olha, Bohdan');
  });
});
