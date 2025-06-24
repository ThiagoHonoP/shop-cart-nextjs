import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import products from "../../../../database.json";

export async function GET(req: NextApiRequest) {
  return NextResponse.json(products);
}
