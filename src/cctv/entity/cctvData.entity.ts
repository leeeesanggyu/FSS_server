import {
	Entity,

	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,

	OneToOne,
	OneToMany,
	JoinColumn,
	ManyToOne,

} from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity({ name: "cctvData" })
export class cctvData {
	
	@PrimaryGeneratedColumn("uuid")
	pk: string;

	@IsNotEmpty()
	@Column({ name: "cctv_number", nullable: false })
	cctv_number: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
	
}

