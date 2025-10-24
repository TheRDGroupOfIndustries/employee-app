import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "@/src/lib/jwt";

import { Gender, BadgeColor, UserRole } from "@prisma/client";

// Get Employee by ID✅👔
export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const requestCookies = cookies();
    const token = (await requestCookies).get("token")?.value;

    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payload = await verifyJwt(token);
    if (!payload)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const employee = await prisma.user.findUnique({ where: { id } });
    if (!employee)
      return NextResponse.json({ error: "Employee not found" }, { status: 404 });


    return NextResponse.json(employee);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// update Employee by ID✅👔

interface UpdateEmployeeBody {
  firstName: string;
    lastName: string;
    location?: string;
    depertment?: string;
    position?: string;
    email: string;
    password: string;
    role: UserRole;
    badgeColor?: BadgeColor;
    avatarUrl?: string;
    salary?: number;
    stipend?: number;
    gender?: Gender;
    dateOfBirth?: Date;
    dateOfJoining?: Date;
    documents: string[];
    documentsimg: string[];
    experienceLetter?: string;
    recommendationLetter?: string;
    certificates?: string[];
    certificatesimg?: string[];
    phone?: string;
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const requestCookies = cookies();
    const token = (await requestCookies).get("token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payload = await verifyJwt(token);
    if (!payload)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const allowedRoles = ["CEO", "MD"];
    if (!allowedRoles.includes(payload.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const employee = await prisma.user.findUnique({ where: { id } });
    if (!employee)
      return NextResponse.json({ error: "Employee not found" }, { status: 404 });

    const body = (await req.json()) as UpdateEmployeeBody;

    // Convert gender safely
    if (body.gender) {
      const upperGender = body.gender.toUpperCase() as keyof typeof Gender;
      body.gender = Gender[upperGender];
    }

    const updated = await prisma.user.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// delete Employee by ID✅👔
export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const requestCookies = cookies();
    const token = (await requestCookies).get("token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const payload = await verifyJwt(token);
    if (!payload)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const allowedRoles = ["CEO", "MD"];
    if (!allowedRoles.includes(payload.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const employee = await prisma.user.findUnique({ where: { id } });
    if (!employee)
      return NextResponse.json({ error: "Employee not found" }, { status: 404 });

    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: "Employee deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}