/*
  Warnings:

  - You are about to drop the column `color` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `catName` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `isTrending` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_name` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userEmail_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_catName_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userEmail_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "color",
DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "createdAt",
DROP COLUMN "postId",
DROP COLUMN "userEmail",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "post_id" TEXT NOT NULL,
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "catName",
DROP COLUMN "createdAt",
DROP COLUMN "img",
DROP COLUMN "isTrending",
DROP COLUMN "userEmail",
ADD COLUMN     "category_name" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "is_trending" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "Category"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
