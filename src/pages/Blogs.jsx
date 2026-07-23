import React from "react";
import { motion } from "framer-motion";
import {
  Construction,
  ShieldAlert,
  ArrowLeft
} from "lucide-react";

import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-cyan-300
      overflow-hidden
      relative
    "
    >

      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        opacity-20
      "
        style={{
          backgroundImage: `
            linear-gradient(#0f172a 1px, transparent 1px),
            linear-gradient(90deg,#0f172a 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Glow */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[600px]
        h-[600px]
        rounded-full
        bg-cyan-500/10
        blur-[150px]
      "
      />

      <div
        className="
        relative
        z-10
        flex
        items-center
        justify-center
        min-h-screen
        px-6
      "
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8
          }}
          className="
          w-full
          max-w-4xl
        "
        >

          {/* Terminal Window */}
          <div
            className="
            bg-slate-950/90
            border
            border-cyan-500/30
            rounded-3xl
            overflow-hidden
            shadow-[0_0_80px_rgba(34,211,238,0.25)]
          "
          >

            {/* Header */}
            <div
              className="
              bg-cyan-500/10
              border-b
              border-cyan-500/20
              px-6
              py-4
              flex
              items-center
              gap-3
            "
            >
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              <span
                className="
                text-sm
                ml-4
                text-cyan-300
                tracking-wider
              "
              >
                PROJECT_TERMINAL.exe
              </span>
            </div>

            {/* Content */}
            <div className="p-10">

              {/* Construction Icon */}
              <motion.div
                animate={{
                  rotate: [-5, 5, -5],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="
                flex
                justify-center
                mb-8
              "
              >
                <Construction
                  size={90}
                  className="text-yellow-400"
                />
              </motion.div>

              <div className="text-center">

                <p
                  className="
                  text-cyan-400
                  tracking-[0.4em]
                  mb-4
                "
                >
                  PAGE STATUS
                </p>

                <h1
                  className="
                  text-6xl
                  font-bold
                  text-white
                  leading-tight
                "
                >
                  BLOGS UNDER
                  <br />
                  CONSTRUCTION
                </h1>

                <div
                  className="
                  flex
                  justify-center
                  mt-6
                "
                >
                  <ShieldAlert
                    size={28}
                    className="text-yellow-400"
                  />
                </div>

                <p
                  className="
                  text-slate-400
                  text-xl
                  mt-8
                  max-w-2xl
                  mx-auto
                  leading-relaxed
                "
                >
                  This Blogs page is currently being written.
                  <br />
                  The content will be published soon.
                </p>

              </div>

              {/* Terminal Messages */}
              <div
                className="
                mt-12
                bg-black
                border
                border-cyan-500/20
                rounded-2xl
                p-6
                font-mono
                text-sm
              "
              >

                <div className="mb-3">
                  &gt; Initializing Portfolio System...
                </div>

                <div className="mb-3 text-green-400">
                  ✓ Connection Established
                </div>

                <div className="mb-3 text-green-400">
                  ✓ Project Repository Loaded
                </div>

                <div className="mb-3 text-yellow-400">
                  ⚠ Project Status = Under Construction
                </div>

                <motion.div
                  animate={{
                    opacity: [1, 0, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1
                  }}
                  className="text-cyan-300"
                >
                  &gt; Building Project Documentation...
                </motion.div>

              </div>

              {/* Button */}
              <div
                className="
                mt-10
                flex
                justify-center
              "
              >
                <Link
                  to="/projects"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-500/30
                  hover:bg-cyan-500/20
                  transition
                "
                >
                  <ArrowLeft size={18} />
                  Explore Other Projects
                </Link>
              </div>

            </div>
          </div>

          {/* Footer Status */}
          <div
            className="
            text-center
            mt-8
            text-slate-500
            text-sm
            tracking-widest
          "
          >
            PROJECT STATUS : BUILDING CASE STUDY
          </div>

        </motion.div>

      </div>
    </div>
  );
}

export default ComingSoon;