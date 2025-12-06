import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { findReleaseBySlug, releaseNotes } from "../../../data/releaseNotes";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// Static params for SSG
export function generateStaticParams() {
  return releaseNotes.map((r) => ({ slug: r.slug }));
}

// Page component with synchronous params typing (Next.js App Router standard)
export default async function ReleaseNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = findReleaseBySlug(slug);
  if (!note) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 relative overflow-hidden">
      <Header />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/6">
          <div className="mb-4 text-sm text-gray-400">{note.date} • {note.version}</div>
          <h1 className="text-3xl font-extrabold text-white mb-6">{note.title}</h1>

          {note.image && (
            <div className="w-full h-72 md:h-96 relative mb-6 rounded-xl overflow-hidden bg-black/10">
              <Image
                src={note.image}
                alt={note.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={false}
              />
            </div>
          )}

          <div
            className="prose prose-invert max-w-none text-gray-100
              [&_p]:leading-relaxed [&_p]:mt-3 [&_p]:mb-3
              [&_ul]:list-disc [&_ul]:pl-6 [&_li]:leading-relaxed
              [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-6 [&_h2]:mb-3
              [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-5 [&_h3]:mb-2
            "
            dangerouslySetInnerHTML={{ __html: note.content }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const note = findReleaseBySlug(slug);
  if (!note) return { title: "Release Note Not Found" };

  return {
    title: `${note.title} — Release Notes | Voyage Forge`,
    description: note.short,
    openGraph: {
      title: note.title,
      description: note.short,
      images: note.image ? [note.image] : undefined,
      type: "article",
    },
  };
}
