import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = parseInt(searchParams.get('width') || '1200');
  const height = parseInt(searchParams.get('height') || '630');
  const title = searchParams.get('title') || 'Voyage Forge';
  const description = searchParams.get('description') || 'AI-Powered Travel Platform';

  // Create a simple SVG that we'll convert to data URL
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:0.9" />
          <stop offset="100%" style="stop-color:#1e1b4b;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad1)"/>
      <text x="${width / 2}" y="${height / 2 - 40}" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">
        ${title.substring(0, 30)}${title.length > 30 ? '...' : ''}
      </text>
      <text x="${width / 2}" y="${height / 2 + 20}" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#d1d5db" text-anchor="middle" dominant-baseline="middle">
        ${description.substring(0, 50)}${description.length > 50 ? '...' : ''}
      </text>
      <text x="${width / 2}" y="${height - 30}" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#fbbf24" text-anchor="middle" dominant-baseline="middle">
        voyageforge.com
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}