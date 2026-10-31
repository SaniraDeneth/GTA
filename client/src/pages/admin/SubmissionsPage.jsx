import React, { useState } from 'react';
import AdminNav from '../../components/admin/AdminNav.jsx';

export default function SubmissionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  // Day 01 Mock Submissions (Read-only entries with team details as per API contract in docs/API_CONTRACTS.md)
  const [submissions] = useState([
    {
      id: 'sub_001',
      teamId: 'team_01',
      teamName: 'CyberVanguard',
      leaderName: 'Kavindu Perera',
      leaderEmail: 'kavindu@cybervanguard.io',
      members: ['Kavindu Perera', 'Ravindu Silva', 'Shenal Fernando', 'Malithi Perera'],
      title: 'Neon Odyssey 2099',
      tagline: 'High-speed cyberpunk hovercraft racing and hacking arcade game',
      description:
        'Neon Odyssey 2099 is a fast-paced cyberpunk racing experience where players navigate neon-lit megacity highways while simultaneously hacking security nodes and adversary telemetry to survive. Built using React Three Fiber, Three.js, and Web Audio API with original synthwave audio tracks.',
      repoUrl: 'https://github.com/cybervanguard/neon-odyssey-2099',
      playableUrl: 'https://cybervanguard.itch.io/neon-odyssey',
      videoUrl: 'https://youtu.be/dQw4w9WgXcQ',
      submittedAt: '2026-10-31T14:20:00Z',
      updatedAt: '2026-10-31T15:10:00Z',
      tags: ['Three.js', 'React', 'WebGL', 'Racing'],
    },
    {
      id: 'sub_002',
      teamId: 'team_04',
      teamName: 'NeonDrifters',
      leaderName: 'Sachini Wickramasinghe',
      leaderEmail: 'sachini@drifters.lk',
      members: ['Sachini Wickramasinghe', 'Dinuka Jayawardena', 'Isuru Sampath', 'Chamara Gunasekara'],
      title: 'Chrono Drift',
      tagline: 'Time-bending gravity puzzle platformer in a dystopian reactor',
      description:
        'Manipulate timeline echoes to solve multi-stage reactor meltdowns. Players create past-self projections that record momentum and trigger electromagnetic switches in real time. Features retro pixel shaders and custom physics calculations.',
      repoUrl: 'https://github.com/neondrifters/chrono-drift',
      playableUrl: 'https://chrono-drift-buildathon.vercel.app',
      videoUrl: 'https://www.youtube.com/watch?v=sampleChrono',
      submittedAt: '2026-10-31T11:05:00Z',
      updatedAt: '2026-10-31T11:05:00Z',
      tags: ['Phaser', 'TypeScript', 'PixelArt', 'Puzzle'],
    },
    {
      id: 'sub_003',
      teamId: 'team_05',
      teamName: 'PixelSyndicate',
      leaderName: 'Nuwan Alwis',
      leaderEmail: 'nuwan.a@pixelsyndicate.dev',
      members: ['Nuwan Alwis', 'Kaveen Dias', 'Binura Ranasinghe'],
      title: 'Zero Protocol',
      tagline: 'Co-op terminal infiltration and grid stealth defense simulation',
      description:
        'A dual-role tactical hacking game. One player controls physical operative infiltration on canvas isometric view while the other operates a live simulated terminal buffer decrypting firewall sequences.',
      repoUrl: 'https://github.com/pixelsyndicate/zero-protocol',
      playableUrl: 'https://zero-protocol.netlify.app',
      videoUrl: null,
      submittedAt: '2026-10-30T22:45:00Z',
      updatedAt: '2026-10-31T08:12:00Z',
      tags: ['Socket.io', 'Canvas', 'Isometric', 'Co-op'],
    },
    {
      id: 'sub_004',
      teamId: 'team_02',
      teamName: 'NexusRebels',
      leaderName: 'Ayesha Senanayake',
      leaderEmail: 'ayesha.s@gmail.com',
      members: ['Ayesha Senanayake', 'Praveen Mendis', 'Hiruni Rathnayake'],
      title: 'Aetheria: Shards of Circuit',
      tagline: 'Turn-based deckbuilder powered by algorithmic cyber spells',
      description:
        'Construct malware routines and cryptographic shields to overcome rogue sentinel constructs. Features procedural deck generation, card synergism and custom sound design.',
      repoUrl: 'https://github.com/nexusrebels/aetheria-circuits',
      playableUrl: 'https://nexusrebels.itch.io/aetheria',
      videoUrl: 'https://youtu.be/sampleAetheria',
      submittedAt: '2026-10-30T19:30:00Z',
      updatedAt: '2026-10-30T19:30:00Z',
      tags: ['Pixi.js', 'Card Game', 'Deckbuilder', 'Procedural'],
    },
  ]);

  // Filter logic
  const filteredSubmissions = submissions.filter((sub) => {
    const q = searchQuery.toLowerCase();
    return (
      sub.title.toLowerCase().includes(q) ||
      sub.teamName.toLowerCase().includes(q) ||
      sub.leaderName.toLowerCase().includes(q) ||
      sub.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="pb-16 font-['Rajdhani',sans-serif]">
      {/* Admin Nav */}
      <AdminNav activeTab="submissions" />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/5 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-2">
            <span>PROJECT REPOSITORY • READ-ONLY AUDIT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Orbitron',sans-serif]">
            SUBMISSIONS <span className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.6)]">GALLERY</span>
          </h2>
          <p className="text-sm text-[#9aa7c1] mt-1">
            Browse verified team projects, test playable demonstrations, and audit repository codebases.
          </p>
        </div>

        {/* Read-Only Notice Badge */}
        <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-2 rounded-xl bg-[#070714] border border-[#8b3dff]/30 text-xs text-[#8b3dff] font-mono">
          <svg className="w-4 h-4 text-[#8b3dff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Admin Read-Only Access • No Scoring in MVP</span>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-[#0d0f24] border border-white/5">
          <div className="text-xs uppercase text-[#9aa7c1] font-['Orbitron',sans-serif]">Total Submissions</div>
          <div className="text-2xl font-bold text-white font-['Orbitron',sans-serif] mt-1">{submissions.length}</div>
          <div className="text-[11px] text-[#00e5ff] mt-0.5">Entries received</div>
        </div>
        <div className="p-4 rounded-xl bg-[#0d0f24] border border-white/5">
          <div className="text-xs uppercase text-[#9aa7c1] font-['Orbitron',sans-serif]">Live Demos</div>
          <div className="text-2xl font-bold text-emerald-400 font-['Orbitron',sans-serif] mt-1">
            {submissions.filter((s) => s.playableUrl).length}
          </div>
          <div className="text-[11px] text-emerald-400/80 mt-0.5">100% playable coverage</div>
        </div>
        <div className="p-4 rounded-xl bg-[#0d0f24] border border-white/5">
          <div className="text-xs uppercase text-[#9aa7c1] font-['Orbitron',sans-serif]">Repos Audited</div>
          <div className="text-2xl font-bold text-[#8b3dff] font-['Orbitron',sans-serif] mt-1">
            {submissions.filter((s) => s.repoUrl).length}
          </div>
          <div className="text-[11px] text-[#8b3dff]/80 mt-0.5">Public GitHub repos</div>
        </div>
        <div className="p-4 rounded-xl bg-[#0d0f24] border border-white/5">
          <div className="text-xs uppercase text-[#9aa7c1] font-['Orbitron',sans-serif]">Video Previews</div>
          <div className="text-2xl font-bold text-[#ff2bd6] font-['Orbitron',sans-serif] mt-1">
            {submissions.filter((s) => s.videoUrl).length}
          </div>
          <div className="text-[11px] text-[#ff2bd6]/80 mt-0.5">Gameplay trailers</div>
        </div>
      </div>

      {/* Search and Layout Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9aa7c1]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project title, team, tech tag..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#070714] border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00e5ff] transition-colors"
          />
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-[#070714] p-1 rounded-xl border border-white/10 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === 'grid'
                ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40'
                : 'text-[#9aa7c1] hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Cards</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              viewMode === 'table'
                ? 'bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/40'
                : 'text-[#9aa7c1] hover:text-white'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSubmissions.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-[#9aa7c1]">
              No submissions found matching your search.
            </div>
          ) : (
            filteredSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl bg-[#0d0f24]/90 border border-white/10 p-6 shadow-lg hover:border-[#00e5ff]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Team & Date */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs">
                    <span className="text-[#00e5ff] font-bold font-['Orbitron',sans-serif]">
                      {sub.teamName}
                    </span>
                    <span className="text-[#9aa7c1] font-mono text-[11px]">
                      {new Date(sub.submittedAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <h3 className="text-xl font-bold text-white font-['Orbitron',sans-serif] group-hover:text-[#00e5ff] transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-[#9aa7c1] mt-1 mb-3 line-clamp-1 italic font-sans">
                    "{sub.tagline}"
                  </p>

                  {/* Description preview */}
                  <p className="text-xs text-[#9aa7c1]/90 mb-4 line-clamp-3 leading-relaxed">
                    {sub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {sub.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links & Dossier Button */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {sub.playableUrl && (
                      <a
                        href={sub.playableUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#ff2bd6]/15 hover:bg-[#ff2bd6]/25 border border-[#ff2bd6]/40 text-[#ff2bd6] text-xs font-bold tracking-wider flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        <span>Play Demo</span>
                      </a>
                    )}
                    {sub.repoUrl && (
                      <a
                        href={sub.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSubmission(sub)}
                    className="text-xs text-[#00e5ff] hover:underline font-bold flex items-center gap-1 font-['Orbitron',sans-serif]"
                  >
                    <span>Full Details</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        /* Table View */
        <div className="rounded-2xl bg-[#0d0f24]/90 border border-white/10 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs text-[#9aa7c1] uppercase font-['Orbitron',sans-serif] bg-white/[0.02] border-b border-white/10">
                  <th className="py-3.5 px-4">Project & Team</th>
                  <th className="py-3.5 px-4">Playable Demo</th>
                  <th className="py-3.5 px-4">Repository</th>
                  <th className="py-3.5 px-4">Video Link</th>
                  <th className="py-3.5 px-4">Submitted</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredSubmissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-white text-base">{sub.title}</div>
                      <div className="text-xs text-[#00e5ff] font-semibold">{sub.teamName}</div>
                      <div className="text-[11px] text-[#9aa7c1]">{sub.leaderEmail}</div>
                    </td>
                    <td className="py-4 px-4">
                      {sub.playableUrl ? (
                        <a
                          href={sub.playableUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#ff2bd6] hover:underline flex items-center gap-1 font-mono"
                        >
                          <span>Open Link</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-xs text-[#9aa7c1]">None</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      <a
                        href={sub.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#00e5ff] hover:underline flex items-center gap-1 font-mono"
                      >
                        <span>GitHub Repo</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </td>
                    <td className="py-4 px-4">
                      {sub.videoUrl ? (
                        <a
                          href={sub.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#8b3dff] hover:underline flex items-center gap-1 font-mono"
                        >
                          <span>Watch</span>
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-xs text-[#9aa7c1] italic">No video</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-xs font-mono text-[#9aa7c1]">
                      {new Date(sub.submittedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setSelectedSubmission(sub)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-colors"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Submission Dossier Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-3xl rounded-2xl bg-[#0d0f24] border border-[#00e5ff]/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 mb-4 border-b border-white/10">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#00e5ff] font-['Orbitron',sans-serif] font-bold">
                  Team Project Dossier • {selectedSubmission.teamName}
                </div>
                <h3 className="text-2xl font-bold text-white font-['Orbitron',sans-serif] mt-1">
                  {selectedSubmission.title}
                </h3>
                <div className="text-xs text-[#9aa7c1] mt-0.5">
                  Leader: {selectedSubmission.leaderName} ({selectedSubmission.leaderEmail})
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="text-[#9aa7c1] hover:text-white p-1 text-2xl font-bold leading-none"
              >
                &times;
              </button>
            </div>

            {/* Content Body */}
            <div className="space-y-6">
              {/* Synopsis & Full Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9aa7c1] font-['Orbitron',sans-serif] mb-2">
                  Project Description
                </h4>
                <div className="p-4 rounded-xl bg-[#070714] border border-white/5 text-sm text-gray-200 leading-relaxed">
                  {selectedSubmission.description}
                </div>
              </div>

              {/* Team Members List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9aa7c1] font-['Orbitron',sans-serif] mb-2">
                  Registered Team Roster ({selectedSubmission.members.length} members)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSubmission.members.map((member, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-semibold"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Resource Block */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9aa7c1] font-['Orbitron',sans-serif] mb-2">
                  Project Artifacts & Links
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={selectedSubmission.playableUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#ff2bd6]/10 border border-[#ff2bd6]/30 hover:border-[#ff2bd6] text-[#ff2bd6] block transition-all"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#9aa7c1]">Playable Build</div>
                    <div className="text-sm font-bold truncate mt-0.5">Live Demo &rarr;</div>
                  </a>

                  <a
                    href={selectedSubmission.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/30 hover:border-[#00e5ff] text-[#00e5ff] block transition-all"
                  >
                    <div className="text-[10px] uppercase font-bold text-[#9aa7c1]">Source Code</div>
                    <div className="text-sm font-bold truncate mt-0.5">GitHub Repo &rarr;</div>
                  </a>

                  {selectedSubmission.videoUrl ? (
                    <a
                      href={selectedSubmission.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#8b3dff]/10 border border-[#8b3dff]/30 hover:border-[#8b3dff] text-[#8b3dff] block transition-all"
                    >
                      <div className="text-[10px] uppercase font-bold text-[#9aa7c1]">Walkthrough</div>
                      <div className="text-sm font-bold truncate mt-0.5">Video Link &rarr;</div>
                    </a>
                  ) : (
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[#9aa7c1] block">
                      <div className="text-[10px] uppercase font-bold">Walkthrough</div>
                      <div className="text-xs italic mt-0.5">No video supplied</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Timestamps */}
              <div className="flex items-center justify-between text-xs text-[#9aa7c1] pt-4 border-t border-white/10 font-mono">
                <span>Submitted: {new Date(selectedSubmission.submittedAt).toUTCString()}</span>
                <span>Last Updated: {new Date(selectedSubmission.updatedAt).toUTCString()}</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
