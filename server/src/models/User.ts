import { 
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  Entity }
from 'typeorm';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; 

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  deleted_at: Date;

}

export default User;