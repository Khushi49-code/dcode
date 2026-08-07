// app/api/job-apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db, storage } from "@/lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function POST(req: NextRequest) {
  console.log("=== API ROUTE CALLED ===");
  
  try {
    const formData = await req.formData();
    
    // Get form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const role = formData.get("role") as string;
    const resume = formData.get("resume") as File;
    const jobId = formData.get("jobId") as string;
    const jobTitle = formData.get("jobTitle") as string;
    
    console.log("Received data:", { name, email, phone, role });
    
    // Validate
    if (!name || !email || !phone || !resume) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }
    
    // Upload resume
    const fileName = `${Date.now()}_${name.replace(/\s+/g, '_')}_${resume.name}`;
    const storageRef = ref(storage, `jobApplications/${fileName}`);
    
    await uploadBytes(storageRef, resume);
    const downloadURL = await getDownloadURL(storageRef);
    
    // Save to Firestore
    const docRef = await addDoc(collection(db, "applications"), {
      name,
      email,
      phone,
      experience: experience || "Not specified",
      role: role || jobTitle,
      jobId: jobId || null,
      jobTitle: jobTitle || role,
      resumeUrl: downloadURL,
      resumeName: resume.name,
      createdAt: serverTimestamp(),
      status: "pending",
      source: "careers-page"
    });
    
    console.log("Application saved with ID:", docRef.id);
    
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      applicationId: docRef.id
    });
    
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Server error: " + (error.message || "Unknown error")
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS handler for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}