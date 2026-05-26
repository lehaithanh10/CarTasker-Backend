-- AlterTable
ALTER TABLE "job_assignments" ADD COLUMN     "auto_release_at" TIMESTAMP(3),
ADD COLUMN     "completion_requested_at" TIMESTAMP(3),
ADD COLUMN     "completion_requested_by" UUID,
ADD COLUMN     "dispute_reason" TEXT,
ADD COLUMN     "disputed_at" TIMESTAMP(3);
