import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import { signJwt } from "@/src/lib/jwt";
import { hashPassword } from "@/src/lib/hash";
import { setTokenCookie } from "@/src/lib/cookies";
import { UserRole } from "@prisma/client";
import { updateUserSchema } from "@/src/lib/validation/UpdateUserRequest";

interface SignupRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
}

export async function POST(req: Request) {
  try {
    const bodyy = await req.json() as SignupRequestBody;

    const body = updateUserSchema.parse(bodyy); ;

    const existing = await prisma.user.findUnique({ where: { email: body.email } });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword(bodyy.password);
    const user = await prisma.user.create({
      data: { firstName: body.firstName, lastName: body.lastName , email: body.email, password: hashedPassword, role: bodyy.role },
    });

    const token = signJwt({
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role || "MD",
    });

    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt.toISOString(),
    };

    const response = NextResponse.json({ user: safeUser });
    response.headers.set("Set-Cookie", setTokenCookie(token));
    return response;
  } catch (error) {
    console.error("Signup error:', error instanceof Error ? error.message : '", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
