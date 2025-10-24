import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";
import { signJwt } from "@/src/lib/jwtemp";
import { comparePassword } from "@/src/lib/hashemp";
import { setTokenCookie } from "@/src/lib/cookies";

export async function POST(req: Request) {
  try {
    const { employeeID, password } = await req.json();
    if (!employeeID || !password)
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );

    const user = await prisma.user.findUnique({ where: { employeeID } });
    if (!user)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const isValid = await comparePassword(password, user.password);
    if (!isValid)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );

    const token = signJwt({
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      employeeID: user.employeeID || "",
    });
    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      employeeID: user.employeeID || "",
      createdAt: user.createdAt.toISOString(),
    };

    const response = NextResponse.json({ user: safeUser });
    response.headers.set("Set-Cookie", setTokenCookie(token));
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
