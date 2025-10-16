import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as z from "zod";

const prisma = new PrismaClient();

// Define validation schema matching your contact form
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email format" })
    .optional(),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .regex(/^[0-9]{10,15}$/, {
      message: "Please enter a valid phone number (10-15 digits only)",
    }),
  message: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Create a new user record in the database
    const newUser = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email || null,
        phoneNo: validatedData.phone,
        Message: validatedData.message || null,
      },
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully!",
        data: {
          id: newUser.id,
          name: newUser.name,
          createdAt: newUser.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle Prisma errors
    if (error instanceof Error) {
      console.error("Database error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to save contact form data",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}
