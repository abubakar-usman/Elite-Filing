"use client";

import { useState } from "react";
import { toggleTaskCompletion } from "@/app/actions/tasks";
import { CheckSquare, Square, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function TaskToggleButton({ taskId, isCompleted }: { taskId: string; isCompleted: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);

  const handleToggle = async () => {
    setLoading(true);
    try {
      const res = await toggleTaskCompletion(taskId, completed);
      if (!res.success) throw new Error(res.error || "Failed to update task.");

      setCompleted(!completed);
      toast.success(!completed ? "Task marked complete!" : "Task marked pending");
      router.refresh();
    } catch (err: unknown) {
      toast.error("Error updating task status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleToggle} disabled={loading} className="text-orange-400 hover:text-orange-300 cursor-pointer pt-0.5">
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
      ) : completed ? (
        <CheckSquare className="w-4 h-4 text-emerald-400" />
      ) : (
        <Square className="w-4 h-4 text-slate-500" />
      )}
    </button>
  );
}
