import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddInfoCourse1638884767140 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "courses",
            new TableColumn({
                name: "image",
                type: "varchar"
            })
        )

        await queryRunner.addColumn(
            "courses",
            new TableColumn({
                name: "duration",
                type: "varchar"
            })
        )

        await queryRunner.addColumn(
            "courses",
            new TableColumn({
                name: "value",
                type: "int"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("courses", "image")
        await queryRunner.dropColumn("courses", "duration")
        await queryRunner.dropColumn("courses", "value")
    }

}
