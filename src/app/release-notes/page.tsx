import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { releaseNotes } from "../../data/releaseNotes";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Release Notes — Voyage Forge",
  description:
    "Read the latest release notes from Voyage Forge: feature updates, improvements and bug fixes. Stay informed about releases and product changes.",
  openGraph: {
    title: "Release Notes — Voyage Forge",
    description:
      "Read the latest release notes from Voyage Forge: feature updates, improvements and bug fixes.",
    url: "https://voyage-forge.com/release-notes",
  },
};

export default function ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/90 to-indigo-950 relative overflow-hidden">
      <Header />
      {/* Background decorative elements (same as homepage) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-500"></div>
      </div>
      

      <section aria-label="Release Notes" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/6">
          <h1 className="text-3xl font-extrabold text-white mb-4">Release Notes</h1>

          <p className="text-gray-100 mb-6">
            Stay up-to-date with new features, improvements, and bug fixes. We publish detailed notes for each
            release so you can see what's changed and how to use new features.
          </p>

          <div className="grid gap-6">
            {releaseNotes.map((note) => (
              <article
                key={note.slug}
                className="rounded-2xl bg-white/3 p-6 border border-white/6"
              >
                {note.image && (
                  <div className="w-full h-64 relative rounded-xl overflow-hidden mb-4">
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

                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    {note.date} • {note.version}
                  </div>
                  <h2 className="text-xl text-white font-semibold">
                    <Link href={`/release-notes/${note.slug}`}>{note.title}</Link>
                  </h2>
                  <p className="text-gray-100 mt-2">{note.short}</p>
                  <div className="mt-4">
                    <Link
                      href={`/release-notes/${note.slug}`}
                      className="text-amber-200 font-semibold"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
