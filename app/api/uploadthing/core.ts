import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  documentUploader: f({
    pdf: { maxFileSize: "16MB", maxFileCount: 5 },
    image: { maxFileSize: "16MB", maxFileCount: 5 },
  })
    .middleware(async () => {
      const session = await getServerSession(authOptions);
      const user = session?.user as unknown as { id: string } | undefined;
      return { userId: user?.id || null };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed for userId:", metadata.userId, file.url);

      // Save document record in Supabase Database
      await prisma.document.create({
        data: {
          name: file.name || "Uploaded Document",
          url: file.url,
          status: "Uploaded",
          userId: metadata.userId || undefined,
        },
      });

      return { uploadedBy: metadata.userId, url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
