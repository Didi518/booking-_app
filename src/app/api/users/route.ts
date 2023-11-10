import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "@/libs/auth";
import { getUserData } from "@/libs/apis";

export async function GET(req: Request, res: Response) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Identification requise", { status: 500 });
  }

  const userId = session.user.id;

  try {
    const data = await getUserData(userId);
    return NextResponse.json(data, { status: 200, statusText: "Réussite" });
  } catch (error) {
    return new NextResponse("Impossible de récupérer les données", {
      status: 400,
    });
  }
}
