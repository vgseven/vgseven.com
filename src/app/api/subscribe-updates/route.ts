import { GetMaxID, InsertUser } from "@/db/queries";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const idBody = await GetMaxID();

  try {
    const response = await InsertUser({
      id: idBody[0].id + 1,
      name: body.values.name,
      email: body.values.email,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
