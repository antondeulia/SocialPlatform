import { Webhook } from "svix";
import { headers } from "next/headers";
import { User, WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db/prismaClient";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  const { data } = JSON.parse(body);

  if (eventType === "user.created") {
    try {
      await prisma.user.create({
        data: {
          id,
          username: data.username,
          avatar: data.image_url,
          firstName: data.first_name,
          lastName: data.last_name,
          cover: "/noAvatar.png",
        },
      });

      return new Response("User has been created!", { status: 201 });
    } catch (error) {
      console.log(error);

      return new Response("Failed to create the user!", { status: 500 });
    }
  }

  if (eventType === "user.updated") {
    try {
      await prisma.user.update({
        where: { id: data.id },
        data: {
          id,
          username: data.username!,
          avatar: data.imageUrl,
          firstName: data.firstName,
          lastName: data.lastName,
          cover: "/noAvatar.png",
        },
      });

      return new Response("User has been updated!", { status: 200 });
    } catch (error) {
      console.log(error);

      return new Response("Failed to update the user!", { status: 500 });
    }
  }

  if (eventType === "user.deleted") {
    try {
      await prisma.user.delete({
        where: { id: data.id },
      });
    } catch (error) {
      console.log(error);

      return new Response("Failed to delete the user!", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
