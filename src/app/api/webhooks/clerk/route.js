import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`);
  console.log("Webhook payload:", body);

  if (eventType === "user.created") {
    try {
      const userData = evt.data; // استخدم البيانات مباشرة من evt.data

      // تأكد من وجود البيانات الضرورية
    if (!userData.id || !userData.username) {
      console.error("Incomplete user data:", userData);
      return new Response("Error: Incomplete user data", { status: 400 });
    }

      await prisma.user.create({
        data: {
          id: userData.id,
          username: userData.username,
          email: userData.email_addresses[0]?.email_address || '',
          img: userData.image_url || "",
          displayName: userData.first_name && userData.last_name 
            ? `${userData.first_name} ${userData.last_name}`
            : userData.username,
        },
      });
      return new Response("User created", { status: 200 });
    } catch (err) {
      console.log(err);
      return new Response("Error: Failed to create a user!", {
        status: 500,
      });
    }
  }

  if (eventType === "user.deleted") {
    try {
      // التحقق من وجود المستخدم قبل محاولة حذفه
      const userExists = await prisma.user.findUnique({
        where: { id: evt.data.id }
      });
      
      if (userExists) {
        await prisma.user.delete({ where: { id: evt.data.id } });
        console.log(`User ${evt.data.id} deleted successfully`);
      } else {
        console.log(`User ${evt.data.id} not found, skipping delete operation`);
      }
      
      return new Response("User deletion processed", { status: 200 });
    } catch (err) {
      console.log(err);
      return new Response("Error: Failed to process user deletion!", {
        status: 500,
      });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
