import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import {updateUserSchema} from "@/src/lib/validation/UpdateUserRequest";

// Update user by ID ✅😏
interface UpdateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  avatarUrl?: string;
}
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // get user id from route
    const body = await req.json() as UpdateUserRequest;
    const bodyy = updateUserSchema.parse(body);

    // Check if user exists
    // const user = await prisma.user.findUnique({
    //   where: { id },
    // });
    // if (!user) {
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }


    // Update user
    const updatedUser = await prisma.user.update({
      where: { id },
      data: bodyy,
    });

    // Don't send password back
    const { password, ...safeUser } = updatedUser;

    return NextResponse.json({ user: safeUser });
  } catch (error: any) {
    console.error("Failed to update user:", error.message);

    if (error.code === "P2025") {
      // User not found
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// Delete user by ID ✅😏

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // get user id from route

    // Check if user exists
    // const user = await prisma.user.findUnique({
    //   where: { id },
    // });
    // if (!user) {
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }

    // Delete user
    await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error: any) {
    console.error("Failed to delete user:", error);

    if (error.code === "P2025") {
      // User not found
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
        { error: "Failed to delete user" },      { status: 500 }
    );
  } 
}


