"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function signUpUser(formData: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    const email = formData.email.toLowerCase().trim();
    if (!email || !formData.password || formData.password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters." };
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { success: false, error: "An account with this email already exists." };
    }

    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const user = await prisma.user.create({
      data: {
        name: formData.name || email.split("@")[0],
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  } catch (error: unknown) {
    console.error("SignUp Server Action error:", error);
    return { success: false, error: "Registration failed. Please try again." };
  }
}
