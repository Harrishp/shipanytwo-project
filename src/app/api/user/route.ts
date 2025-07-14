import { NextRequest } from "next/server";
import { createUser, readUser } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, age, email } = await req.json();

    const user = await readUser(3);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to create user: ${error}` },
      { status: 500 }
    );
  }
}
