import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubject1637066621672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "subject",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_student",
                        type: "uuid"
                    },
                    {
                        name: "course_type",
                        type: "uuid"
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserStudentSubject",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_student"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKCourseTypeSubject",
                        referencedTableName: "courses",
                        referencedColumnNames: ["id"],
                        columnNames: ["course_type"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("subject")
    }

}
