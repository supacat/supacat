"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const ANIMATION_DURATION = 0.3;
const SLIDE_DISTANCE = 20;

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <div className="mb-6">
          <p className="text-gray-1100 leading-relaxed">
            We create software to help people because it's fulfilling and we're
            passionate about it. We believe that's the best reason to do
            anything.
          </p>
        </div>
      </motion.section>
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION, delay: 0.1 }}
      >
        <div className="mb-4">
          <h2 className="font-medium text-gray-1200 text-lg">Projects</h2>
        </div>
        <div className="space-y-1">
          <a
            className={cn(
              "group -mx-3 block rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
            )}
            href="https://www.mystudios.ai"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-1200 group-hover:text-gray-900">
                    MyStudios
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-700 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-gray-800 text-sm">AI Studio Photo</p>
              </div>
            </div>
          </a>
        </div>
      </motion.section>
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: SLIDE_DISTANCE }}
        transition={{ duration: ANIMATION_DURATION, delay: 0.2 }}
      >
        <div className="mb-4">
          <h2 className="font-medium text-gray-1200 text-lg">More</h2>
        </div>
        <div className="space-y-1">
          <a
            className={cn(
              "group -mx-3 block rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
            )}
            href="https://merch.supacat.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-1200 group-hover:text-gray-900">
                    Merch
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-700 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-gray-800 text-sm">
                  Official Supacat merchandise and apparel
                </p>
              </div>
            </div>
          </a>
          <a
            className={cn(
              "group -mx-3 block rounded-lg px-3 py-2 transition-colors hover:bg-gray-50"
            )}
            href="mailto:julien@supacat.io"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-1200 group-hover:text-gray-900">
                    Get in touch
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gray-700 opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-gray-800 text-sm">julien@supacat.io</p>
              </div>
            </div>
          </a>
        </div>
      </motion.section>
    </div>
  );
}
