import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  if (!file) return NextResponse.json({ error: 'No file' }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  // Auto-number frames
  const framesDir = path.join(process.cwd(), 'public', 'frames');
  const existing = await readdir(framesDir).catch(() => []);
  const frameNum = String(existing.length).padStart(3, '0');
  const ext = file.name.split('.').pop() || 'jpg';
  const saveName = `frame_${frameNum}.${ext}`;
  const savePath = path.join(framesDir, saveName);
  
  await writeFile(savePath, buffer);
  return NextResponse.json({ saved: saveName, total: existing.length + 1 });
}
