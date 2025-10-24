import  prisma from "@/src/lib/prisma";
import { generateEmployeeId } from "@/src/utils/generateEmployeeId";
import { generatePassword } from "@/src/utils/generatePassword";

export async function createEmployee(data: any) {
  let employee: any = null;
  let attempts = 0;

  while (!employee && attempts < 10) {
    try {
      const employeeID = generateEmployeeId();
      const password = generatePassword(16);

      employee = await prisma.user.create({
        data: { ...data, employeeID, password },
      });

      return employee; // ✅ success
    } catch (err: any) {
      // check if error is unique constraint on employeeID
      if (err.code === "P2002" && err.meta?.target?.includes("employeeID")) {
        attempts++;
        console.warn(`Duplicate employeeID generated, retrying... attempt ${attempts}`);
        continue; // regenerate ID and try again
      }
      throw err; // other errors -> throw
    }
  }

  throw new Error("Failed to generate unique employee ID after multiple attempts");
}
