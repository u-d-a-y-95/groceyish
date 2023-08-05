import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const image = formData.get("image") as Blob;
  const splitedName = image.name.split(".");
  const ext = splitedName[splitedName.length - 1];
  const buffer = Buffer.from(await image.arrayBuffer());
  const fileName = `${new Date().getTime()}.${ext}`;
  await fs.writeFile(`public/upload/${fileName}`, buffer);
  return NextResponse.json("ok");
};
