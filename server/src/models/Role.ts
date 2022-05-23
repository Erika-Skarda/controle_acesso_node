import { 
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  Entity }
from 'typeorm';

@Entity('roles')
class Role {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; 

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Role;