"use server";

import { prisma } from "@/lib/prisma";

export async function toggleTaskCompletion(taskId: string, currentStatus: boolean) {
  try {
    const updated = await prisma.task.update({
      where: { id: taskId },
      data: { isCompleted: !currentStatus },
    });
    return { success: true, task: updated };
  } catch (error: unknown) {
    console.error("toggleTaskCompletion Error:", error);
    return { success: false, error: "Failed to update task." };
  }
}
