import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCourseUser1637072705215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "course",
                type: "uuid"
            })
        )

        await queryRunner.createForeignKey(
            "users",
            new TableForeignKey({
                name: "FKCourseUser",
                referencedTableName: "courses",
                referencedColumnNames: ["id"],
                columnNames: ["course"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users", "FKCourseUser")
        await queryRunner.dropColumn("users", "course")
    }

}
