import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import User from "../.../../../../Modeles/user.model"; 
import { dbConnect } from "../../../Lib/dbConnect";

const nameRegex = /^[A-Za-z\s]{3,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/; 
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const { name, email, phone, password, role, photo } = body;
    if (!nameRegex.test(name)) {
      return NextResponse.json({ error: "Invalid name format" }, { status: 400 });
    }
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number" }, { status: 400 });
    }
    if (!passwordRegex.test(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be 8+ chars with uppercase, lowercase, number, and special character",
        },
        { status: 400 }
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: role || "user",
      photo: photo || "",
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
