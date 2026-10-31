
import { useState } from "react";

export default function SubmissionPage() {
  const [isOpen, setIsOpen] = useState(true);

  const [game, setGame] = useState({
    title: "",
    description: "",
    repoUrl: "",
    playableUrl: "",
    videoUrl: "",
  });

  const [savedGame, setSavedGame] = useState({
    title: "Cyber Quest",
    description:
      "A cyberpunk adventure game where players solve puzzles and explore a futuristic world.",
    repoUrl: "https://github.com/example/cyber-quest",
    playableUrl: "https://example.com/cyber-quest",
    videoUrl: "",
  });

  const [showSaved, setShowSaved] = useState(true);

  function handleChange(e) {
    setGame({
      ...game,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave(e) {
    e.preventDefault();
    setSavedGame({ ...game });
    setShowSaved(true);
    alert("Sample submission saved successfully!");
  }

  return (
    <div className="buildathon-submission">
      <style>{`
        .buildathon-submission {
          min-height: 100vh;
          padding: 35px 6%;
          box-sizing: border-box;
          background:
            radial-gradient(ellipse at 85% 5%, rgba(0,217,245,0.13), transparent 32%),
            radial-gradient(ellipse at 10% 55%, rgba(247,37,216,0.12), transparent 35%),
            #080A1C;
          color: #F5F7FF;
          font-family: Arial, sans-serif;
        }

        .bs-container {
          max-width: 1150px;
          margin: auto;
        }

        .bs-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 65px;
          gap: 15px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0,217,245,0.2);
        }

        .bs-logo {
          font-size: 23px;
          font-weight: 900;
          letter-spacing: 2px;
          color: white;
        }

        .bs-logo span {
          color: #F725D8;
        }

        .bs-tag {
          padding: 9px 16px;
          border: 1px solid rgba(0,217,245,0.5);
          border-radius: 5px;
          background: rgba(0,217,245,0.08);
          color: #00D9F5;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .bs-hero {
          text-align: center;
          margin-bottom: 45px;
        }

        .bs-label {
          display: inline-block;
          color: #F725D8;
          font-size: 12px;
          letter-spacing: 4px;
          font-weight: bold;
        }

        .bs-hero h1 {
          margin: 20px 0 15px;
          font-size: clamp(35px, 6vw, 62px);
          font-weight: 900;
          letter-spacing: 2px;
          color: white;
          text-transform: uppercase;
        }

        .bs-hero h1 span {
          color: #00D9F5;
        }

        .bs-hero p {
          color: #AAB3C8;
          line-height: 1.8;
          font-size: 15px;
        }

        .bs-demo {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .bs-demo button {
          padding: 12px 20px;
          border: 1px solid #F725D8;
          border-radius: 5px;
          background: transparent;
          color: #F725D8;
          cursor: pointer;
          font-weight: bold;
          transition: 0.2s;
        }

        .bs-demo button:hover,
        .bs-demo button.active {
          background: #F725D8;
          color: white;
          box-shadow: 0 0 18px rgba(247,37,216,0.4);
        }

        .bs-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr;
          gap: 25px;
          align-items: start;
        }

        .bs-card {
          background: rgba(13,17,39,0.95);
          border: 1px solid rgba(0,217,245,0.25);
          border-radius: 10px;
          padding: 28px;
          box-shadow: 0 0 25px rgba(0,217,245,0.05);
        }

        .bs-card h2 {
          margin-top: 0;
          color: white;
          font-size: 21px;
        }

        .bs-subtitle {
          color: #AAB3C8;
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 25px;
        }

        .bs-status {
          display: inline-block;
          padding: 9px 14px;
          border: 1px solid rgba(0,217,245,0.4);
          border-radius: 4px;
          background: rgba(0,217,245,0.08);
          color: #00D9F5;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .bs-form label {
          display: block;
          color: #F5F7FF;
          font-size: 13px;
          font-weight: bold;
          margin: 19px 0 9px;
        }

        .bs-required {
          color: #F725D8;
        }

        .bs-form input,
        .bs-form textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          background: #080A1C;
          border: 1px solid #303955;
          border-radius: 5px;
          color: white;
          font-size: 14px;
          font-family: inherit;
          transition: 0.2s;
        }

        .bs-form textarea {
          min-height: 120px;
          resize: vertical;
          line-height: 1.6;
        }

        .bs-form input:focus,
        .bs-form textarea:focus {
          outline: none;
          border-color: #00D9F5;
          box-shadow: 0 0 12px rgba(0,217,245,0.2);
        }

        .bs-form input::placeholder,
        .bs-form textarea::placeholder {
          color: #77819B;
        }

        .bs-hint {
          display: block;
          color: #AAB3C8;
          font-size: 11px;
          margin-top: 7px;
        }

        .bs-submit {
          width: 100%;
          margin-top: 28px;
          padding: 16px;
          border: none;
          border-radius: 5px;
          background: #F725D8;
          color: white;
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 0 15px rgba(247,37,216,0.25);
        }

        .bs-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(247,37,216,0.5);
        }

        .bs-guideline {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px 0;
          border-bottom: 1px solid #252D48;
        }

        .bs-guideline:last-child {
          border-bottom: none;
        }

        .bs-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 5px;
          background: rgba(247,37,216,0.1);
          border: 1px solid rgba(247,37,216,0.25);
          color: #F725D8;
          font-size: 17px;
        }

        .bs-guideline strong {
          display: block;
          font-size: 13px;
          margin-bottom: 5px;
          color: white;
        }

        .bs-guideline p {
          color: #AAB3C8;
          font-size: 12px;
          line-height: 1.6;
          margin: 0;
        }

        .bs-tip {
          margin-top: 22px;
          padding: 17px;
          border: 1px solid rgba(0,217,245,0.35);
          background: rgba(0,217,245,0.06);
          border-radius: 7px;
          color: #AAB3C8;
          font-size: 12px;
          line-height: 1.7;
        }

        .bs-tip strong {
          color: #00D9F5;
        }

        .bs-locked {
          text-align: center;
          padding: 45px 25px;
          border: 1px solid rgba(247,37,216,0.45);
          border-radius: 10px;
          background: rgba(247,37,216,0.06);
          margin-bottom: 25px;
        }

        .bs-lock-icon {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .bs-locked h2 {
          color: #F725D8;
        }

        .bs-locked p {
          color: #AAB3C8;
          line-height: 1.8;
        }

        .bs-saved {
          margin-top: 35px;
          background: #0D1127;
          border: 1px solid rgba(247,37,216,0.35);
          border-radius: 10px;
          padding: 27px;
        }

        .bs-saved-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .bs-saved-badge {
          padding: 8px 12px;
          background: rgba(0,217,245,0.1);
          border: 1px solid rgba(0,217,245,0.4);
          color: #00D9F5;
          border-radius: 4px;
          font-size: 11px;
          font-weight: bold;
        }

        .bs-saved h2 {
          font-size: 24px;
          margin: 18px 0 10px;
          color: white;
        }

        .bs-saved p {
          color: #AAB3C8;
          font-size: 13px;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .bs-saved a {
          color: #00D9F5;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .bs-saved a:hover {
          color: #F725D8;
          text-decoration: underline;
        }

        .bs-footer {
          text-align: center;
          color: #77819B;
          font-size: 12px;
          margin-top: 55px;
          padding-bottom: 15px;
          letter-spacing: 1px;
        }

        @media(max-width: 800px) {
          .bs-grid {
            grid-template-columns: 1fr;
          }

          .bs-topbar {
            margin-bottom: 45px;
          }
        }

        @media(max-width: 500px) {
          .buildathon-submission {
            padding: 25px 15px;
          }

          .bs-card {
            padding: 19px;
          }

          .bs-hero h1 {
            font-size: 34px;
          }
        }
      `}</style>

      <div className="bs-container">

        <nav className="bs-topbar">
          <div className="bs-logo">
            BUILD<span>ATHON.</span>
          </div>

          <div className="bs-tag">
            2026 · GAME SUBMISSION
          </div>
        </nav>

        <header className="bs-hero">
          <span className="bs-label">
            YOUR IDEAS. YOUR CREATION.
          </span>

          <h1>
            GAME <span>SUBMISSION</span>
          </h1>

          <p>
            Bring your creativity to life.
            <br />
            Submit your game and showcase what your team has built.
          </p>
        </header>

        <div className="bs-demo">
          <button
            className={isOpen ? "active" : ""}
            onClick={() => setIsOpen(true)}
          >
            Preview Open State
          </button>

          <button
            className={!isOpen ? "active" : ""}
            onClick={() => setIsOpen(false)}
          >
            Preview Closed State
          </button>
        </div>

        {isOpen ? (
          <div className="bs-grid">

            <section className="bs-card">
              <span className="bs-status">
                ● SUBMISSIONS OPEN
              </span>

              <h2>Submit Your Game</h2>

              <p className="bs-subtitle">
                Complete the details below to showcase your team's
                game project to the Buildathon judges.
              </p>

              <form className="bs-form" onSubmit={handleSave}>

                <label>
                  Game Title <span className="bs-required">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="Enter your game title"
                  value={game.title}
                  onChange={handleChange}
                  required
                />

                <label>
                  Game Description <span className="bs-required">*</span>
                </label>

                <textarea
                  name="description"
                  placeholder="Describe your game, its features and how to play..."
                  value={game.description}
                  onChange={handleChange}
                  required
                />

                <label>
                  GitHub Repository URL <span className="bs-required">*</span>
                </label>

                <input
                  type="url"
                  name="repoUrl"
                  placeholder="https://github.com/your-team/game"
                  value={game.repoUrl}
                  onChange={handleChange}
                  required
                />

                <label>
                  Playable Game URL <span className="bs-required">*</span>
                </label>

                <input
                  type="url"
                  name="playableUrl"
                  placeholder="https://your-game-link.com"
                  value={game.playableUrl}
                  onChange={handleChange}
                  required
                />

                <label>Demo Video URL (Optional)</label>

                <input
                  type="url"
                  name="videoUrl"
                  placeholder="https://youtube.com/your-demo"
                  value={game.videoUrl}
                  onChange={handleChange}
                />

                <span className="bs-hint">
                  You can provide a YouTube or other accessible video link.
                </span>

                <button type="submit" className="bs-submit">
                  ✦ Save Sample Submission
                </button>

              </form>
            </section>

            <aside>
              <section className="bs-card">
                <h2>Submission Guide</h2>

                <p className="bs-subtitle">
                  A few things to remember before submitting your game.
                </p>

                <div className="bs-guideline">
                  <div className="bs-icon">🎮</div>
                  <div>
                    <strong>Original Game</strong>
                    <p>Submit your team's own completed game project.</p>
                  </div>
                </div>

                <div className="bs-guideline">
                  <div className="bs-icon">💻</div>
                  <div>
                    <strong>GitHub Repository</strong>
                    <p>Make sure your repository link is accessible.</p>
                  </div>
                </div>

                <div className="bs-guideline">
                  <div className="bs-icon">🚀</div>
                  <div>
                    <strong>Playable Link</strong>
                    <p>Provide a working link so judges can test your game.</p>
                  </div>
                </div>

                <div className="bs-guideline">
                  <div className="bs-icon">🎥</div>
                  <div>
                    <strong>Demo Video</strong>
                    <p>Include a demonstration video if available.</p>
                  </div>
                </div>
              </section>

              <div className="bs-tip">
                <strong>✦ PRO TIP</strong>
                <br />
                Check all your links before submitting. Make sure
                your game is ready for the judges!
              </div>
            </aside>

          </div>
        ) : (
          <section className="bs-locked">
            <div className="bs-lock-icon">🔒</div>

            <h2>Submissions Are Closed</h2>

            <p>
              The game submission period has ended.
              You can view your existing submission,
              but you cannot create or edit it.
            </p>
          </section>
        )}

        {showSaved && savedGame && (
          <section className="bs-saved">

            <div className="bs-saved-heading">
              <span className="bs-saved-badge">
                ✓ SAVED EXAMPLE
              </span>

              <span className="bs-tag">
                SAMPLE PROJECT
              </span>
            </div>

            <h2>🎮 {savedGame.title}</h2>

            <p>{savedGame.description}</p>

            <p>
              <strong>GitHub Repository: </strong>
              <a
                href={savedGame.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                {savedGame.repoUrl}
              </a>
            </p>

            <p>
              <strong>Playable Game: </strong>
              <a
                href={savedGame.playableUrl}
                target="_blank"
                rel="noreferrer"
              >
                {savedGame.playableUrl}
              </a>
            </p>

            <p>
              <strong>Demo Video: </strong>
              {savedGame.videoUrl || "Not provided"}
            </p>

          </section>
        )}

        <footer className="bs-footer">
          BUILDATHON 2026 · CREATE. INNOVATE. COMPETE.
        </footer>

      </div>
    </div>
  );
}
