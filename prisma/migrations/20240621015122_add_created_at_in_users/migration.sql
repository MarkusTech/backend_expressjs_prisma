-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
