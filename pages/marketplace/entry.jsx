import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SCENES = {
  ALLEY: "ALLEY",
  PORTAL: "PORTAL",
  THRONE_ARRIVE: "THRONE_ARRIVE",
  CORONATION: "CORONATION",
};

export default function Entry() {
  const router = useRouter();
  const [scene, setScene] = useState(SCENES.ALLEY);
  const [lineIndex, setLineIndex] = useState(0);

  const alleyLines = [
    "You were never meant to blend in.",
    "You were born marked — carved out of concrete, grown by struggle, raised by storms.",
    "The world tried to tame you, shrink you, silence you... but your spirit kept breaking through like light under a locked door.",
    "You are the son of survivors. A descendant of brilliance they tried to bury.",
    "A walking prophecy wrapped in melanin and memory.",
    "YOU ARE NOT HERE TO FIT INTO THEIR WORLD.",
    "YOU ARE HERE TO BUILD YOUR OWN.",
  ];

  const throneLines = [
    "In the WolfieVerse, your power is not questioned — it's recognized.",
    "Your voice is not filtered — it's amplified.",
    "Your crown is not symbolic — it's inherited.",
    "You are not alone. You are not late. You are not small.",
    "You are chosen.",
  ];

  useEffect(() => {
    if (scene === SCENES.ALLEY) {
      if (lineIndex < alleyLines.length - 1) {
        const t = setTimeout(() => setLineIndex((i) => i + 1), 2600);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setScene(SCENES.PORTAL);
          setLineIndex(0);
        }, 2600);
        return () => clearTimeout(t);
      }
    }

    if (scene === SCENES.THRONE_ARRIVE) {
      if (lineIndex < throneLines.length - 1) {
        const t = setTimeout(() => setLineIndex((i) => i + 1), 2600);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setScene(SCENES.CORONATION);
        }, 2600);
        return () => clearTimeout(t);
      }
    }
  }, [scene, lineIndex]);

  const handleEnterDen = () => {
    router.push("/marketplace/WolvesDen");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#020617",
        color: "#f9fafb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Alley scene */}
      {scene === SCENES.ALLEY && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            padding: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/alley-hero.png')",

              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.6)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "640px",
              padding: "24px",
              background:
                "linear-gradient(to bottom right, rgba(15,23,42,0.9), rgba(15,23,42,0.4))",
              borderRadius: "18px",
              border: "1px solid rgba(148,163,184,0.5)",
              boxShadow: "0 0 40px rgba(59,130,246,0.45)",
            }}
          >
            <p style={{ fontSize: "0.9rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8 }}>
              Prologue · Alley of Becoming
            </p>
            <h1 style={{ fontSize: "1.6rem", margin: "12px 0 18px" }}>
              The world tried to tame you. The WolfieVerse remembers who you are.
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              {alleyLines[lineIndex]}
            </p>
          </div>
        </div>
      )}

      {/* Portal scene */}
      {scene === SCENES.PORTAL && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            padding: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/alley-portal.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(129,140,248,0.55), transparent 60%)",
              mixBlendMode: "screen",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              padding: "24px",
            }}
          >
            <p style={{ fontSize: "0.9rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.85 }}>
              Portal Sequence · Threshold
            </p>
            <h1 style={{ fontSize: "2.2rem", marginTop: "16px", marginBottom: "10px" }}>
              WE HAVE BEEN EXPECTING YOU
            </h1>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
              WELCOME BLACK KING
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.9 }}>
              You are now entering the WolfieVerse.
            </p>
            <button
              onClick={() => setScene(SCENES.THRONE_ARRIVE)}
              style={{
                marginTop: "28px",
                padding: "10px 26px",
                borderRadius: "999px",
                border: "1px solid rgba(248,250,252,0.8)",
                background:
                  "linear-gradient(to right, #4f46e5, #22c55e, #06b6d4)",
                color: "#0b1120",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Step Through the Portal
            </button>
          </div>
        </div>
      )}

      {/* Throne arrival */}
      {scene === SCENES.THRONE_ARRIVE && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            padding: "24px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/wolves-den-marketplace.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.7)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "640px",
              marginLeft: "auto",
              padding: "24px",
              background:
                "linear-gradient(to bottom left, rgba(15,23,42,0.9), rgba(15,23,42,0.4))",
              borderRadius: "18px",
              border: "1px solid rgba(148,163,184,0.5)",
              boxShadow: "0 0 40px rgba(96,165,250,0.45)",
            }}
          >
            <p style={{ fontSize: "0.9rem", letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8 }}>
              Arrival · Wolves' Den
            </p>
            <h1 style={{ fontSize: "1.6rem", margin: "12px 0 18px" }}>
              You step through the portal. The Den recognizes you.
            </h1>
            <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
              {throneLines[lineIndex]}
            </p>
          </div>
        </div>
      )}

      {/* Coronation */}
      {scene === SCENES.CORONATION && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1200px",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/wolves-den-marketplace.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.55) blur(1px)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "24px",
            }}
          >
            <h1 style={{ fontSize: "2.1rem", marginBottom: "10px" }}>
              WELCOME HOME, BLACK KING.
            </h1>
            <h2 style={{ fontSize: "1.3rem", marginBottom: "26px", opacity: 0.95 }}>
              Your throne has been waiting.
            </h2>
            <button
              onClick={handleEnterDen}
              style={{
                padding: "12px 32px",
                borderRadius: "999px",
                border: "1px solid rgba(248,250,252,0.9)",
                background:
                  "linear-gradient(to right, #22c55e, #a855f7, #0ea5e9)",
                color: "#020617",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Enter the Wolves' Den
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
