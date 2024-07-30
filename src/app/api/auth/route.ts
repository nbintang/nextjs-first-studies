import { NextRequest, NextResponse } from "next/server";

export default function POST(req: NextRequest) {
    
    return NextResponse.json({
        status: 200,
        message: "success"
    })
  };