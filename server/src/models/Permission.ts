import { 
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  Entity }
from 'typeorm';

@Entity('permissions')
class Permission {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; 

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Permission;