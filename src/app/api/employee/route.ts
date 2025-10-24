import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJwt } from "@/src/lib/jwt";
import { Gender, BadgeColor, UserRole } from "@prisma/client";

import { createEmployee } from "@/src/lib/createEmployee";

//Get all Employee✅👔
export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//create Employee
interface CreateEmployeeBody {
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

//create Employee✅👔
export async function POST(req: Request) {
  try {
    const requestCookies = await cookies();
    const body = (await req.json()) as CreateEmployeeBody;

    if (body.gender) {
      const upperGender = body.gender.toUpperCase() as keyof typeof Gender;
      body.gender = Gender[upperGender];
    }

    const token = (await requestCookies).get("token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const allowedRoles = ["CEO", "MD"];
    if (!allowedRoles.includes(payload.role)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // const {
    //   firstName,
    //   lastName,
    //   location,
    //   depertment,
    //   position,
    //   email,
    //   password,
    //   role,
    //   badgeColor,
    //   avatarUrl,
    //   salary,
    //   stipend,
    //   gender,
    //   dateOfBirth,
    //   dateOfJoining,
    //   documents,
    //   documentsimg,
    //   experienceLetter,
    //   recommendationLetter,
    //   certificates,
    //   phone,
    // } = body;

    const existingEmployee = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existingEmployee) {
      return NextResponse.json(
        { error: "Employee already exists" },
        { status: 409 }
      );
    }

    // const genpass = generatePassword(16);
    // const id = generateEmployeeId();
    // const employeeID = id;
    // console.log(id);
    // console.log(password);

    const employee = await createEmployee(body);
    return NextResponse.json(employee, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
